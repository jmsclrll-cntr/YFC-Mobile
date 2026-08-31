import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GlassIcon from '@/components/glass-icon';
import { dashboardStyles as styles } from './shared-styles';

export function EvangelizationTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Evangelization (Youth Camps)</Text>

      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.btnPrimary}>
          <GlassIcon name="plus" size={16} color="#ffffff" />
          <Text style={styles.btnText}>Add Youth Camp</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionHeading}>Recent Camps</Text>

      <View style={styles.infoCard}>
        <View style={styles.cardPadding}>
          <Text style={styles.campTitle}>Chapter 1 Youth Camp</Text>
          <Text style={styles.campDesc}>Date: Oct 20-22, 2026</Text>
          <Text style={styles.campDesc}>Venue: St. Jude Parish</Text>
          <Text style={styles.campDesc}>Graduates: 45</Text>

          <View style={styles.btnGroup}>
            <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#E8F5E3', borderColor: 'rgba(61, 153, 26, 0.2)' }]}>
              <Text style={[styles.actionBtnText, { color: '#3D991A' }]}>Edit Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>View Graduates</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
