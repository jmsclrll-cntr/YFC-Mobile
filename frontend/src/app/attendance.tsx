import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import VibrantBackground from '@/components/vibrant-background';
import GlassCard from '@/components/glass-card';

export default function AttendanceScreen() {
  return (
    <VibrantBackground>
      <ScrollView
        contentContainerClassName="px-[20px] pt-[60px] pb-[110px]"
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-[24px]">
          <Text className="text-[32px] font-semibold tracking-[-0.5px] text-[#1C1C1E]">Quick Attendance</Text>
          <Text className="mt-[6px] text-[15px] text-[#8E8E93]">Check-in to events and gatherings</Text>
        </View>
        <GlassCard>
          <Text className="text-[16px] text-[#8E8E93]">Scan QR code or enter event pin to check in.</Text>
        </GlassCard>
      </ScrollView>
    </VibrantBackground>
  );
}
