import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import GlassIcon from '@/components/glass-icon';

export function ActivitiesTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Activities & Events</Text>
      
      {/* Actions */}
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.btnPrimary}>
           <GlassIcon name="plus" size={16} color="#ffffff" />
           <Text style={styles.btnText}>New Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnACS}>
           <Text style={styles.btnText}>Open ACS</Text>
        </TouchableOpacity>
      </View>

      {/* Filter Row Mock */}
      <View style={styles.filterRow}>
         <TouchableOpacity style={styles.filterChipActive}><Text style={styles.filterTextActive}>Upcoming</Text></TouchableOpacity>
         <TouchableOpacity style={styles.filterChip}><Text style={styles.filterText}>Past</Text></TouchableOpacity>
         <TouchableOpacity style={styles.filterChip}><Text style={styles.filterText}>By Chapter</Text></TouchableOpacity>
      </View>

      {/* Activity List */}
      <View style={styles.infoCard}>
        <BlurView intensity={45} tint="light" style={StyleSheet.absoluteFill} />
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
            <TouchableOpacity><GlassIcon name="chevron-right" size={16} color="#ffffff" /></TouchableOpacity>
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
            <TouchableOpacity><GlassIcon name="chevron-right" size={16} color="#ffffff" /></TouchableOpacity>
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
  btnACS: { flex: 1, backgroundColor: '#0284c7', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#ffffff' },
  btnText: { color: '#ffffff', fontWeight: '700', fontSize: 13 },
  filterRow: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  filterChipActive: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 16, backgroundColor: '#ffffff' },
  filterTextActive: { color: '#143c08', fontWeight: '700', fontSize: 13 },
  filterChip: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 16, backgroundColor: 'rgba(255,255,255,0.2)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)' },
  filterText: { color: '#ffffff', fontWeight: '600', fontSize: 13 },
  infoCard: { borderRadius: 24, borderWidth: 1, borderColor: '#ffffff', overflow: 'hidden', marginBottom: 24, backgroundColor: 'rgba(255, 255, 255, 0.2)', ...(Platform.OS === 'web' ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } as any : {}) },
  cardPadding: { padding: 20, position: 'relative', zIndex: 10 },
  eventItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.2)' },
  dateBox: { width: 50, height: 50, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.15)', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  dateMonth: { color: '#ffffff', fontSize: 10, fontWeight: '700' },
  dateDay: { color: '#ffffff', fontSize: 18, fontWeight: '800' },
  eventInfo: { flex: 1 },
  eventTitle: { color: '#ffffff', fontWeight: '700', fontSize: 15 },
  eventDesc: { color: 'rgba(255,255,255,0.8)', fontSize: 12, marginTop: 4 },
});
