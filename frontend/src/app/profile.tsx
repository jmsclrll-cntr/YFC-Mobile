import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import VibrantBackground from '@/components/vibrant-background';
import GlassIcon, { IconName } from '@/components/glass-icon';
import { useAuth } from '@/context/auth-context';

const CARD = 'rounded-[20px] border border-[#E5E5EA] bg-white';
const SECTION_TITLE = 'mb-[12px] text-[20px] font-semibold tracking-[-0.3px] text-[#1C1C1E]';
const MENU_ITEM = 'flex-row items-center px-[16px] py-[14px]';
const MENU_ITEM_DIVIDED = `${MENU_ITEM} border-b border-b-[#F0F0F0]`;
const ICON_WRAP = 'mr-[12px] h-[36px] w-[36px] items-center justify-center rounded-[18px] bg-[#F5F5F5]';

const MENU_ITEMS: { icon: IconName; label: string }[] = [
  { icon: 'person', label: 'Personal Information' },
  { icon: 'calendar', label: 'My Registered Events' },
  { icon: 'heart', label: 'Saved Prayer Intentions' },
  { icon: 'settings', label: 'App Preferences & Notifications' },
];

const STATS = [
  { value: '18', label: 'Events Attended' },
  { value: '42', label: 'Prayers Shared' },
  { value: '2 yrs', label: 'Member' },
];

export default function ProfileScreen() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  return (
    <VibrantBackground>
      <ScrollView
        contentContainerClassName="px-[20px] pt-[60px] pb-[110px]"
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-[28px]">
          <Text className="text-[28px] font-semibold tracking-[-0.5px] text-[#1C1C1E]">Profile</Text>
          <Text className="mt-[4px] text-[15px] text-[#8E8E93]">
            Manage your account and preferences
          </Text>
        </View>

        <View className={`${CARD} mb-[28px] items-center px-[20px] py-[28px]`}>
          <View className="mb-[16px] h-[80px] w-[80px] items-center justify-center rounded-[40px] bg-[#E8F5E3]">
            <Text className="text-[26px] font-semibold text-[#3D991A]">JD</Text>
          </View>
          <Text className="mb-[4px] text-[22px] font-semibold tracking-[-0.3px] text-[#1C1C1E]">
            John Doe
          </Text>
          <Text className="mb-[16px] text-center text-[14px] text-[#8E8E93]">
            YFC Youth Member • Campus Chapter
          </Text>

          <View className="flex-row flex-wrap justify-center gap-[8px]">
            <View className="flex-row items-center gap-[6px] rounded-[14px] border border-[#E5E5EA] bg-[#FAFAFA] px-[12px] py-[6px]">
              <GlassIcon name="award" size={14} color="#3D991A" />
              <Text className="text-[12px] font-medium text-[#1C1C1E]">Active Servant</Text>
            </View>
            <View className="flex-row items-center gap-[6px] rounded-[14px] border border-[#E5E5EA] bg-[#FAFAFA] px-[12px] py-[6px]">
              <GlassIcon name="shield" size={14} color="#8E8E93" />
              <Text className="text-[12px] font-medium text-[#1C1C1E]">Verified Leader</Text>
            </View>
          </View>
        </View>

        <View className="mb-[28px] flex-row gap-[12px]">
          {STATS.map((stat) => (
            <View key={stat.label} className={`${CARD} flex-1 items-center px-[12px] py-[16px]`}>
              <Text className="mb-[2px] text-[20px] font-semibold text-[#3D991A]">{stat.value}</Text>
              <Text className="text-center text-[11px] leading-[14px] text-[#8E8E93]">{stat.label}</Text>
            </View>
          ))}
        </View>

        <Text className={SECTION_TITLE}>Account & Settings</Text>
        <View className={`${CARD} mb-[4px] overflow-hidden`}>
          {MENU_ITEMS.map((item, idx) => (
            <TouchableOpacity key={idx} className={MENU_ITEM_DIVIDED}>
              <View className={ICON_WRAP}>
                <GlassIcon name={item.icon} size={18} color={idx === 0 ? '#3D991A' : '#8E8E93'} />
              </View>
              <Text className="flex-1 text-[15px] font-medium text-[#1C1C1E]">{item.label}</Text>
              <GlassIcon name="chevron-right" size={18} color="#C7C7CC" />
            </TouchableOpacity>
          ))}

          <TouchableOpacity className={MENU_ITEM} onPress={handleLogout}>
            <View className="mr-[12px] h-[36px] w-[36px] items-center justify-center rounded-[18px] bg-[#FFEBE9]">
              <GlassIcon name="logout" size={18} color="#FF3B30" />
            </View>
            <Text className="flex-1 text-[15px] font-medium text-[#FF3B30]">Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </VibrantBackground>
  );
}
