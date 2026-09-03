import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import VibrantBackground from '@/components/vibrant-background';
import GlassIcon from '@/components/glass-icon';

const CARD = 'rounded-[20px] border border-[#E5E5EA] bg-white';
const SECTION_TITLE = 'mb-[12px] text-[13px] font-semibold uppercase tracking-[0.5px] text-[#8E8E93]';

const INTENTIONS = [
  {
    id: '1',
    title: 'Healing for my grandmother',
    category: 'Health',
    date: 'Sep 1, 2026',
    prayerCount: 34,
    note: 'Lord, please restore her health and surround her with Your peace and comfort.',
    answered: false,
  },
  {
    id: '2',
    title: 'Guidance in career decisions',
    category: 'Discernment',
    date: 'Aug 20, 2026',
    prayerCount: 21,
    note: 'Help me find clarity in choosing the path that aligns with Your will.',
    answered: true,
  },
  {
    id: '3',
    title: 'Peace for our family',
    category: 'Family',
    date: 'Aug 12, 2026',
    prayerCount: 47,
    note: 'Unite our family in love and understanding, Lord.',
    answered: false,
  },
  {
    id: '4',
    title: 'Success in upcoming exams',
    category: 'Studies',
    date: 'Jul 30, 2026',
    prayerCount: 18,
    note: 'Grant me focus and wisdom as I prepare and take my exams.',
    answered: true,
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Health: '#FF6B6B',
  Discernment: '#3D991A',
  Family: '#5856D6',
  Studies: '#FF9500',
};

export default function SavedPrayerIntentionsScreen() {
  const router = useRouter();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <VibrantBackground>
      <ScrollView
        contentContainerClassName="px-[20px] pt-[60px] pb-[110px]"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="mb-[24px] flex-row items-center">
          <TouchableOpacity
            onPress={() => router.push('/profile')}
            className="mr-[14px] h-[38px] w-[38px] items-center justify-center rounded-[19px] border border-[#E5E5EA] bg-white"
          >
            <Text className="text-[20px] font-light text-[#1C1C1E]" style={{ lineHeight: 22 }}>‹</Text>
          </TouchableOpacity>
          <View className="flex-1">
            <Text className="text-[24px] font-semibold tracking-[-0.5px] text-[#1C1C1E]">
              Saved Prayer Intentions
            </Text>
            <Text className="mt-[2px] text-[13px] text-[#8E8E93]">Your personal prayer wall</Text>
          </View>
          <TouchableOpacity className="h-[38px] w-[38px] items-center justify-center rounded-[19px] bg-[#E8F5E3]">
            <GlassIcon name="plus" size={18} color="#3D991A" />
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View className="mb-[24px] flex-row gap-[12px]">
          {[
            { value: '42', label: 'Prayers Shared' },
            { value: '4', label: 'Intentions' },
            { value: '2', label: 'Answered' },
          ].map((s) => (
            <View key={s.label} className={`${CARD} flex-1 items-center px-[8px] py-[14px]`}>
              <Text className="mb-[2px] text-[20px] font-semibold text-[#3D991A]">{s.value}</Text>
              <Text className="text-center text-[11px] leading-[14px] text-[#8E8E93]">
                {s.label}
              </Text>
            </View>
          ))}
        </View>

        {/* Intentions List */}
        <Text className={SECTION_TITLE}>My Intentions</Text>
        <View className="gap-[12px]">
          {INTENTIONS.map((item) => {
            const isExpanded = expandedId === item.id;
            const categoryColor = CATEGORY_COLORS[item.category] || '#8E8E93';

            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.85}
                onPress={() => setExpandedId(isExpanded ? null : item.id)}
                className={`${CARD} overflow-hidden`}
              >
                {/* Color accent bar */}
                <View className="h-[4px]" style={{ backgroundColor: categoryColor }} />

                <View className="px-[20px] py-[16px]">
                  <View className="mb-[10px] flex-row items-start justify-between">
                    <View className="flex-1 pr-[8px]">
                      <Text className="text-[15px] font-semibold tracking-[-0.2px] text-[#1C1C1E]">
                        {item.title}
                      </Text>
                      <View className="mt-[4px] flex-row items-center gap-[8px]">
                        <View
                          className="rounded-[8px] px-[8px] py-[2px]"
                          style={{ backgroundColor: `${categoryColor}18` }}
                        >
                          <Text
                            className="text-[11px] font-semibold"
                            style={{ color: categoryColor }}
                          >
                            {item.category}
                          </Text>
                        </View>
                        <Text className="text-[12px] text-[#8E8E93]">{item.date}</Text>
                      </View>
                    </View>
                    {item.answered && (
                      <View className="rounded-[10px] border border-[rgba(61,153,26,0.25)] bg-[#E8F5E3] px-[10px] py-[4px]">
                        <Text className="text-[11px] font-semibold text-[#3D991A]">Answered 🙏</Text>
                      </View>
                    )}
                  </View>

                  {isExpanded && (
                    <Text className="mb-[12px] text-[14px] italic leading-[22px] text-[#8E8E93]">
                      "{item.note}"
                    </Text>
                  )}

                  <View className="flex-row items-center justify-between border-t border-t-[#F0F0F0] pt-[12px]">
                    <View className="flex-row items-center gap-[6px]">
                      <GlassIcon name="heart" size={14} color="#3D991A" />
                      <Text className="text-[12px] text-[#8E8E93]">
                        {item.prayerCount} praying
                      </Text>
                    </View>
                    <View className="flex-row gap-[16px]">
                      <TouchableOpacity className="flex-row items-center gap-[4px]">
                        <GlassIcon name="share" size={14} color="#8E8E93" />
                        <Text className="text-[12px] text-[#8E8E93]">Share</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <GlassIcon
                          name="chevron-right"
                          size={16}
                          color={isExpanded ? '#3D991A' : '#C7C7CC'}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </VibrantBackground>
  );
}
