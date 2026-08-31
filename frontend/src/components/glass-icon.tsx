import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SymbolView, SymbolViewProps, SymbolWeight } from 'expo-symbols';

export type IconName =
  | 'home'
  | 'calendar'
  | 'people'
  | 'person'
  | 'search'
  | 'bell'
  | 'fire'
  | 'sparkles'
  | 'heart'
  | 'music'
  | 'shield'
  | 'chevron-right'
  | 'bookmark'
  | 'share'
  | 'chat'
  | 'plus'
  | 'award'
  | 'settings'
  | 'logout'
  | 'clock'
  | 'location';

const SYMBOL_MAP: Record<IconName, { ios: string; web: string; symbol: string }> = {
  home: { ios: 'house.fill', web: 'home', symbol: '🏠' },
  calendar: { ios: 'calendar', web: 'calendar', symbol: '📅' },
  people: { ios: 'person.3.fill', web: 'group', symbol: '👥' },
  person: { ios: 'person.fill', web: 'person', symbol: '👤' },
  search: { ios: 'magnifyingglass', web: 'search', symbol: '🔍' },
  bell: { ios: 'bell.fill', web: 'notifications', symbol: '🔔' },
  fire: { ios: 'flame.fill', web: 'whatshot', symbol: '🔥' },
  sparkles: { ios: 'sparkles', web: 'auto_awesome', symbol: '✨' },
  heart: { ios: 'heart.fill', web: 'favorite', symbol: '❤️' },
  music: { ios: 'music.note', web: 'music_note', symbol: '🎵' },
  shield: { ios: 'shield.fill', web: 'security', symbol: '🛡️' },
  'chevron-right': { ios: 'chevron.right', web: 'chevron_right', symbol: '›' },
  bookmark: { ios: 'bookmark.fill', web: 'bookmark', symbol: '🔖' },
  share: { ios: 'square.and.arrow.up', web: 'share', symbol: '↗️' },
  chat: { ios: 'bubble.left.fill', web: 'chat', symbol: '💬' },
  plus: { ios: 'plus.circle.fill', web: 'add_circle', symbol: '➕' },
  award: { ios: 'rosette', web: 'military_tech', symbol: '🎖️' },
  settings: { ios: 'gearshape.fill', web: 'settings', symbol: '⚙️' },
  logout: { ios: 'rectangle.portrait.and.arrow.right', web: 'logout', symbol: '🚪' },
  clock: { ios: 'clock.fill', web: 'schedule', symbol: '🕒' },
  location: { ios: 'location.fill', web: 'place', symbol: '📍' },
};

interface GlassIconProps {
  name: IconName;
  size?: number;
  color?: any;
  weight?: SymbolWeight;
}

export default function GlassIcon({ name, size = 20, color = '#1C1C1E', weight = 'regular' }: GlassIconProps) {
  const iconConfig = SYMBOL_MAP[name] || SYMBOL_MAP.home;

  try {
    return (
      <SymbolView
        name={{ ios: iconConfig.ios as any, web: iconConfig.web as any }}
        size={size}
        tintColor={color}
        weight={weight}
        fallback={<Text style={{ fontSize: size * 0.75, color }}>{iconConfig.symbol}</Text>}
      />
    );
  } catch (e) {
    return <Text style={{ fontSize: size * 0.75, color }}>{iconConfig.symbol}</Text>;
  }
}
