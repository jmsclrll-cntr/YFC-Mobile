import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import GlassIcon from '@/components/glass-icon';
import { UiColors, UiRadius, UiShadow } from '@/constants/ui';
import { dashboardStyles as styles } from './shared-styles';

export function DashboardTab({ router }: { router: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>At A Glance</Text>
      <View style={styles.gridContainer}>
        <View style={styles.gridCard}>
          <View style={styles.gridCardInner}>
            <Text style={styles.gridTitle}>Members</Text>
            <TouchableOpacity onPress={() => console.log('Show members')}>
              <Text style={styles.gridNumber}>1,204</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.gridCard}>
          <View style={styles.gridCardInner}>
            <Text style={styles.gridTitle}>New This Month</Text>
            <Text style={styles.gridNumber}>45</Text>
          </View>
        </View>
      </View>

      <View style={heroStyles.heroCard}>
        <View style={heroStyles.cardPadding}>
          <View style={heroStyles.heroBadgeRow}>
            <View style={heroStyles.liveBadge}>
              <GlassIcon name="fire" size={13} color={UiColors.accent} />
              <Text style={heroStyles.liveBadgeText}>FEATURED EVENT</Text>
            </View>
            <Text style={heroStyles.heroChapterText}>YFC Global 2026</Text>
          </View>

          <Text style={heroStyles.heroTitle}>National Youth Summit 2026</Text>
          <Text style={heroStyles.heroSubtitle}>
            "Unstoppable Generation" — 3 Days of Worship, Keynotes & Fellowship.
          </Text>

          <View style={heroStyles.timerRow}>
            <View style={heroStyles.timerBlock}>
              <Text style={heroStyles.timerNum}>18</Text>
              <Text style={heroStyles.timerLabel}>DAYS</Text>
            </View>
            <Text style={heroStyles.timerColon}>:</Text>
            <View style={heroStyles.timerBlock}>
              <Text style={heroStyles.timerNum}>06</Text>
              <Text style={heroStyles.timerLabel}>HRS</Text>
            </View>
            <Text style={heroStyles.timerColon}>:</Text>
            <View style={heroStyles.timerBlock}>
              <Text style={heroStyles.timerNum}>45</Text>
              <Text style={heroStyles.timerLabel}>MINS</Text>
            </View>
          </View>

          <View style={heroStyles.heroActionsRow}>
            <TouchableOpacity
              style={heroStyles.heroPrimaryBtn}
              onPress={() => router.push('/events')}
            >
              <Text style={heroStyles.heroPrimaryBtnText}>Reserve Your Seat</Text>
              <GlassIcon name="chevron-right" size={16} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.gridCard}>
          <View style={styles.gridCardInner}>
            <View style={styles.iconHeader}>
              <GlassIcon name="sparkles" size={16} color={UiColors.accent} />
              <Text style={styles.gridTitle}>Birthdays</Text>
            </View>
            <Text style={styles.gridDesc}>5 celebrants this week</Text>
          </View>
        </View>

        <View style={styles.gridCard}>
          <View style={styles.gridCardInner}>
            <View style={styles.iconHeader}>
              <GlassIcon name="calendar" size={16} color={UiColors.accent} />
              <Text style={styles.gridTitle}>Up Next</Text>
            </View>
            <Text style={styles.gridDesc}>Chapter Assembly (Tomorrow)</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionHeading}>Evangelization Growth</Text>
      <View style={styles.infoCard}>
        <View style={styles.cardPadding}>
          <Text style={styles.infoTitle}>Youth Camps: 12 (vs 10 last year)</Text>
          <Text style={styles.infoTitle}>Graduates: 320 (vs 250 last year)</Text>
          <Text style={styles.infoTitle}>Total Members: +15% YoY</Text>
        </View>
      </View>

      <Text style={styles.sectionHeading}>Area Summary</Text>
      <View style={styles.infoCard}>
        <View style={styles.cardPadding}>
          <Text style={styles.infoDesc}>North Sector - 5 Chapters - 12 Households</Text>
        </View>
      </View>

      <Text style={styles.sectionHeading}>Quick Member Search</Text>
      <View style={styles.infoCard}>
        <View style={styles.cardPadding}>
          <TouchableOpacity style={heroStyles.heroPrimaryBtn}>
            <GlassIcon name="search" size={16} color="#ffffff" />
            <Text style={heroStyles.heroPrimaryBtnText}>Search by Name, Service...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const heroStyles = StyleSheet.create({
  heroCard: {
    borderRadius: UiRadius.lg,
    borderWidth: StyleSheet.hairlineWidth + 0.5,
    borderColor: UiColors.border,
    overflow: 'hidden',
    marginBottom: 24,
    backgroundColor: UiColors.surface,
    ...UiShadow.card,
  },
  cardPadding: {
    padding: 20,
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
    backgroundColor: UiColors.accentLight,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 14,
    borderWidth: StyleSheet.hairlineWidth + 0.5,
    borderColor: 'rgba(61, 153, 26, 0.2)',
  },
  liveBadgeText: {
    color: UiColors.accent,
    fontWeight: '600',
    fontSize: 10,
    letterSpacing: 0.8,
  },
  heroChapterText: {
    color: UiColors.textSecondary,
    fontSize: 12,
    fontWeight: '500',
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: UiColors.text,
    marginBottom: 6,
    lineHeight: 28,
    letterSpacing: -0.3,
  },
  heroSubtitle: {
    fontSize: 13,
    color: UiColors.textSecondary,
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
    backgroundColor: UiColors.surfaceMuted,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: UiRadius.md,
    borderWidth: StyleSheet.hairlineWidth + 0.5,
    borderColor: UiColors.border,
  },
  timerBlock: {
    alignItems: 'center',
  },
  timerNum: {
    color: UiColors.text,
    fontSize: 18,
    fontWeight: '700',
  },
  timerLabel: {
    color: UiColors.textSecondary,
    fontSize: 9,
    fontWeight: '600',
    marginTop: 2,
    letterSpacing: 0.5,
  },
  timerColon: {
    color: UiColors.textTertiary,
    fontSize: 18,
    fontWeight: '600',
  },
  heroActionsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  heroPrimaryBtn: {
    flex: 1,
    backgroundColor: UiColors.accent,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: UiRadius.md,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  heroPrimaryBtnText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
});
