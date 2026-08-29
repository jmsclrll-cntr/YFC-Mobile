import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import GlassIcon from '@/components/glass-icon';

export function FormationsTab() {
  const tracks = [
    { name: 'Covenant Orientation', completed: 450, total: 500 },
    { name: 'Family Culture', completed: 320, total: 500 },
    { name: 'Youth Power', completed: 210, total: 500 }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Formation Tracks</Text>

      {tracks.map((track, i) => (
        <View key={i} style={styles.infoCard}>
          <BlurView intensity={45} tint="light" style={StyleSheet.absoluteFill} />
          <View style={styles.cardPadding}>
            <View style={styles.headerRow}>
               <Text style={styles.trackTitle}>{track.name}</Text>
               <Text style={styles.trackStats}>{track.completed} / {track.total}</Text>
            </View>
            
            <View style={styles.progressBarBg}>
               <View style={[styles.progressBarFill, { width: `${(track.completed / track.total) * 100}%` }]} />
            </View>

            <TouchableOpacity style={styles.btnRow}>
               <Text style={styles.btnText}>View Attendees</Text>
               <GlassIcon name="chevron-right" size={14} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 20 },
  sectionHeading: { fontSize: 18, fontWeight: '700', color: '#ffffff', marginBottom: 14, marginTop: 10 },
  infoCard: { borderRadius: 24, borderWidth: 1, borderColor: '#ffffff', overflow: 'hidden', marginBottom: 16, backgroundColor: 'rgba(255, 255, 255, 0.2)', ...(Platform.OS === 'web' ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } as any : {}) },
  cardPadding: { padding: 20, position: 'relative', zIndex: 10 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  trackTitle: { color: '#ffffff', fontSize: 15, fontWeight: '700' },
  trackStats: { color: 'rgba(255,255,255,0.8)', fontSize: 13, fontWeight: '600' },
  progressBarBg: { height: 8, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 4, marginBottom: 16, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: '#4ade80' },
  btnRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  btnText: { color: '#ffffff', fontSize: 13, fontWeight: '600' }
});
