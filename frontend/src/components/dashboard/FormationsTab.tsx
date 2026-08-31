import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GlassIcon from '@/components/glass-icon';
import { UiColors } from '@/constants/ui';
import { dashboardStyles as styles } from './shared-styles';

export function FormationsTab() {
  const tracks = [
    { name: 'Covenant Orientation', completed: 450, total: 500 },
    { name: 'Family Culture', completed: 320, total: 500 },
    { name: 'Youth Power', completed: 210, total: 500 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Formation Tracks</Text>

      {tracks.map((track, i) => (
        <View key={i} style={styles.infoCard}>
          <View style={styles.cardPadding}>
            <View style={styles.headerRow}>
              <Text style={styles.trackTitle}>{track.name}</Text>
              <Text style={styles.trackStats}>{track.completed} / {track.total}</Text>
            </View>

            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: `${(track.completed / track.total) * 100}%` }]} />
            </View>

            <TouchableOpacity style={styles.btnRow}>
              <Text style={styles.btnRowText}>View Attendees</Text>
              <GlassIcon name="chevron-right" size={14} color={UiColors.accent} />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}
