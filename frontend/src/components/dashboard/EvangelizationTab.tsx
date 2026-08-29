import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import GlassIcon from '@/components/glass-icon';

export function EvangelizationTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Evangelization (Youth Camps)</Text>

      {/* Action Row */}
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.btnPrimary}>
           <GlassIcon name="plus" size={16} color="#ffffff" />
           <Text style={styles.btnText}>Add Youth Camp</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionHeading}>Recent Camps</Text>
      
      <View style={styles.infoCard}>
        <BlurView intensity={45} tint="light" style={StyleSheet.absoluteFill} />
        <View style={styles.cardPadding}>
          <Text style={styles.campTitle}>Chapter 1 Youth Camp</Text>
          <Text style={styles.campDesc}>Date: Oct 20-22, 2026</Text>
          <Text style={styles.campDesc}>Venue: St. Jude Parish</Text>
          <Text style={styles.campDesc}>Graduates: 45</Text>
          
          <View style={styles.btnGroup}>
            <TouchableOpacity style={styles.actionBtn}>
               <Text style={styles.actionBtnText}>Edit Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionBtn, { backgroundColor: 'rgba(255,255,255,0.2)' }]}>
               <Text style={styles.actionBtnText}>View Graduates</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 20 },
  sectionHeading: { fontSize: 18, fontWeight: '700', color: '#ffffff', marginBottom: 14, marginTop: 10 },
  actionsRow: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  btnPrimary: { flex: 1, flexDirection: 'row', backgroundColor: '#3d991a', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center', gap: 6, borderWidth: 1, borderColor: '#ffffff' },
  btnText: { color: '#ffffff', fontWeight: '700', fontSize: 13 },
  infoCard: { borderRadius: 24, borderWidth: 1, borderColor: '#ffffff', overflow: 'hidden', marginBottom: 24, backgroundColor: 'rgba(255, 255, 255, 0.2)', ...(Platform.OS === 'web' ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } as any : {}) },
  cardPadding: { padding: 20, position: 'relative', zIndex: 10 },
  campTitle: { color: '#ffffff', fontSize: 16, fontWeight: '700', marginBottom: 6 },
  campDesc: { color: 'rgba(255,255,255,0.8)', fontSize: 13, marginBottom: 4 },
  btnGroup: { flexDirection: 'row', gap: 10, marginTop: 16 },
  actionBtn: { flex: 1, paddingVertical: 10, borderRadius: 12, borderWidth: 1, borderColor: '#ffffff', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.1)' },
  actionBtnText: { color: '#ffffff', fontSize: 12, fontWeight: '600' }
});
