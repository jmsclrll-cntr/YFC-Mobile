import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import VibrantBackground from '@/components/vibrant-background';
import GlassCard from '@/components/glass-card';
import GlassIcon, { IconName } from '@/components/glass-icon';
import { useAuth } from '@/context/auth-context';

export default function ProfileScreen() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };
  return (
    <VibrantBackground>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Profile Card Header */}
        <GlassCard style={styles.profileHeaderCard} glowColor="rgba(139, 92, 246, 0.3)">
          <View style={styles.avatarLarge}>
            <Text style={styles.avatarLargeText}>JD</Text>
          </View>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileRole}>YFC Youth Member • Campus Chapter</Text>
          
          <View style={styles.badgesRow}>
            <View style={styles.badgeChip}>
              <GlassIcon name="award" size={14} color="#f472b6" />
              <Text style={styles.badgeText}>Active Servant</Text>
            </View>
            <View style={styles.badgeChip}>
              <GlassIcon name="shield" size={14} color="#38bdf8" />
              <Text style={styles.badgeText}>Verified Leader</Text>
            </View>
          </View>
        </GlassCard>

        {/* Stats Grid */}
        <View style={styles.statsRow}>
          <GlassCard style={styles.statBox}>
            <Text style={styles.statNumber}>18</Text>
            <Text style={styles.statLabel}>Events Attended</Text>
          </GlassCard>

          <GlassCard style={styles.statBox}>
            <Text style={styles.statNumber}>42</Text>
            <Text style={styles.statLabel}>Prayers Shared</Text>
          </GlassCard>

          <GlassCard style={styles.statBox}>
            <Text style={styles.statNumber}>2 yrs</Text>
            <Text style={styles.statLabel}>Member</Text>
          </GlassCard>
        </View>

        {/* Menu Items */}
        <Text style={styles.sectionTitle}>Account & Settings</Text>
        <GlassCard style={styles.menuContainer}>
          {[
            { icon: 'person' as IconName, label: 'Personal Information', color: '#a855f7' },
            { icon: 'calendar' as IconName, label: 'My Registered Events', color: '#ec4899' },
            { icon: 'heart' as IconName, label: 'Saved Prayer Intentions', color: '#06b6d4' },
            { icon: 'settings' as IconName, label: 'App Preferences & Notifications', color: '#f59e0b' },
          ].map((item, idx) => (
            <TouchableOpacity key={idx} style={styles.menuItem}>
              <View style={[styles.menuIconBg, { backgroundColor: item.color + '22' }]}>
                <GlassIcon name={item.icon} size={18} color={item.color} />
              </View>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <GlassIcon name="chevron-right" size={18} color="rgba(255, 255, 255, 0.4)" />
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={[styles.menuItem, { borderBottomWidth: 0 }]} onPress={handleLogout}>
            <View style={[styles.menuIconBg, { backgroundColor: 'rgba(239, 68, 68, 0.2)' }]}>
              <GlassIcon name="logout" size={18} color="#ef4444" />
            </View>
            <Text style={[styles.menuLabel, { color: '#ef4444' }]}>Log Out</Text>
          </TouchableOpacity>
        </GlassCard>
      </ScrollView>
    </VibrantBackground>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 110,
  },
  profileHeaderCard: {
    alignItems: 'center',
    paddingVertical: 24,
    marginBottom: 20,
  },
  avatarLarge: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: 'rgba(139, 92, 246, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    marginBottom: 14,
  },
  avatarLargeText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
  },
  profileName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 4,
  },
  profileRole: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 14,
  },
  badgesRow: {
    flexDirection: 'row',
    gap: 10,
  },
  badgeChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: '800',
    color: '#a855f7',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.65)',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 14,
  },
  menuContainer: {
    padding: 6,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
  },
  menuIconBg: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  menuLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
  },
});
