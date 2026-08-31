import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import GlassIcon from '@/components/glass-icon';
import { UiColors } from '@/constants/ui';
import { dashboardStyles as styles } from './shared-styles';

export function MembersTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Members Database</Text>

      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.btnPrimary}>
          <GlassIcon name="plus" size={16} color="#ffffff" />
          <Text style={styles.btnText}>Add Member</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSecondary}>
          <Text style={styles.btnTextSecondary}>Transfers/Transitions</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInner}>
          <GlassIcon name="search" size={18} color={UiColors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name, service, course..."
            placeholderTextColor={UiColors.textTertiary}
          />
        </View>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.cardPadding}>
          {[1, 2, 3].map((i) => (
            <View key={i} style={styles.memberRow}>
              <View style={styles.avatar}><Text style={styles.avatarText}>M</Text></View>
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>Member Name {i}</Text>
                <Text style={styles.memberDesc}>Chapter 1 • Music Ministry</Text>
              </View>
              <TouchableOpacity><GlassIcon name="chevron-right" size={16} color={UiColors.textTertiary} /></TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
