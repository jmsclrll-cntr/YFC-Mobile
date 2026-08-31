import { Platform, ViewStyle } from 'react-native';

export const UiColors = {
  background: '#F2F2F7',
  surface: '#FFFFFF',
  surfaceMuted: '#FAFAFA',
  border: '#E5E5EA',
  borderLight: '#F0F0F0',
  text: '#1C1C1E',
  textSecondary: '#8E8E93',
  textTertiary: '#AEAEB2',
  accent: '#3D991A',
  accentLight: '#E8F5E3',
  accentMuted: '#6BBF4A',
  error: '#FF3B30',
  errorLight: '#FFEBE9',
  shadow: 'rgba(0, 0, 0, 0.06)',
} as const;

export const UiRadius = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
} as const;

export const UiShadow = {
  card: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  elevated: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 5,
  },
} as const;

export const webBackdropBlur = (amount = 16): ViewStyle =>
  Platform.OS === 'web'
    ? ({
        backdropFilter: `blur(${amount}px)`,
        WebkitBackdropFilter: `blur(${amount}px)`,
      } as ViewStyle)
    : {};
