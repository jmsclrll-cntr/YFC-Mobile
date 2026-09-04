import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native';
import GlassIcon from '@/components/glass-icon';
import { UiColors } from '@/constants/ui';
import { supabase } from '@/lib/supabase';
import { dashboardStyles as styles } from './shared-styles';

const MEMBER_PICTURE_BUCKET = 'yfc_members';

// Columns as they actually exist on public.yfc_members. "member_ID" was created as a
// quoted identifier, so Postgres kept the capital ID and the JSON key is case-sensitive.
// Listing columns explicitly (instead of '*') makes a schema drift fail loudly here
// rather than silently render blank rows.
const MEMBER_COLUMNS = 'member_ID, firstname, middlename, lastname, picture, email, area, status';

interface MemberRow {
  member_ID: string | null;
  firstname: string | null;
  middlename: string | null;
  lastname: string | null;
  picture: string | null;
  email: string | null;
  area: string | null;
  status: string | null;
}

interface Member {
  key: string;
  id: string;
  fullName: string;
  detail: string;
  picture: string | null;
  searchText: string;
}

const clean = (value?: string | null): string => value?.trim() ?? '';

const normalizeMember = (row: MemberRow, index: number): Member => {
  const fullName = [row.firstname, row.middlename, row.lastname].map(clean).filter(Boolean).join(' ');
  const id = clean(row.member_ID);
  const detail = [clean(row.area), clean(row.status)].filter(Boolean).join(' • ');

  return {
    key: id || `index-${index}`,
    id,
    fullName: fullName || 'Unnamed Member',
    detail,
    picture: row.picture,
    searchText: [fullName, id, clean(row.email), clean(row.area), clean(row.status)]
      .filter(Boolean)
      .join(' ')
      .toLowerCase(),
  };
};

const getImageUrl = (picture?: string | null): string | null => {
  const value = clean(picture);
  if (!value) return null;
  if (/^(https?:|data:|file:)/i.test(value)) return value;

  // Stored values are paths inside MEMBER_PICTURE_BUCKET. Only strip a leading segment when
  // it is literally the bucket name — treating the first segment as the bucket turned nested
  // paths like "avatars/juan.jpg" into a lookup against a bucket named "avatars".
  const path = value.replace(/^\/+/, '');
  const objectPath = path.startsWith(`${MEMBER_PICTURE_BUCKET}/`)
    ? path.slice(MEMBER_PICTURE_BUCKET.length + 1)
    : path;

  if (!objectPath) return null;

  return supabase.storage.from(MEMBER_PICTURE_BUCKET).getPublicUrl(objectPath).data.publicUrl;
};

function MemberAvatar({ picture, name }: { picture?: string | null; name: string }) {
  const [imageError, setImageError] = useState(false);
  const imageUrl = getImageUrl(picture);
  const initial = (name.trim()[0] || 'M').toUpperCase();

  if (imageUrl && !imageError) {
    return (
      // borderRadius alone does not clip children on Android, so the container must hide overflow.
      <View style={[styles.avatar, { overflow: 'hidden' }]}>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: '100%', height: '100%' }}
          onError={() => setImageError(true)}
          accessibilityLabel={name}
        />
      </View>
    );
  }

  return (
    <View style={styles.avatar}>
      <Text style={styles.avatarText}>{initial}</Text>
    </View>
  );
}

export function MembersTab() {
  const [members, setMembers] = useState<Member[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Guards against a resolved request writing state after unmount, and against a slow
  // first request overwriting the result of a newer Retry.
  const requestIdRef = useRef(0);
  const mountedRef = useRef(true);

  const fetchMembers = useCallback(async () => {
    const requestId = ++requestIdRef.current;
    const isStale = () => !mountedRef.current || requestId !== requestIdRef.current;

    setLoading(true);
    setError(null);

    try {
      const { data, error: fetchError } = await supabase
        .from('yfc_members')
        .select(MEMBER_COLUMNS)
        .order('lastname', { ascending: true })
        .order('firstname', { ascending: true });

      if (isStale()) return;

      if (fetchError) {
        if (__DEV__) {
          console.error(
            'Supabase members error:',
            fetchError.message,
            fetchError.code,
            fetchError.details,
            fetchError.hint,
          );
        }
        setMembers([]);
        setError('Unable to load members right now. Please try again.');
        return;
      }

      // An empty result is a success, not a failure: it means the query ran and the table
      // has no rows the app can read. It must fall through to the "no members" empty state.
      setMembers(((data ?? []) as MemberRow[]).map(normalizeMember));
    } catch (err: any) {
      if (isStale()) return;
      if (__DEV__) {
        console.error('Members request failed:', err);
      }
      setMembers([]);
      setError('Unable to load members right now. Please try again.');
    } finally {
      if (!isStale()) setLoading(false);
    }
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    fetchMembers();

    return () => {
      mountedRef.current = false;
    };
  }, [fetchMembers]);

  const filteredMembers = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return members;
    return members.filter((member) => member.searchText.includes(query));
  }, [members, searchQuery]);

  const renderBody = () => {
    if (loading) {
      return (
        <View style={{ paddingVertical: 20, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="small" color={UiColors.accent} />
          <Text style={[styles.memberDesc, { marginTop: 8 }]}>Loading members...</Text>
        </View>
      );
    }

    if (error) {
      return (
        <View style={{ paddingVertical: 20, alignItems: 'center' }}>
          <Text style={[styles.memberDesc, { color: UiColors.error, textAlign: 'center' }]}>{error}</Text>
          <TouchableOpacity
            onPress={fetchMembers}
            style={[styles.btnSecondary, { marginTop: 12, paddingVertical: 8, paddingHorizontal: 16 }]}
          >
            <Text style={styles.btnTextSecondary}>Retry</Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (filteredMembers.length === 0) {
      return (
        <View style={{ paddingVertical: 20, alignItems: 'center' }}>
          <Text style={[styles.memberDesc, { textAlign: 'center' }]}>
            {members.length === 0
              ? 'No members in the database yet.'
              : `No members match "${searchQuery.trim()}".`}
          </Text>
        </View>
      );
    }

    return filteredMembers.map((member, index) => (
      <View
        key={member.key}
        style={[
          styles.memberRow,
          index === filteredMembers.length - 1 && { borderBottomWidth: 0 },
        ]}
      >
        <MemberAvatar picture={member.picture} name={member.fullName} />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>{member.fullName}</Text>
          {member.detail ? <Text style={styles.memberDesc}>{member.detail}</Text> : null}
          {member.id ? <Text style={styles.memberDesc}>{member.id}</Text> : null}
        </View>
        <TouchableOpacity>
          <GlassIcon name="chevron-right" size={16} color={UiColors.textTertiary} />
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Members Database</Text>

      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.btnPrimary}>
          <GlassIcon name="plus" size={16} color="#ffffff" />
          <Text style={styles.btnText}>Add Member</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSecondary}>
          <Text style={styles.btnTextSecondary}>Transfers/Transitions</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInner}>
          <GlassIcon name="search" size={18} color={UiColors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name, member ID, or area..."
            placeholderTextColor={UiColors.textTertiary}
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.cardPadding}>{renderBody()}</View>
      </View>
    </View>
  );
}
