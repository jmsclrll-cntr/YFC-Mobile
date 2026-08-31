import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { UiColors } from '@/constants/ui';

const { width, height } = Dimensions.get('window');

export default function VibrantBackground({ children }: { children?: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FAFAFA', UiColors.background, '#F5F9F3', UiColors.background]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      <LinearGradient
        colors={['rgba(61, 153, 26, 0.06)', 'rgba(61, 153, 26, 0.02)', 'transparent']}
        style={[styles.blob, styles.blobTopLeft]}
      />

      <LinearGradient
        colors={['rgba(107, 191, 74, 0.05)', 'rgba(61, 153, 26, 0.02)', 'transparent']}
        style={[styles.blob, styles.blobCenterRight]}
      />

      <LinearGradient
        colors={['rgba(61, 153, 26, 0.04)', 'transparent']}
        style={[styles.blob, styles.blobBottomLeft]}
      />

      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UiColors.background,
    position: 'relative',
    overflow: 'hidden',
  },
  blob: {
    position: 'absolute',
    borderRadius: 999,
  },
  blobTopLeft: {
    top: -height * 0.1,
    left: -width * 0.2,
    width: width * 1.1,
    height: width * 1.1,
  },
  blobCenterRight: {
    top: height * 0.28,
    right: -width * 0.3,
    width: width * 1.0,
    height: width * 1.0,
  },
  blobBottomLeft: {
    bottom: -height * 0.1,
    left: -width * 0.15,
    width: width * 0.9,
    height: width * 0.9,
  },
  content: {
    flex: 1,
    zIndex: 1,
  },
});
