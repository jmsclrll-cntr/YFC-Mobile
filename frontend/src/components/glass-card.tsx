import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

interface GlassCardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  intensity?: number;
  tint?: 'light' | 'dark' | 'default';
  glowColor?: string;
  borderColor?: string;
}

export default function GlassCard({
  children,
  style,
  intensity = 60,
  tint = 'dark',
  glowColor,
  borderColor = 'rgba(255, 255, 255, 0.22)',
}: GlassCardProps) {
  return (
    <View style={[styles.outerContainer, glowColor ? { shadowColor: glowColor, shadowRadius: 16, shadowOpacity: 0.3 } : null, style]}>
      {/* Outer Frosted Border Layer */}
      <View style={[styles.borderWrapper, { borderColor }]}>
        <BlurView intensity={intensity} tint={tint} style={StyleSheet.absoluteFill}>
          {/* Subtle Top Glass Shine Effect */}
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.18)', 'rgba(255, 255, 255, 0.03)', 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.shine}
          />
        </BlurView>

        {/* Fallback translucent background for web/non-blur */}
        <View style={styles.glassInner}>{children}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 24,
    overflow: 'hidden',
    shadowOffset: { width: 0, height: 8 },
  },
  borderWrapper: {
    borderRadius: 24,
    borderWidth: 1,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: Platform.OS === 'web' ? 'rgba(255, 255, 255, 0.09)' : 'rgba(255, 255, 255, 0.06)',
    // @ts-ignore Web specific backdrop filter
    ...(Platform.OS === 'web' ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } : {}),
  },
  shine: {
    height: 40,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  glassInner: {
    padding: 18,
    position: 'relative',
    zIndex: 2,
  },
});
