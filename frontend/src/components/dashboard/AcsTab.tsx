import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GlassIcon from '@/components/glass-icon';
import { UiColors } from '@/constants/ui';
import { dashboardStyles as styles } from './shared-styles';

export function AcsTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>ACS & Member IDs</Text>

      <View style={styles.infoCard}>
        <View style={[styles.cardPadding, { alignItems: 'center' }]}>
          <View style={styles.iconBox}><GlassIcon name="share" size={32} color={UiColors.accent} /></View>
          <Text style={[styles.infoTitle, { textAlign: 'center', fontSize: 16 }]}>Attendance Capture Software (ACS)</Text>
          <Text style={[styles.infoDesc, { textAlign: 'center', marginBottom: 20, paddingHorizontal: 10 }]}>
            Export attendance data from ACS or connect to local scanner networks.
          </Text>
          <TouchableOpacity style={[styles.btnPrimary, { width: '100%' }]}>
            <Text style={styles.btnText}>Export ACS Data</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoCard}>
        <View style={[styles.cardPadding, { alignItems: 'center' }]}>
          <View style={styles.iconBox}><GlassIcon name="person" size={32} color={UiColors.accent} /></View>
          <Text style={[styles.infoTitle, { textAlign: 'center', fontSize: 16 }]}>Member ID Label App</Text>
          <Text style={[styles.infoDesc, { textAlign: 'center', marginBottom: 20, paddingHorizontal: 10 }]}>
            Generate, format and print Member ID labels for new members.
          </Text>
          <TouchableOpacity style={[styles.btnSecondary, { width: '100%' }]}>
            <Text style={styles.btnTextSecondary}>Open ID App</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
