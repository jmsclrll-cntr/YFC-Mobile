import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Redirect, useRouter } from 'expo-router';
import GlassIcon from '@/components/glass-icon';
import { useAuth } from '@/context/auth-context';

import { DashboardTab } from '@/components/dashboard/DashboardTab';
import { AreaTab } from '@/components/dashboard/AreaTab';
import { MembersTab } from '@/components/dashboard/MembersTab';
import { ActivitiesTab } from '@/components/dashboard/ActivitiesTab';
import { FormationsTab } from '@/components/dashboard/FormationsTab';
import { EvangelizationTab } from '@/components/dashboard/EvangelizationTab';
import { ReportsTab } from '@/components/dashboard/ReportsTab';
import { AcsTab } from '@/components/dashboard/AcsTab';
import { HelpTab } from '@/components/dashboard/HelpTab';

const { width, height } = Dimensions.get('window');

const TABS = [
  'Dashboard', 'Area', 'Members', 'Activities', 'Formations',
  'Evangelization', 'Reports', 'ACS/ID', 'Help'
];

export default function DashboardScreen() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState('Dashboard');

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <View style={styles.container}>
      {/* #3d991a Mesh Gradient Background Canvas */}
      <LinearGradient
        colors={['#103306', '#225b10', '#3d991a', '#143c08']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Mesh Blob 1 - Vibrant Green Top-Left Sphere */}
      <LinearGradient
        colors={['rgba(134, 239, 172, 0.35)', 'rgba(61, 153, 26, 0.2)', 'transparent']}
        style={styles.blobTopLeft}
      />

      {/* Mesh Blob 2 - Bright Emerald Center-Right Sphere */}
      <LinearGradient
        colors={['rgba(74, 222, 128, 0.30)', 'rgba(34, 197, 94, 0.15)', 'transparent']}
        style={styles.blobCenterRight}
      />

      {/* Mesh Blob 3 - Deep Green Bottom-Left Sphere */}
      <LinearGradient
        colors={['rgba(22, 101, 52, 0.45)', 'rgba(61, 153, 26, 0.15)', 'transparent']}
        style={styles.blobBottomLeft}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Top Header */}
        <View style={styles.topHeader}>
          <View style={styles.userProfileRow}>
            <View style={styles.avatarGlowRing}>
              <View style={styles.avatarInner}>
                <Text style={styles.avatarText}>YFC</Text>
              </View>
            </View>
            <View>
              <Text style={styles.welcomeText}>Welcome back 👋</Text>
              <Text style={styles.userName}>Youth Servant</Text>
            </View>
          </View>

          <View style={styles.headerIconsRow}>
            <TouchableOpacity style={styles.iconGlassBtn}>
              <GlassIcon name="search" size={18} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconGlassBtn}>
              <GlassIcon name="bell" size={18} color="#ffffff" />
              <View style={styles.notificationDot} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tab Navigation Scroll */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabScroll} contentContainerStyle={styles.tabScrollContent}>
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                style={[styles.tabChip, isActive && styles.tabChipActive]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabChipText, isActive && styles.tabChipTextActive]}>{tab}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Tab Content Area */}
        <View style={styles.tabContentArea}>
          {activeTab === 'Dashboard' && <DashboardTab router={router} />}
          {activeTab === 'Area' && <AreaTab />}
          {activeTab === 'Members' && <MembersTab />}
          {activeTab === 'Activities' && <ActivitiesTab />}
          {activeTab === 'Formations' && <FormationsTab />}
          {activeTab === 'Evangelization' && <EvangelizationTab />}
          {activeTab === 'Reports' && <ReportsTab />}
          {activeTab === 'ACS/ID' && <AcsTab />}
          {activeTab === 'Help' && <HelpTab />}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#143c08',
    position: 'relative',
    overflow: 'hidden',
  },
  blobTopLeft: {
    position: 'absolute',
    top: -height * 0.1,
    left: -width * 0.2,
    width: width * 1.1,
    height: width * 1.1,
    borderRadius: 999,
  },
  blobCenterRight: {
    position: 'absolute',
    top: height * 0.3,
    right: -width * 0.3,
    width: width * 1.0,
    height: width * 1.0,
    borderRadius: 999,
  },
  blobBottomLeft: {
    position: 'absolute',
    bottom: -height * 0.1,
    left: -width * 0.15,
    width: width * 0.9,
    height: width * 0.9,
    borderRadius: 999,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 110,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  userProfileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatarGlowRing: {
    width: 48,
    height: 48,
    borderRadius: 24,
    padding: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  avatarInner: {
    flex: 1,
    borderRadius: 22,
    backgroundColor: '#3d991a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 13,
  },
  welcomeText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '500',
  },
  userName: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '700',
  },
  headerIconsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  iconGlassBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 1,
    borderColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // @ts-ignore Web specific backdrop filter
    ...(Platform.OS === 'web' ? { backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' } : {}),
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 8,
    right: 8,
    borderWidth: 1,
    borderColor: '#3d991a',
  },
  tabScroll: {
    marginBottom: 24,
    flexGrow: 0,
  },
  tabScrollContent: {
    paddingRight: 20,
  },
  tabChip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.18)',
    marginRight: 10,
  },
  tabChipActive: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
  tabChipText: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontWeight: '600',
    fontSize: 14,
  },
  tabChipTextActive: {
    color: '#143c08',
    fontWeight: '700',
  },
  tabContentArea: {
    flex: 1,
  },
});