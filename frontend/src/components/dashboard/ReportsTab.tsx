import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import GlassIcon from '@/components/glass-icon';

export function ReportsTab() {
  const reports = [
    { title: 'Members Directory', desc: 'Export full list of active members', icon: 'people' },
    { title: 'Inactive Members', desc: 'Export members with low attendance', icon: 'person' },
    { title: 'Leaders & Households', desc: 'Hierarchy and structure report', icon: 'people' },
    { title: 'Birthday Celebrants', desc: 'Monthly birthday list', icon: 'sparkles' },
    { title: 'Formations Report', desc: 'Track completion status', icon: 'bookmark' },
    { title: 'Evangelization (YTD)', desc: 'Camp stats and growth', icon: 'fire' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Data Exports & Reports</Text>

      <View style={styles.gridContainer}>
        {reports.map((report, i) => (
          <View key={i} style={styles.gridCard}>
            <BlurView intensity={40} tint="light" style={StyleSheet.absoluteFill} />
            <View style={styles.gridCardInner}>
              <View style={styles.iconHeader}>
                <GlassIcon name={report.icon as any} size={18} color="#ffffff" />
                <Text style={styles.gridTitle}>{report.title}</Text>
              </View>
              <Text style={styles.gridDesc}>{report.desc}</Text>
              <TouchableOpacity style={styles.exportBtn}>
                 <GlassIcon name="share" size={14} color="#ffffff" />
                 <Text style={styles.exportBtnText}>Export CSV</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 20 },
  sectionHeading: { fontSize: 18, fontWeight: '700', color: '#ffffff', marginBottom: 14, marginTop: 10 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, marginBottom: 24 },
  gridCard: { width: '48%', borderRadius: 24, borderWidth: 1, borderColor: '#ffffff', overflow: 'hidden', backgroundColor: 'rgba(255, 255, 255, 0.2)', marginBottom: 12, ...(Platform.OS === 'web' ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } as any : {}) },
  gridCardInner: { padding: 16, position: 'relative', zIndex: 10 },
  iconHeader: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 8 },
  gridTitle: { fontSize: 13, fontWeight: '700', color: '#ffffff', flex: 1 },
  gridDesc: { fontSize: 11, color: 'rgba(255,255,255,0.7)', marginBottom: 12, height: 30 },
  exportBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, backgroundColor: 'rgba(255,255,255,0.2)', paddingVertical: 8, borderRadius: 12, borderWidth: 1, borderColor: '#ffffff' },
  exportBtnText: { color: '#ffffff', fontSize: 11, fontWeight: '600' }
});
