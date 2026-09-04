-- Sample Seed Data for testing yfc_members
--
-- Run this in the Supabase SQL Editor (Dashboard > SQL Editor). The members list renders
-- "No members in the database yet." until this table has rows.
--
-- The previous version of this file inserted into `chapter` and `ministry`, which do not
-- exist on the live table, so it failed with 42703 and left the table empty. These columns
-- match the live schema. Note the quoted "member_ID" -- unquoted member_ID resolves to a
-- non-existent member_id column.

INSERT INTO public.yfc_members ("member_ID", firstname, middlename, lastname, picture, email, area, status)
VALUES
    ('YFC-2026-001', 'Juan',  'Carlos', 'Dela Cruz', NULL, 'juan.delacruz@example.com',  'Area 1', 'Active'),
    ('YFC-2026-002', 'Maria', 'Clara',  'Santos',    NULL, 'maria.santos@example.com',   'Area 1', 'Active'),
    ('YFC-2026-003', 'Paolo', 'Reyes',  'Ramos',     NULL, 'paolo.ramos@example.com',    'Area 2', 'Inactive')
ON CONFLICT ("member_ID") DO NOTHING;
