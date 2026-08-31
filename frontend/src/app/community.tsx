import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import VibrantBackground from '@/components/vibrant-background';
import GlassIcon from '@/components/glass-icon';

const GROUPS = [
  { id: '1', name: 'Campus Youth Chapter', members: 128, leader: 'Alex Rivera', topic: 'Weekly Bible Study' },
  { id: '2', name: 'YFC Worship Team', members: 45, leader: 'Sarah Chen', topic: 'Music & Creative Arts' },
  { id: '3', name: 'Young Professionals', members: 94, leader: 'David Miller', topic: 'Career & Faith' },
];

const CARD = 'rounded-[20px] border border-[#E5E5EA] bg-white';
const SECTION_TITLE = 'mb-[12px] text-[20px] font-semibold tracking-[-0.3px] text-[#1C1C1E]';
const AVATAR =
  'h-[40px] w-[40px] items-center justify-center rounded-[20px] border border-[#E5E5EA]';
const SECONDARY_BTN =
  'items-center rounded-[14px] border border-[#E5E5EA] bg-[#FAFAFA] py-[10px]';

export default function CommunityScreen() {
  return (
    <VibrantBackground>
      <ScrollView
        contentContainerClassName="px-[20px] pt-[60px] pb-[110px]"
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-[28px]">
          <Text className="text-[28px] font-semibold tracking-[-0.5px] text-[#1C1C1E]">Community</Text>
          <Text className="mt-[4px] text-[15px] text-[#8E8E93]">
            Connect, share prayer requests & join household groups
          </Text>
        </View>

        <View className={`${CARD} mb-[28px] px-[16px] py-[14px]`}>
          <View className="flex-row items-center gap-[12px]">
            <View className={`${AVATAR} bg-[#E8F5E3]`}>
              <Text className="text-[14px] font-semibold text-[#3D991A]">Y</Text>
            </View>
            <Text className="flex-1 text-[14px] text-[#8E8E93]">
              Share a testimonial or prayer request...
            </Text>
            <TouchableOpacity className="h-[36px] w-[36px] items-center justify-center rounded-[18px] bg-[#E8F5E3]">
              <GlassIcon name="plus" size={18} color="#3D991A" />
            </TouchableOpacity>
          </View>
        </View>

        <Text className={SECTION_TITLE}>Household Groups</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-[28px] grow-0"
          contentContainerClassName="pr-[20px]"
        >
          {GROUPS.map((g) => (
            <View key={g.id} className={`${CARD} mr-[12px] w-[200px] p-[16px]`}>
              <View className="mb-[12px] flex-row items-center justify-between">
                <View className="h-[36px] w-[36px] items-center justify-center rounded-[18px] bg-[#E8F5E3]">
                  <GlassIcon name="people" size={18} color="#3D991A" />
                </View>
                <GlassIcon name="shield" size={16} color="#8E8E93" />
              </View>
              <Text className="mb-[4px] text-[15px] font-semibold text-[#1C1C1E]">{g.name}</Text>
              <Text className="mb-[4px] text-[13px] font-medium text-[#3D991A]">{g.topic}</Text>
              <Text className="mb-[14px] text-[12px] text-[#8E8E93]">Leader: {g.leader}</Text>
              <TouchableOpacity className={SECONDARY_BTN}>
                <Text className="text-[12px] font-semibold text-[#1C1C1E]">
                  Join Group ({g.members})
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <Text className={SECTION_TITLE}>Prayer Requests & Wall</Text>
        <View className={`${CARD} p-[20px]`}>
          <View className="mb-[12px] flex-row items-center gap-[12px]">
            <View className={`${AVATAR} bg-[#F5F5F5]`}>
              <Text className="text-[14px] font-semibold text-[#8E8E93]">M</Text>
            </View>
            <View className="flex-1">
              <Text className="text-[15px] font-semibold text-[#1C1C1E]">Maria Santos</Text>
              <Text className="text-[12px] text-[#8E8E93]">2 hours ago • Campus Chapter</Text>
            </View>
          </View>
          <Text className="mb-[16px] text-[14px] leading-[22px] text-[#1C1C1E]">
            Please pray for our upcoming midterms and for the youth outreach retreat this weekend! Hoping to see lives transformed. 🙏
          </Text>
          <View className="flex-row items-center gap-[20px] border-t border-t-[#F0F0F0] pt-[14px]">
            <TouchableOpacity className="flex-row items-center gap-[6px]">
              <GlassIcon name="heart" size={16} color="#3D991A" />
              <Text className="text-[13px] font-medium text-[#8E8E93]">Praying (24)</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center gap-[6px]">
              <GlassIcon name="chat" size={16} color="#8E8E93" />
              <Text className="text-[13px] font-medium text-[#8E8E93]">Comments (8)</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center gap-[6px]">
              <GlassIcon name="share" size={16} color="#8E8E93" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </VibrantBackground>
  );
}
