import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import VibrantBackground from '@/components/vibrant-background';
import GlassIcon, { IconName } from '@/components/glass-icon';

const CARD = 'rounded-[20px] border border-[#E5E5EA] bg-white';
const SECTION_TITLE = 'mb-[12px] text-[13px] font-semibold uppercase tracking-[0.5px] text-[#8E8E93]';
const ROW = 'flex-row items-center px-[16px] py-[14px]';
const ROW_DIVIDED = `${ROW} border-b border-b-[#F0F0F0]`;
const ICON_WRAP = 'mr-[12px] h-[36px] w-[36px] items-center justify-center rounded-[18px]';

type NotifSetting = { key: string; label: string; sub: string; enabled: boolean };

const THEME_OPTIONS = ['System Default', 'Light', 'Dark'];
const LANGUAGE_OPTIONS = ['English', 'Filipino', 'Cebuano'];

export default function AppPreferencesScreen() {
  const router = useRouter();
  const [theme, setTheme] = useState('System Default');
  const [language, setLanguage] = useState('English');
  const [notifSettings, setNotifSettings] = useState<NotifSetting[]>([
    { key: 'events', label: 'Event Reminders', sub: 'Get notified about upcoming events', enabled: true },
    { key: 'prayers', label: 'Prayer Wall Updates', sub: 'New prayer requests & replies', enabled: true },
    { key: 'community', label: 'Community Posts', sub: 'Activity in your groups', enabled: false },
    { key: 'announcements', label: 'Announcements', sub: 'Chapter & national announcements', enabled: true },
    { key: 'digest', label: 'Weekly Digest', sub: 'Summary of your week in YFC', enabled: false },
  ]);

  const toggleNotif = (key: string) => {
    setNotifSettings((prev) =>
      prev.map((n) => (n.key === key ? { ...n, enabled: !n.enabled } : n))
    );
  };

  const iconMap: Record<string, { icon: IconName; bg: string; color: string }> = {
    events: { icon: 'calendar', bg: '#E8F5E3', color: '#3D991A' },
    prayers: { icon: 'heart', bg: '#FFEBE9', color: '#FF6B6B' },
    community: { icon: 'people', bg: '#EEF0FF', color: '#5856D6' },
    announcements: { icon: 'bell', bg: '#FFF4E3', color: '#FF9500' },
    digest: { icon: 'sparkles', bg: '#F0ECFF', color: '#AF52DE' },
  };

  return (
    <VibrantBackground>
      <ScrollView
        contentContainerClassName="px-[20px] pt-[60px] pb-[110px]"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="mb-[28px] flex-row items-center">
          <TouchableOpacity
            onPress={() => router.push('/profile')}
            className="mr-[14px] h-[38px] w-[38px] items-center justify-center rounded-[19px] border border-[#E5E5EA] bg-white"
          >
            <Text className="text-[20px] font-light text-[#1C1C1E]" style={{ lineHeight: 22 }}>‹</Text>
          </TouchableOpacity>
          <View className="flex-1">
            <Text className="text-[24px] font-semibold tracking-[-0.5px] text-[#1C1C1E]">
              App Preferences
            </Text>
            <Text className="mt-[2px] text-[13px] text-[#8E8E93]">
              Notifications & display settings
            </Text>
          </View>
        </View>

        {/* Appearance */}
        <Text className={SECTION_TITLE}>Appearance</Text>
        <View className={`${CARD} mb-[24px] overflow-hidden`}>
          <View className={ROW_DIVIDED}>
            <View className={`${ICON_WRAP} bg-[#F5F5F5]`}>
              <GlassIcon name="sparkles" size={18} color="#8E8E93" />
            </View>
            <View className="flex-1">
              <Text className="text-[15px] font-medium text-[#1C1C1E]">Theme</Text>
              <Text className="mt-[1px] text-[12px] text-[#8E8E93]">{theme}</Text>
            </View>
          </View>
          <View className="flex-row px-[16px] py-[12px] gap-[8px]">
            {THEME_OPTIONS.map((opt) => (
              <TouchableOpacity
                key={opt}
                onPress={() => setTheme(opt)}
                className={`flex-1 items-center rounded-[12px] border py-[10px] ${
                  theme === opt
                    ? 'border-[rgba(61,153,26,0.3)] bg-[#E8F5E3]'
                    : 'border-[#E5E5EA] bg-[#FAFAFA]'
                }`}
              >
                <Text
                  className={`text-[12px] font-medium ${
                    theme === opt ? 'text-[#3D991A]' : 'text-[#8E8E93]'
                  }`}
                >
                  {opt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Language */}
        <Text className={SECTION_TITLE}>Language</Text>
        <View className={`${CARD} mb-[24px] overflow-hidden`}>
          {LANGUAGE_OPTIONS.map((lang, idx) => (
            <TouchableOpacity
              key={lang}
              onPress={() => setLanguage(lang)}
              className={idx < LANGUAGE_OPTIONS.length - 1 ? ROW_DIVIDED : ROW}
            >
              <View className={`${ICON_WRAP} bg-[#F5F5F5]`}>
                <GlassIcon name="chat" size={18} color="#8E8E93" />
              </View>
              <Text className="flex-1 text-[15px] font-medium text-[#1C1C1E]">{lang}</Text>
              {language === lang && (
                <View className="h-[20px] w-[20px] items-center justify-center rounded-[10px] bg-[#3D991A]">
                  <Text className="text-[12px] text-white">✓</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Notifications */}
        <Text className={SECTION_TITLE}>Notifications</Text>
        <View className={`${CARD} overflow-hidden`}>
          {notifSettings.map((setting, idx) => {
            const { icon, bg, color } = iconMap[setting.key];
            return (
              <View
                key={setting.key}
                className={idx < notifSettings.length - 1 ? ROW_DIVIDED : ROW}
              >
                <View className={`${ICON_WRAP}`} style={{ backgroundColor: bg }}>
                  <GlassIcon name={icon} size={18} color={color} />
                </View>
                <View className="flex-1">
                  <Text className="text-[15px] font-medium text-[#1C1C1E]">{setting.label}</Text>
                  <Text className="mt-[1px] text-[12px] text-[#8E8E93]">{setting.sub}</Text>
                </View>
                <Switch
                  value={setting.enabled}
                  onValueChange={() => toggleNotif(setting.key)}
                  trackColor={{ false: '#E5E5EA', true: '#3D991A' }}
                  thumbColor="#FFFFFF"
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </VibrantBackground>
  );
}
