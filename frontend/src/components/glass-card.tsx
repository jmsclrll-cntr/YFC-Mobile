import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { UiColors, UiRadius, UiShadow } from '@/constants/ui';

interface GlassCardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  intensity?: number;
  tint?: 'light' | 'dark' | 'default';
  borderColor?: string;
}

export default function GlassCard({
  children,
  style,
  intensity = 25,
  tint = 'light',
  borderColor = UiColors.border,
}: GlassCardProps) {
  return (
    <View style={[styles.outerContainer, style]}>
      <View style={[styles.borderWrapper, { borderColor }]}>
        <BlurView intensity={intensity} tint={tint} style={StyleSheet.absoluteFill}>
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.1)', 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.shine}
          />
        </BlurView>

        <View style={styles.glassInner}>{children}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: UiRadius.lg,
    overflow: 'hidden',
    ...UiShadow.card,
  },
  borderWrapper: {
    borderRadius: UiRadius.lg,
    borderWidth: StyleSheet.hairlineWidth + 0.5,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: Platform.OS === 'web' ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.95)',
    ...(Platform.OS === 'web'
      ? { backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }
      : {}),
  },
  shine: {
    height: 32,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  glassInner: {
    padding: 20,
    position: 'relative',
    zIndex: 2,
  },
});
