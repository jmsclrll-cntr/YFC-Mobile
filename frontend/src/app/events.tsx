import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import VibrantBackground from '@/components/vibrant-background';
import GlassCard from '@/components/glass-card';
import GlassIcon from '@/components/glass-icon';

const EVENTS = [
  {
    id: '1',
    title: 'YFC National Youth Summit 2026',
    date: 'SEP 15 - 17, 2026',
    time: '9:00 AM - 6:00 PM',
    location: 'Metropolitan Dome & Online',
    attendees: 340,
    category: 'Conference',
    tag: 'Featured',
    description: 'Empowering youth through faith, fellowship, worship, and leadership workshops.',
  },
  {
    id: '2',
    title: 'Friday Worship & Praise Night',
    date: 'THIS FRIDAY',
    time: '7:30 PM - 9:30 PM',
    location: 'Youth Center Main Hall',
    attendees: 85,
    category: 'Worship',
    tag: 'Weekly',
    description: 'Join us for an uplifting evening of live worship acoustic session and testimonies.',
  },
  {
    id: '3',
    title: 'Community Outreach & Food Drive',
    date: 'SAT, SEP 05',
    time: '8:00 AM - 12:00 PM',
    location: 'City Care Center',
    attendees: 62,
    category: 'Outreach',
    tag: 'Volunteer',
    description: 'Serving local families with care packages, hot meals, and prayer support.',
  },
];

export default function EventsScreen() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <VibrantBackground>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>YFC Events</Text>
          <Text style={styles.subtitle}>Discover upcoming gatherings & worship nights</Text>
        </View>

        {/* Category Filters */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
          {['All', 'Worship', 'Conference', 'Outreach', 'Workshops'].map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setActiveTab(cat)}
              style={[styles.filterChip, activeTab === cat && styles.filterChipActive]}
            >
              <Text style={[styles.filterChipText, activeTab === cat && styles.filterChipTextActive]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Events List */}
        <View style={styles.eventsList}>
          {EVENTS.filter((e) => activeTab === 'All' || e.category === activeTab).map((event) => (
            <GlassCard key={event.id} style={styles.eventCard} glowColor="rgba(139, 92, 246, 0.25)">
              <View style={styles.cardHeader}>
                <View style={styles.tagBadge}>
                  <Text style={styles.tagText}>{event.tag}</Text>
                </View>
                <Text style={styles.categoryText}>{event.category}</Text>
              </View>

              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventDescription}>{event.description}</Text>

              <View style={styles.metaRow}>
                <GlassIcon name="calendar" size={15} color="#ec4899" />
                <Text style={styles.metaText}>{event.date}</Text>
              </View>

              <View style={styles.metaRow}>
                <GlassIcon name="clock" size={15} color="#06b6d4" />
                <Text style={styles.metaText}>{event.time}</Text>
              </View>

              <View style={styles.metaRow}>
                <GlassIcon name="location" size={15} color="#a855f7" />
                <Text style={styles.metaText}>{event.location}</Text>
              </View>

              <View style={styles.cardFooter}>
                <View style={styles.attendeesRow}>
                  <GlassIcon name="people" size={14} color="rgba(255,255,255,0.7)" />
                  <Text style={styles.attendeesText}>{event.attendees} Going</Text>
                </View>

                <TouchableOpacity style={styles.rsvpButton}>
                  <Text style={styles.rsvpText}>Register Now</Text>
                </TouchableOpacity>
              </View>
            </GlassCard>
          ))}
        </View>
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
  filterScroll: {
    marginBottom: 20,
  },
  filterChip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.18)',
    marginRight: 10,
  },
  filterChipActive: {
    backgroundColor: 'rgba(139, 92, 246, 0.4)',
    borderColor: 'rgba(168, 85, 247, 0.6)',
  },
  filterChipText: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontWeight: '600',
    fontSize: 14,
  },
  filterChipTextActive: {
    color: '#ffffff',
    fontWeight: '700',
  },
  eventsList: {
    gap: 18,
  },
  eventCard: {
    marginBottom: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  tagBadge: {
    backgroundColor: 'rgba(236, 72, 153, 0.25)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(236, 72, 153, 0.4)',
  },
  tagText: {
    color: '#f472b6',
    fontWeight: '700',
    fontSize: 12,
  },
  categoryText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 13,
    fontWeight: '500',
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  eventDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.75)',
    lineHeight: 20,
    marginBottom: 14,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  metaText: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 13,
    fontWeight: '500',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.12)',
  },
  attendeesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  attendeesText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 13,
  },
  rsvpButton: {
    backgroundColor: 'rgba(139, 92, 246, 0.6)',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  rsvpText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 13,
  },
});
