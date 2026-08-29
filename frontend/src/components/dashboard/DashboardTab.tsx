import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import GlassIcon from '@/components/glass-icon';

export function DashboardTab({ router }: { router: any }) {
  return (
    <View style={styles.container}>
      {/* 1. At A Glance */}
      <Text style={styles.sectionHeading}>At A Glance</Text>
      <View style={styles.gridContainer}>
        <View style={styles.gridCard}>
          <BlurView intensity={40} tint="light" style={StyleSheet.absoluteFill} />
          <View style={styles.gridCardInner}>
            <Text style={styles.gridTitle}>Members</Text>
            <TouchableOpacity onPress={() => console.log('Show members')}>
              <Text style={styles.gridNumber}>1,204</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.gridCard}>
          <BlurView intensity={40} tint="light" style={StyleSheet.absoluteFill} />
          <View style={styles.gridCardInner}>
            <Text style={styles.gridTitle}>New This Month</Text>
            <Text style={styles.gridNumber}>45</Text>
          </View>
        </View>
      </View>

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
          </View>
        </View>
      </View>

      {/* 2. Birthday Celebrants & 3. Activity Reminder */}
      <View style={styles.gridContainer}>
        <View style={styles.gridCard}>
          <BlurView intensity={40} tint="light" style={StyleSheet.absoluteFill} />
          <View style={styles.gridCardInner}>
             <View style={styles.iconHeader}>
               <GlassIcon name="sparkles" size={16} color="#ffffff" />
               <Text style={styles.gridTitle}>Birthdays</Text>
             </View>
            <Text style={styles.gridDesc}>5 celebrants this week</Text>
          </View>
        </View>

        <View style={styles.gridCard}>
          <BlurView intensity={40} tint="light" style={StyleSheet.absoluteFill} />
          <View style={styles.gridCardInner}>
            <View style={styles.iconHeader}>
               <GlassIcon name="calendar" size={16} color="#ffffff" />
               <Text style={styles.gridTitle}>Up Next</Text>
             </View>
            <Text style={styles.gridDesc}>Chapter Assembly (Tomorrow)</Text>
          </View>
        </View>
      </View>

      {/* 4. Evangelization Growth */}
      <Text style={styles.sectionHeading}>Evangelization Growth</Text>
      <View style={styles.infoCard}>
        <BlurView intensity={45} tint="light" style={StyleSheet.absoluteFill} />
        <View style={styles.cardPadding}>
          <Text style={styles.infoTitle}>Youth Camps: 12 (vs 10 last year)</Text>
          <Text style={styles.infoTitle}>Graduates: 320 (vs 250 last year)</Text>
          <Text style={styles.infoTitle}>Total Members: +15% YoY</Text>
        </View>
      </View>

      {/* 5. Area Summary */}
      <Text style={styles.sectionHeading}>Area Summary</Text>
      <View style={styles.infoCard}>
         <BlurView intensity={45} tint="light" style={StyleSheet.absoluteFill} />
         <View style={styles.cardPadding}>
           <Text style={styles.infoDesc}>North Sector - 5 Chapters - 12 Households</Text>
         </View>
      </View>
      
      {/* 6. Member Search Mock */}
       <Text style={styles.sectionHeading}>Quick Member Search</Text>
       <View style={styles.infoCard}>
         <BlurView intensity={45} tint="light" style={StyleSheet.absoluteFill} />
         <View style={styles.cardPadding}>
           <TouchableOpacity style={styles.heroPrimaryBtn}>
              <GlassIcon name="search" size={16} color="#ffffff" />
              <Text style={styles.heroPrimaryBtnText}>Search by Name, Service...</Text>
            </TouchableOpacity>
         </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 14,
    marginTop: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 24,
  },
  gridCard: {
    width: '48%',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#ffffff',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    // @ts-ignore Web backdrop filter
    ...(Platform.OS === 'web' ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } : {}),
  },
  gridCardInner: {
    padding: 16,
    position: 'relative',
    zIndex: 10,
  },
  iconHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  gridTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
  gridNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
    marginTop: 4,
  },
  gridDesc: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
    marginTop: 4,
  },
  infoCard: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#ffffff',
    overflow: 'hidden',
    marginBottom: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    // @ts-ignore Web backdrop filter
    ...(Platform.OS === 'web' ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } : {}),
  },
  cardPadding: {
    padding: 20,
    position: 'relative',
    zIndex: 10,
  },
  infoTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  infoDesc: {
     color: '#ffffff',
     fontSize: 14,
  },
  heroCard: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#ffffff',
    overflow: 'hidden',
    marginBottom: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    // @ts-ignore Web backdrop filter
    ...(Platform.OS === 'web' ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } : {}),
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
  },
  heroPrimaryBtnText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
});
