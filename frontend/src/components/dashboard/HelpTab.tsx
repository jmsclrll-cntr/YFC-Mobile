import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import GlassIcon from '@/components/glass-icon';

export function HelpTab() {
  const manuals = [
    { title: 'User Manual (PDF)', icon: 'bookmark' },
    { title: 'Video Tutorials', icon: 'music' },
    { title: 'FAQs', icon: 'chat' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Help & Resources</Text>

      <View style={styles.infoCard}>
        <BlurView intensity={45} tint="light" style={StyleSheet.absoluteFill} />
        <View style={styles.cardPadding}>
          {manuals.map((item, i) => (
             <TouchableOpacity key={i} style={styles.helpRow}>
                <View style={styles.iconWrap}><GlassIcon name={item.icon as any} size={18} color="#ffffff" /></View>
                <Text style={styles.helpTitle}>{item.title}</Text>
                <GlassIcon name="chevron-right" size={16} color="rgba(255,255,255,0.5)" />
             </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.supportCard}>
         <Text style={styles.supportTitle}>Need Technical Support?</Text>
         <Text style={styles.supportDesc}>Contact the Area Technical Team for system issues or access requests.</Text>
         <TouchableOpacity style={styles.supportBtn}>
            <Text style={styles.supportBtnText}>Contact Support</Text>
         </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 20 },
  sectionHeading: { fontSize: 18, fontWeight: '700', color: '#ffffff', marginBottom: 14, marginTop: 10 },
  infoCard: { borderRadius: 24, borderWidth: 1, borderColor: '#ffffff', overflow: 'hidden', marginBottom: 24, backgroundColor: 'rgba(255, 255, 255, 0.2)', ...(Platform.OS === 'web' ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } as any : {}) },
  cardPadding: { padding: 20, position: 'relative', zIndex: 10 },
  helpRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.1)' },
  iconWrap: { width: 36, height: 36, borderRadius: 18, backgroundColor: 'rgba(255,255,255,0.15)', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  helpTitle: { flex: 1, color: '#ffffff', fontSize: 15, fontWeight: '600' },
  supportCard: { padding: 20, borderRadius: 20, backgroundColor: 'rgba(0,0,0,0.3)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  supportTitle: { color: '#ffffff', fontSize: 16, fontWeight: '700', marginBottom: 6 },
  supportDesc: { color: 'rgba(255,255,255,0.7)', fontSize: 13, marginBottom: 16 },
  supportBtn: { backgroundColor: '#ffffff', paddingVertical: 10, borderRadius: 12, alignItems: 'center' },
  supportBtnText: { color: '#143c08', fontWeight: '700', fontSize: 14 }
});
