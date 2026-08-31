import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GlassIcon from '@/components/glass-icon';
import { UiColors } from '@/constants/ui';
import { dashboardStyles as styles } from './shared-styles';

export function ActivitiesTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Activities & Events</Text>

      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.btnPrimary}>
          <GlassIcon name="plus" size={16} color="#ffffff" />
          <Text style={styles.btnText}>New Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnSecondary, { backgroundColor: UiColors.accentLight, borderColor: 'rgba(61, 153, 26, 0.2)' }]}>
          <Text style={[styles.btnTextSecondary, { color: UiColors.accent }]}>Open ACS</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filterRow}>
        <TouchableOpacity style={styles.filterChipActive}><Text style={styles.filterTextActive}>Upcoming</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterChip}><Text style={styles.filterText}>Past</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterChip}><Text style={styles.filterText}>By Chapter</Text></TouchableOpacity>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.cardPadding}>
          <View style={styles.eventItem}>
            <View style={styles.dateBox}>
              <Text style={styles.dateMonth}>OCT</Text>
              <Text style={styles.dateDay}>15</Text>
            </View>
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>Chapter Assembly</Text>
              <Text style={styles.eventDesc}>Parish Hall • 7:00 PM</Text>
            </View>
            <TouchableOpacity><GlassIcon name="chevron-right" size={16} color={UiColors.textTertiary} /></TouchableOpacity>
          </View>

          <View style={[styles.eventItem, { borderBottomWidth: 0 }]}>
            <View style={styles.dateBox}>
              <Text style={styles.dateMonth}>NOV</Text>
              <Text style={styles.dateDay}>02</Text>
            </View>
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>Youth Camp</Text>
              <Text style={styles.eventDesc}>Retreat House • 3 Days</Text>
            </View>
            <TouchableOpacity><GlassIcon name="chevron-right" size={16} color={UiColors.textTertiary} /></TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
