import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import VibrantBackground from '@/components/vibrant-background';
import GlassCard from '@/components/glass-card';

export default function AttendanceScreen() {
  return (
    <VibrantBackground>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Quick Attendance</Text>
          <Text style={styles.subtitle}>Check-in to events and gatherings</Text>
        </View>
        <GlassCard style={styles.card} glowColor="rgba(74, 222, 128, 0.25)">
          <Text style={styles.cardText}>Scan QR code or enter event pin to check in.</Text>
        </GlassCard>
      </ScrollView>
    </VibrantBackground>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 110,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 4,
  },
  card: {
    padding: 20,
  },
  cardText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
