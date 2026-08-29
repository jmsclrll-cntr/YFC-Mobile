import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import GlassIcon from '@/components/glass-icon';

export function AreaTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Area Profile</Text>
      <View style={styles.infoCard}>
        <BlurView intensity={45} tint="light" style={StyleSheet.absoluteFill} />
        <View style={styles.cardPadding}>
          <Text style={styles.infoTitle}>North Sector (Area 1)</Text>
          <Text style={styles.infoDesc}>Head: Bro. John Doe</Text>
          <Text style={styles.infoDesc}>Coverage: City A, City B</Text>
        </View>
      </View>

      <Text style={styles.sectionHeading}>Sub Areas</Text>
      <View style={styles.gridContainer}>
        <View style={styles.gridCard}>
          <BlurView intensity={40} tint="light" style={StyleSheet.absoluteFill} />
          <View style={styles.gridCardInner}>
            <Text style={styles.gridTitle}>Chapter 1</Text>
            <Text style={styles.gridDesc}>Members: 120</Text>
          </View>
        </View>
        <View style={styles.gridCard}>
          <BlurView intensity={40} tint="light" style={StyleSheet.absoluteFill} />
          <View style={styles.gridCardInner}>
            <Text style={styles.gridTitle}>Chapter 2</Text>
            <Text style={styles.gridDesc}>Members: 85</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionHeading}>REACH Initiatives</Text>
      <View style={styles.infoCard}>
        <BlurView intensity={45} tint="light" style={StyleSheet.absoluteFill} />
        <View style={styles.cardPadding}>
          <Text style={styles.infoTitle}>Campus Tour 2026</Text>
          <Text style={styles.infoDesc}>Target: 500 new members across 3 campuses.</Text>
        </View>
      </View>
      
      <Text style={styles.sectionHeading}>Leaders & Households</Text>
      <View style={styles.infoCard}>
        <BlurView intensity={45} tint="light" style={StyleSheet.absoluteFill} />
        <View style={styles.cardPadding}>
          <Text style={styles.infoTitle}>Household Heads: 12</Text>
          <Text style={styles.infoDesc}>Recent Meetings Attendance: 85%</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>View Leaders Directory</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 20 },
  sectionHeading: { fontSize: 18, fontWeight: '700', color: '#ffffff', marginBottom: 14, marginTop: 10 },
  infoCard: { borderRadius: 24, borderWidth: 1, borderColor: '#ffffff', overflow: 'hidden', marginBottom: 24, backgroundColor: 'rgba(255, 255, 255, 0.2)', ...(Platform.OS === 'web' ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } as any : {}) },
  cardPadding: { padding: 20, position: 'relative', zIndex: 10 },
  infoTitle: { color: '#ffffff', fontSize: 16, fontWeight: '700', marginBottom: 6 },
  infoDesc: { color: 'rgba(255,255,255,0.9)', fontSize: 13, marginBottom: 4 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, marginBottom: 24 },
  gridCard: { width: '48%', borderRadius: 24, borderWidth: 1, borderColor: '#ffffff', overflow: 'hidden', backgroundColor: 'rgba(255, 255, 255, 0.2)', ...(Platform.OS === 'web' ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } as any : {}) },
  gridCardInner: { padding: 16, position: 'relative', zIndex: 10 },
  gridTitle: { fontSize: 15, fontWeight: '700', color: '#ffffff' },
  gridDesc: { fontSize: 12, color: 'rgba(255,255,255,0.8)', fontWeight: '500', marginTop: 4 },
  btn: { backgroundColor: '#3d991a', paddingVertical: 10, paddingHorizontal: 16, borderRadius: 16, alignItems: 'center', marginTop: 12, borderWidth: 1, borderColor: '#ffffff' },
  btnText: { color: '#ffffff', fontWeight: '700', fontSize: 13 },
});
