import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Redirect, useRouter } from 'expo-router';
import GlassIcon from '@/components/glass-icon';
import { useAuth } from '@/context/auth-context';

const { width, height } = Dimensions.get('window');

export default function DashboardScreen() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <View style={styles.container}>
      {/* #3d991a Mesh Gradient Background Canvas */}
      <LinearGradient
        colors={['#103306', '#225b10', '#3d991a', '#143c08']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Mesh Blob 1 - Vibrant Green Top-Left Sphere */}
      <LinearGradient
        colors={['rgba(134, 239, 172, 0.35)', 'rgba(61, 153, 26, 0.2)', 'transparent']}
        style={styles.blobTopLeft}
      />

      {/* Mesh Blob 2 - Bright Emerald Center-Right Sphere */}
      <LinearGradient
        colors={['rgba(74, 222, 128, 0.30)', 'rgba(34, 197, 94, 0.15)', 'transparent']}
        style={styles.blobCenterRight}
      />

      {/* Mesh Blob 3 - Deep Green Bottom-Left Sphere */}
      <LinearGradient
        colors={['rgba(22, 101, 52, 0.45)', 'rgba(61, 153, 26, 0.15)', 'transparent']}
        style={styles.blobBottomLeft}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Top Header */}
        <View style={styles.topHeader}>
          <View style={styles.userProfileRow}>
            <View style={styles.avatarGlowRing}>
              <View style={styles.avatarInner}>
                <Text style={styles.avatarText}>YFC</Text>
              </View>
            </View>
            <View>
              <Text style={styles.welcomeText}>Welcome back 👋</Text>
              <Text style={styles.userName}>Youth Servant</Text>
            </View>
          </View>

          <View style={styles.headerIconsRow}>
            <TouchableOpacity style={styles.iconGlassBtn}>
              <GlassIcon name="search" size={18} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconGlassBtn}>
              <GlassIcon name="bell" size={18} color="#ffffff" />
              <View style={styles.notificationDot} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Actions Scroll */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.actionScroll}>
          {[
            { label: 'Upcoming Activities', route: '/events' },
            { label: 'Announcements', route: '/announcements' },
            { label: 'Notifications', route: '/notifications' },
            { label: 'Quick Attendance', route: '/attendance' },
            { label: 'Member Information', route: '/profile' }
          ].map((btn) => (
            <TouchableOpacity 
              key={btn.label} 
              style={styles.actionChip}
              onPress={() => router.push(btn.route as any)}
            >
              <Text style={styles.actionChipText}>{btn.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Hero Featured Glass Card - YFC National Youth Summit */}
        <View style={styles.heroCard}>
          <BlurView intensity={55} tint="light" style={StyleSheet.absoluteFill} />
          <View style={styles.cardPadding}>
            <View style={styles.heroBadgeRow}>
              <View style={styles.liveBadge}>
                <GlassIcon name="fire" size={13} color="#ffffff" />
                <Text style={styles.liveBadgeText}>FEATURED EVENT</Text>
              </View>
              <Text style={styles.heroChapterText}>YFC Global 2026</Text>
            </View>

            <Text style={styles.heroTitle}>National Youth Summit 2026</Text>
            <Text style={styles.heroSubtitle}>
              "Unstoppable Generation" — 3 Days of Worship, Keynotes & Fellowship.
            </Text>

            {/* Glass Countdown Timer Widget */}
            <View style={styles.timerRow}>
              <View style={styles.timerBlock}>
                <Text style={styles.timerNum}>18</Text>
                <Text style={styles.timerLabel}>DAYS</Text>
              </View>
              <Text style={styles.timerColon}>:</Text>
              <View style={styles.timerBlock}>
                <Text style={styles.timerNum}>06</Text>
                <Text style={styles.timerLabel}>HRS</Text>
              </View>
              <Text style={styles.timerColon}>:</Text>
              <View style={styles.timerBlock}>
                <Text style={styles.timerNum}>45</Text>
                <Text style={styles.timerLabel}>MINS</Text>
              </View>
            </View>

            {/* Actions */}
            <View style={styles.heroActionsRow}>
              <TouchableOpacity
                style={styles.heroPrimaryBtn}
                onPress={() => router.push('/events')}
              >
                <Text style={styles.heroPrimaryBtnText}>Reserve Your Seat</Text>
                <GlassIcon name="chevron-right" size={16} color="#ffffff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.heroSecondaryBtn}>
                <GlassIcon name="bookmark" size={16} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Daily Scripture Frosted Glass Widget */}
        <View style={styles.scriptureCard}>
          <BlurView intensity={45} tint="light" style={StyleSheet.absoluteFill} />
          <View style={styles.cardPadding}>
            <View style={styles.scriptureHeader}>
              <GlassIcon name="sparkles" size={16} color="#ffffff" />
              <Text style={styles.scriptureHeaderTitle}>VERSE OF THE DAY</Text>
            </View>
            <Text style={styles.scriptureText}>
              "Don't let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity."
            </Text>
            <Text style={styles.scriptureReference}>— 1 Timothy 4:12</Text>
          </View>
        </View>

        {/* Quick Action Grid */}
        <Text style={styles.sectionHeading}>Quick Exploration</Text>
        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.gridTouch} onPress={() => router.push('/events')}>
            <View style={styles.gridCard}>
              <BlurView intensity={40} tint="light" style={StyleSheet.absoluteFill} />
              <View style={styles.gridCardInner}>
                <View style={styles.gridIconBg}>
                  <GlassIcon name="calendar" size={22} color="#ffffff" />
                </View>
                <Text style={styles.gridTitle}>Events</Text>
                <Text style={styles.gridDesc}>Gatherings & Camps</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridTouch} onPress={() => router.push('/community')}>
            <View style={styles.gridCard}>
              <BlurView intensity={40} tint="light" style={StyleSheet.absoluteFill} />
              <View style={styles.gridCardInner}>
                <View style={styles.gridIconBg}>
                  <GlassIcon name="people" size={22} color="#ffffff" />
                </View>
                <Text style={styles.gridTitle}>Community</Text>
                <Text style={styles.gridDesc}>Households & Groups</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridTouch} onPress={() => router.push('/community')}>
            <View style={styles.gridCard}>
              <BlurView intensity={40} tint="light" style={StyleSheet.absoluteFill} />
              <View style={styles.gridCardInner}>
                <View style={styles.gridIconBg}>
                  <GlassIcon name="heart" size={22} color="#ffffff" />
                </View>
                <Text style={styles.gridTitle}>Prayer Wall</Text>
                <Text style={styles.gridDesc}>Share Intentions</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridTouch} onPress={() => router.push('/events')}>
            <View style={styles.gridCard}>
              <BlurView intensity={40} tint="light" style={StyleSheet.absoluteFill} />
              <View style={styles.gridCardInner}>
                <View style={styles.gridIconBg}>
                  <GlassIcon name="music" size={22} color="#ffffff" />
                </View>
                <Text style={styles.gridTitle}>Worship</Text>
                <Text style={styles.gridDesc}>Playlists & Songs</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Recent Announcements */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionHeading}>Youth Highlights</Text>
          <TouchableOpacity onPress={() => router.push('/events')}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.announcementCard}>
          <BlurView intensity={45} tint="light" style={StyleSheet.absoluteFill} />
          <View style={styles.cardPadding}>
            <View style={styles.announcementHeader}>
              <GlassIcon name="shield" size={16} color="#ffffff" />
              <Text style={styles.announcementTag}>Weekly Chapter Announcement</Text>
            </View>
            <Text style={styles.announcementTitle}>Friday Worship Night Location Update</Text>
            <Text style={styles.announcementBody}>
              This week's praise session will be held at the Main Youth Sanctuary at 7:30 PM. Acoustic jam & snacks following praise!
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#143c08',
    position: 'relative',
    overflow: 'hidden',
  },
  blobTopLeft: {
    position: 'absolute',
    top: -height * 0.1,
    left: -width * 0.2,
    width: width * 1.1,
    height: width * 1.1,
    borderRadius: 999,
  },
  blobCenterRight: {
    position: 'absolute',
    top: height * 0.3,
    right: -width * 0.3,
    width: width * 1.0,
    height: width * 1.0,
    borderRadius: 999,
  },
  blobBottomLeft: {
    position: 'absolute',
    bottom: -height * 0.1,
    left: -width * 0.15,
    width: width * 0.9,
    height: width * 0.9,
    borderRadius: 999,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 110,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  userProfileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatarGlowRing: {
    width: 48,
    height: 48,
    borderRadius: 24,
    padding: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  avatarInner: {
    flex: 1,
    borderRadius: 22,
    backgroundColor: '#3d991a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 13,
  },
  welcomeText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '500',
  },
  userName: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '700',
  },
  headerIconsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  iconGlassBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 1,
    borderColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // @ts-ignore Web specific backdrop filter
    ...(Platform.OS === 'web' ? { backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' } : {}),
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 8,
    right: 8,
    borderWidth: 1,
    borderColor: '#3d991a',
  },
  actionScroll: {
    marginBottom: 24,
  },
  actionChip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.18)',
    marginRight: 10,
  },
  actionChipText: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontWeight: '600',
    fontSize: 14,
  },
  heroCard: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#ffffff',
    overflow: 'hidden',
    marginBottom: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
    position: 'relative',
    // @ts-ignore Web backdrop filter
    ...(Platform.OS === 'web' ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } : {}),
  },
  cardPadding: {
    padding: 20,
    position: 'relative',
    zIndex: 10,
  },
  heroBadgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(20, 60, 8, 0.55)',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  liveBadgeText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 10,
    letterSpacing: 0.8,
  },
  heroChapterText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 6,
    lineHeight: 28,
  },
  heroSubtitle: {
    fontSize: 13,
    color: '#ffffff',
    lineHeight: 20,
    marginBottom: 16,
    fontWeight: '400',
  },
  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  timerBlock: {
    alignItems: 'center',
  },
  timerNum: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  timerLabel: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: '700',
    marginTop: 2,
    letterSpacing: 0.5,
  },
  timerColon: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  heroActionsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  heroPrimaryBtn: {
    flex: 1,
    backgroundColor: '#3d991a',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  heroPrimaryBtnText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
  heroSecondaryBtn: {
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  scriptureCard: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#ffffff',
    overflow: 'hidden',
    marginBottom: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
    // @ts-ignore Web backdrop filter
    ...(Platform.OS === 'web' ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } : {}),
  },
  scriptureHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  scriptureHeaderTitle: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  scriptureText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#ffffff',
    lineHeight: 22,
    marginBottom: 8,
    fontWeight: '400',
  },
  scriptureReference: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'right',
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 14,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 24,
  },
  gridTouch: {
    width: '48%',
  },
  gridCard: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#ffffff',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
    // @ts-ignore Web backdrop filter
    ...(Platform.OS === 'web' ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } : {}),
  },
  gridCardInner: {
    padding: 16,
    position: 'relative',
    zIndex: 10,
  },
  gridIconBg: {
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  gridTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 2,
  },
  gridDesc: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '500',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  seeAllText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  announcementCard: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#ffffff',
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
    // @ts-ignore Web backdrop filter
    ...(Platform.OS === 'web' ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } : {}),
  },
  announcementHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  announcementTag: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  announcementTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  announcementBody: {
    color: '#ffffff',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '400',
  },
});