import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { dashboardStyles as styles } from './shared-styles';

export function AreaTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Area Profile</Text>
      <View style={styles.infoCard}>
        <View style={styles.cardPadding}>
          <Text style={styles.infoTitle}>North Sector (Area 1)</Text>
          <Text style={styles.infoDesc}>Head: Bro. John Doe</Text>
          <Text style={styles.infoDesc}>Coverage: City A, City B</Text>
        </View>
      </View>

      <Text style={styles.sectionHeading}>Sub Areas</Text>
      <View style={styles.gridContainer}>
        <View style={styles.gridCard}>
          <View style={styles.gridCardInner}>
            <Text style={styles.gridTitle}>Chapter 1</Text>
            <Text style={styles.gridDesc}>Members: 120</Text>
          </View>
        </View>
        <View style={styles.gridCard}>
          <View style={styles.gridCardInner}>
            <Text style={styles.gridTitle}>Chapter 2</Text>
            <Text style={styles.gridDesc}>Members: 85</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionHeading}>REACH Initiatives</Text>
      <View style={styles.infoCard}>
        <View style={styles.cardPadding}>
          <Text style={styles.infoTitle}>Campus Tour 2026</Text>
          <Text style={styles.infoDesc}>Target: 500 new members across 3 campuses.</Text>
        </View>
      </View>

      <Text style={styles.sectionHeading}>Leaders & Households</Text>
      <View style={styles.infoCard}>
        <View style={styles.cardPadding}>
          <Text style={styles.infoTitle}>Household Heads: 12</Text>
          <Text style={styles.infoDesc}>Recent Meetings Attendance: 85%</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>View Leaders Directory</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
