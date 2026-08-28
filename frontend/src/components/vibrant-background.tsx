import React from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function VibrantBackground({ children }: { children?: React.ReactNode }) {
  return (
    <View style={styles.container}>
      {/* Base Deep Vibrant Dark Canvas */}
      <LinearGradient
        colors={['#0a0814', '#150d2a', '#0d182e', '#090712']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Vibrant Mesh Blob 1 - Top Left Purple Glowing Sphere */}
      <LinearGradient
        colors={['rgba(139, 92, 246, 0.45)', 'rgba(168, 85, 247, 0.15)', 'transparent']}
        style={[styles.blob, styles.blobTopLeft]}
      />

      {/* Vibrant Mesh Blob 2 - Center Right Pink Glowing Sphere */}
      <LinearGradient
        colors={['rgba(236, 72, 153, 0.40)', 'rgba(219, 39, 119, 0.10)', 'transparent']}
        style={[styles.blob, styles.blobCenterRight]}
      />

      {/* Vibrant Mesh Blob 3 - Bottom Left Cyan Glowing Sphere */}
      <LinearGradient
        colors={['rgba(6, 182, 212, 0.35)', 'rgba(59, 130, 246, 0.10)', 'transparent']}
        style={[styles.blob, styles.blobBottomLeft]}
      />

      {/* Content Container */}
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0814',
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
