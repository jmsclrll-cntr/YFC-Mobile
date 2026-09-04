import { Request, Response } from 'express';
import { supabase } from '../config/supabase';

// Columns as they actually exist on public.yfc_members. "member_ID" was created as a quoted
// identifier, so Postgres kept the capital ID and the JSON key is case-sensitive. Listing
// columns explicitly (instead of '*') makes a schema drift fail loudly rather than silently
// returning rows with missing fields.
const MEMBER_COLUMNS = 'member_ID, firstname, middlename, lastname, picture, email, area, status';

export async function getMembers(req: Request, res: Response) {
  try {
    const searchQuery = typeof req.query.q === 'string' ? req.query.q.trim().toLowerCase() : '';

    const { data, error } = await supabase
      .from('yfc_members')
      .select(MEMBER_COLUMNS)
      .order('lastname', { ascending: true })
      .order('firstname', { ascending: true });

    // Only a real error is a failure. An empty result means the query ran and the table has no
    // readable rows, which is a successful, empty 200 -- not a 500.
    if (error) {
      console.error('Supabase getMembers error:', error.message, error.code, error.details, error.hint);
      return res.status(500).json({
        success: false,
        message: 'Failed to retrieve members from database.',
      });
    }

    let members: any[] = data ?? [];

    if (searchQuery) {
      members = members.filter((member: any) => {
        const fullName = [member.firstname, member.middlename, member.lastname]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        const memberId = String(member.member_ID ?? '').toLowerCase();
        const email = String(member.email ?? '').toLowerCase();
        const area = String(member.area ?? '').toLowerCase();
        return (
          fullName.includes(searchQuery) ||
          memberId.includes(searchQuery) ||
          email.includes(searchQuery) ||
          area.includes(searchQuery)
        );
      });
    }

    return res.status(200).json({
      success: true,
      count: members.length,
      data: members,
    });
  } catch (err: any) {
    console.error('Members controller error:', err);
    return res.status(500).json({
      success: false,
      message: err.message || 'Internal server error.',
    });
  }
}

export async function getMemberById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    // eq() sends the id as a parameter. The previous version interpolated it into an or()
    // filter string, which both referenced a non-existent member_id column and let caller
    // input alter the PostgREST filter expression.
    const { data, error } = await supabase
      .from('yfc_members')
      .select(MEMBER_COLUMNS)
      .eq('member_ID', id)
      .maybeSingle();

    // maybeSingle() returns data: null with no error when nothing matches, so a genuine
    // database failure stays a 500 and only a real miss becomes a 404.
    if (error) {
      console.error('Supabase getMemberById error:', error.message, error.code, error.details, error.hint);
      return res.status(500).json({
        success: false,
        message: 'Failed to retrieve member from database.',
      });
    }

    if (!data) {
      return res.status(404).json({
        success: false,
        message: 'Member not found.',
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (err: any) {
    console.error('GetMemberById controller error:', err);
    return res.status(500).json({
      success: false,
      message: err.message || 'Internal server error.',
    });
  }
}
