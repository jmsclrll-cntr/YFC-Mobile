import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GlassIcon from '@/components/glass-icon';
import { UiColors } from '@/constants/ui';
import { dashboardStyles as styles } from './shared-styles';

export function HelpTab() {
  const manuals = [
    { title: 'User Manual (PDF)', icon: 'bookmark' },
    { title: 'Video Tutorials', icon: 'music' },
    { title: 'FAQs', icon: 'chat' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Help & Resources</Text>

      <View style={styles.infoCard}>
        <View style={styles.cardPadding}>
          {manuals.map((item, i) => (
            <TouchableOpacity key={i} style={styles.helpRow}>
              <View style={styles.iconWrap}><GlassIcon name={item.icon as any} size={18} color={UiColors.accent} /></View>
              <Text style={styles.helpTitle}>{item.title}</Text>
              <GlassIcon name="chevron-right" size={16} color={UiColors.textTertiary} />
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
