import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, TextInput } from 'react-native';
import { BlurView } from 'expo-blur';
import GlassIcon from '@/components/glass-icon';

export function MembersTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Members Database</Text>
      
      {/* Action Row */}
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.btnPrimary}>
           <GlassIcon name="plus" size={16} color="#ffffff" />
           <Text style={styles.btnText}>Add Member</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSecondary}>
           <Text style={styles.btnText}>Transfers/Transitions</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <BlurView intensity={45} tint="light" style={StyleSheet.absoluteFill} />
        <View style={styles.searchInner}>
          <GlassIcon name="search" size={18} color="#ffffff" />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search by name, service, course..."
            placeholderTextColor="rgba(255,255,255,0.6)"
          />
        </View>
      </View>

      {/* List */}
      <View style={styles.infoCard}>
        <BlurView intensity={45} tint="light" style={StyleSheet.absoluteFill} />
        <View style={styles.cardPadding}>
           {[1, 2, 3].map(i => (
             <View key={i} style={styles.memberRow}>
               <View style={styles.avatar}><Text style={styles.avatarText}>M</Text></View>
               <View style={styles.memberInfo}>
                 <Text style={styles.memberName}>Member Name {i}</Text>
                 <Text style={styles.memberDesc}>Chapter 1 • Music Ministry</Text>
               </View>
               <TouchableOpacity><GlassIcon name="chevron-right" size={16} color="#ffffff" /></TouchableOpacity>
             </View>
           ))}
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
  btnSecondary: { flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.2)', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#ffffff' },
  btnText: { color: '#ffffff', fontWeight: '700', fontSize: 13 },
  searchContainer: { borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: '#ffffff', marginBottom: 20, backgroundColor: 'rgba(255, 255, 255, 0.1)' },
  searchInner: { flexDirection: 'row', alignItems: 'center', padding: 12, gap: 10 },
  searchInput: { flex: 1, color: '#ffffff', fontSize: 14 },
  infoCard: { borderRadius: 24, borderWidth: 1, borderColor: '#ffffff', overflow: 'hidden', marginBottom: 24, backgroundColor: 'rgba(255, 255, 255, 0.2)', ...(Platform.OS === 'web' ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } as any : {}) },
  cardPadding: { padding: 20, position: 'relative', zIndex: 10 },
  memberRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.2)' },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#3d991a', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  avatarText: { color: '#ffffff', fontWeight: '700' },
  memberInfo: { flex: 1 },
  memberName: { color: '#ffffff', fontWeight: '600', fontSize: 14 },
  memberDesc: { color: 'rgba(255,255,255,0.7)', fontSize: 12, marginTop: 2 }
});
