import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import VibrantBackground from '@/components/vibrant-background';
import GlassCard from '@/components/glass-card';
import GlassIcon from '@/components/glass-icon';

const GROUPS = [
  { id: '1', name: 'Campus Youth Chapter', members: 128, leader: 'Alex Rivera', topic: 'Weekly Bible Study' },
  { id: '2', name: 'YFC Worship Team', members: 45, leader: 'Sarah Chen', topic: 'Music & Creative Arts' },
  { id: '3', name: 'Young Professionals', members: 94, leader: 'David Miller', topic: 'Career & Faith' },
];

export default function CommunityScreen() {
  return (
    <VibrantBackground>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>YFC Community</Text>
          <Text style={styles.subtitle}>Connect, share prayer requests & join household groups</Text>
        </View>

        {/* Create Post Banner */}
        <GlassCard style={styles.createCard} glowColor="rgba(6, 182, 212, 0.2)">
          <View style={styles.createRow}>
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarText}>Y</Text>
            </View>
            <Text style={styles.createPrompt}>Share a testimonial or prayer request...</Text>
            <TouchableOpacity style={styles.postBtn}>
              <GlassIcon name="plus" size={24} color="#06b6d4" />
            </TouchableOpacity>
          </View>
        </GlassCard>

        {/* Household Groups Section */}
        <Text style={styles.sectionTitle}>Household Groups</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.groupsScroll}>
          {GROUPS.map((g) => (
            <GlassCard key={g.id} style={styles.groupCard}>
              <View style={styles.groupHeader}>
                <View style={styles.iconCircle}>
                  <GlassIcon name="people" size={18} color="#a855f7" />
                </View>
                <GlassIcon name="shield" size={16} color="#06b6d4" />
              </View>
              <Text style={styles.groupName}>{g.name}</Text>
              <Text style={styles.groupTopic}>{g.topic}</Text>
              <Text style={styles.groupLeader}>Leader: {g.leader}</Text>
              <TouchableOpacity style={styles.joinBtn}>
                <Text style={styles.joinBtnText}>Join Group ({g.members})</Text>
              </TouchableOpacity>
            </GlassCard>
          ))}
        </ScrollView>

        {/* Community Feed / Prayer Requests */}
        <Text style={styles.sectionTitle}>Prayer Requests & Wall</Text>
        <GlassCard style={styles.feedCard}>
          <View style={styles.feedUserRow}>
            <View style={[styles.avatarPlaceholder, { backgroundColor: 'rgba(236,72,153,0.3)' }]}>
              <Text style={styles.avatarText}>M</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.userName}>Maria Santos</Text>
              <Text style={styles.postTime}>2 hours ago • Campus Chapter</Text>
            </View>
          </View>
          <Text style={styles.feedText}>
            Please pray for our upcoming midterms and for the youth outreach retreat this weekend! Hoping to see lives transformed. 🙏✨
          </Text>
          <View style={styles.feedActions}>
            <TouchableOpacity style={styles.actionBtn}>
              <GlassIcon name="heart" size={16} color="#ec4899" />
              <Text style={styles.actionText}>Praying (24)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <GlassIcon name="chat" size={16} color="rgba(255,255,255,0.7)" />
              <Text style={styles.actionText}>Comments (8)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <GlassIcon name="share" size={16} color="rgba(255,255,255,0.7)" />
            </TouchableOpacity>
          </View>
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
  },
  subtitle: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 4,
  },
  createCard: {
    marginBottom: 24,
  },
  createRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(139, 92, 246, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  avatarText: {
    color: '#ffffff',
    fontWeight: '700',
  },
  createPrompt: {
    flex: 1,
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
  },
  postBtn: {
    padding: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 14,
  },
  groupsScroll: {
    marginBottom: 24,
  },
  groupCard: {
    width: 210,
    marginRight: 14,
  },
  groupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(168, 85, 247, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  groupTopic: {
    fontSize: 13,
    color: '#06b6d4',
    fontWeight: '600',
    marginBottom: 4,
  },
  groupLeader: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: 14,
  },
  joinBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  joinBtnText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 12,
  },
  feedCard: {
    marginBottom: 20,
  },
  feedUserRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  userName: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 15,
  },
  postTime: {
    color: 'rgba(255, 255, 255, 0.55)',
    fontSize: 12,
  },
  feedText: {
    color: 'rgba(255, 255, 255, 0.88)',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 16,
  },
  feedActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.12)',
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionText: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 13,
    fontWeight: '600',
  },
});
