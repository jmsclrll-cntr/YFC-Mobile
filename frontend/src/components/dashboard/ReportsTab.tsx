import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GlassIcon from '@/components/glass-icon';
import { UiColors } from '@/constants/ui';
import { dashboardStyles as styles } from './shared-styles';

export function ReportsTab() {
  const reports = [
    { title: 'Members Directory', desc: 'Export full list of active members', icon: 'people' },
    { title: 'Inactive Members', desc: 'Export members with low attendance', icon: 'person' },
    { title: 'Leaders & Households', desc: 'Hierarchy and structure report', icon: 'people' },
    { title: 'Birthday Celebrants', desc: 'Monthly birthday list', icon: 'sparkles' },
    { title: 'Formations Report', desc: 'Track completion status', icon: 'bookmark' },
    { title: 'Evangelization (YTD)', desc: 'Camp stats and growth', icon: 'fire' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Data Exports & Reports</Text>

      <View style={styles.gridContainer}>
        {reports.map((report, i) => (
          <View key={i} style={styles.gridCard}>
            <View style={styles.gridCardInner}>
              <View style={styles.iconHeader}>
                <GlassIcon name={report.icon as any} size={18} color={UiColors.accent} />
                <Text style={styles.gridTitle}>{report.title}</Text>
              </View>
              <Text style={styles.gridDesc}>{report.desc}</Text>
              <TouchableOpacity style={styles.exportBtn}>
                <GlassIcon name="share" size={14} color={UiColors.accent} />
                <Text style={styles.exportBtnText}>Export CSV</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
