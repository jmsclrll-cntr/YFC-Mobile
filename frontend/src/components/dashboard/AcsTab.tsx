import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import GlassIcon from '@/components/glass-icon';

export function AcsTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>ACS & Member IDs</Text>

      <View style={styles.infoCard}>
        <BlurView intensity={45} tint="light" style={StyleSheet.absoluteFill} />
        <View style={styles.cardPadding}>
          <View style={styles.iconBox}><GlassIcon name="share" size={32} color="#ffffff" /></View>
          <Text style={styles.infoTitle}>Attendance Capture Software (ACS)</Text>
          <Text style={styles.infoDesc}>Export attendance data from ACS or connect to local scanner networks.</Text>
          <TouchableOpacity style={styles.btnPrimary}>
            <Text style={styles.btnText}>Export ACS Data</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoCard}>
        <BlurView intensity={45} tint="light" style={StyleSheet.absoluteFill} />
        <View style={styles.cardPadding}>
          <View style={styles.iconBox}><GlassIcon name="person" size={32} color="#ffffff" /></View>
          <Text style={styles.infoTitle}>Member ID Label App</Text>
          <Text style={styles.infoDesc}>Generate, format and print Member ID labels for new members.</Text>
          <TouchableOpacity style={styles.btnSecondary}>
            <Text style={styles.btnText}>Open ID App</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 20 },
  sectionHeading: { fontSize: 18, fontWeight: '700', color: '#ffffff', marginBottom: 14, marginTop: 10 },
  infoCard: { borderRadius: 24, borderWidth: 1, borderColor: '#ffffff', overflow: 'hidden', marginBottom: 20, backgroundColor: 'rgba(255, 255, 255, 0.2)', ...(Platform.OS === 'web' ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } as any : {}) },
  cardPadding: { padding: 20, position: 'relative', zIndex: 10, alignItems: 'center' },
  iconBox: { marginBottom: 12, padding: 12, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 20 },
  infoTitle: { color: '#ffffff', fontSize: 16, fontWeight: '700', marginBottom: 8, textAlign: 'center' },
  infoDesc: { color: 'rgba(255,255,255,0.8)', fontSize: 13, textAlign: 'center', marginBottom: 20, paddingHorizontal: 10 },
  btnPrimary: { backgroundColor: '#3d991a', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 16, borderWidth: 1, borderColor: '#ffffff', width: '100%', alignItems: 'center' },
  btnSecondary: { backgroundColor: 'rgba(255, 255, 255, 0.2)', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 16, borderWidth: 1, borderColor: '#ffffff', width: '100%', alignItems: 'center' },
  btnText: { color: '#ffffff', fontWeight: '700', fontSize: 14 },
});
