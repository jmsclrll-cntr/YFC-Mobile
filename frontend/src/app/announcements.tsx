import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import VibrantBackground from '@/components/vibrant-background';
import GlassCard from '@/components/glass-card';

export default function AnnouncementsScreen() {
  return (
    <VibrantBackground>
      <ScrollView
        contentContainerClassName="px-[20px] pt-[60px] pb-[110px]"
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-[24px]">
          <Text className="text-[32px] font-semibold tracking-[-0.5px] text-[#1C1C1E]">Announcements</Text>
          <Text className="mt-[6px] text-[15px] text-[#8E8E93]">Latest updates from YFC</Text>
        </View>
        <GlassCard>
          <Text className="text-[16px] text-[#8E8E93]">No new announcements at this time.</Text>
        </GlassCard>
      </ScrollView>
    </VibrantBackground>
  );
}
