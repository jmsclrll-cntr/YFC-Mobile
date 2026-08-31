import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import VibrantBackground from '@/components/vibrant-background';
import GlassCard from '@/components/glass-card';
import GlassIcon from '@/components/glass-icon';

const EVENTS = [
  {
    id: '1',
    title: 'YFC National Youth Summit 2026',
    date: 'SEP 15 - 17, 2026',
    time: '9:00 AM - 6:00 PM',
    location: 'Metropolitan Dome & Online',
    attendees: 340,
    category: 'Conference',
    tag: 'Featured',
    description: 'Empowering youth through faith, fellowship, worship, and leadership workshops.',
  },
  {
    id: '2',
    title: 'Friday Worship & Praise Night',
    date: 'THIS FRIDAY',
    time: '7:30 PM - 9:30 PM',
    location: 'Youth Center Main Hall',
    attendees: 85,
    category: 'Worship',
    tag: 'Weekly',
    description: 'Join us for an uplifting evening of live worship acoustic session and testimonies.',
  },
  {
    id: '3',
    title: 'Community Outreach & Food Drive',
    date: 'SAT, SEP 05',
    time: '8:00 AM - 12:00 PM',
    location: 'City Care Center',
    attendees: 62,
    category: 'Outreach',
    tag: 'Volunteer',
    description: 'Serving local families with care packages, hot meals, and prayer support.',
  },
];

const FILTER_CHIP_BASE = 'mr-[10px] rounded-[20px] border px-[18px] py-[10px]';
const FILTER_CHIP_IDLE = `${FILTER_CHIP_BASE} border-[#E5E5EA] bg-white`;
const FILTER_CHIP_ACTIVE = `${FILTER_CHIP_BASE} border-[rgba(61,153,26,0.25)] bg-[#E8F5E3]`;

export default function EventsScreen() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <VibrantBackground>
      <ScrollView
        contentContainerClassName="px-[20px] pt-[60px] pb-[110px]"
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-[24px]">
          <Text className="text-[32px] font-semibold tracking-[-0.5px] text-[#1C1C1E]">YFC Events</Text>
          <Text className="mt-[6px] text-[15px] text-[#8E8E93]">
            Discover upcoming gatherings & worship nights
          </Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-[24px]">
          {['All', 'Worship', 'Conference', 'Outreach', 'Workshops'].map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setActiveTab(cat)}
              className={activeTab === cat ? FILTER_CHIP_ACTIVE : FILTER_CHIP_IDLE}
            >
              <Text
                className={
                  activeTab === cat
                    ? 'text-[14px] font-semibold text-[#3D991A]'
                    : 'text-[14px] font-medium text-[#8E8E93]'
                }
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View className="gap-[16px]">
          {EVENTS.filter((e) => activeTab === 'All' || e.category === activeTab).map((event) => (
            <GlassCard key={event.id} style={{ marginBottom: 4 }}>
              <View className="mb-[12px] flex-row items-center justify-between">
                <View className="rounded-[10px] border border-[rgba(61,153,26,0.2)] bg-[#E8F5E3] px-[12px] py-[4px]">
                  <Text className="text-[12px] font-semibold text-[#3D991A]">{event.tag}</Text>
                </View>
                <Text className="text-[13px] font-medium text-[#8E8E93]">{event.category}</Text>
              </View>

              <Text className="mb-[8px] text-[20px] font-semibold tracking-[-0.3px] text-[#1C1C1E]">{event.title}</Text>
              <Text className="mb-[16px] text-[14px] leading-[22px] text-[#8E8E93]">
                {event.description}
              </Text>

              <View className="mb-[6px] flex-row items-center gap-[8px]">
                <GlassIcon name="calendar" size={15} color="#3D991A" />
                <Text className="text-[13px] font-medium text-[#1C1C1E]">{event.date}</Text>
              </View>

              <View className="mb-[6px] flex-row items-center gap-[8px]">
                <GlassIcon name="clock" size={15} color="#8E8E93" />
                <Text className="text-[13px] font-medium text-[#8E8E93]">{event.time}</Text>
              </View>

              <View className="mb-[6px] flex-row items-center gap-[8px]">
                <GlassIcon name="location" size={15} color="#8E8E93" />
                <Text className="text-[13px] font-medium text-[#8E8E93]">{event.location}</Text>
              </View>

              <View className="mt-[16px] flex-row items-center justify-between border-t border-t-[#F0F0F0] pt-[14px]">
                <View className="flex-row items-center gap-[6px]">
                  <GlassIcon name="people" size={14} color="#8E8E93" />
                  <Text className="text-[13px] text-[#8E8E93]">{event.attendees} Going</Text>
                </View>

                <TouchableOpacity className="rounded-[14px] bg-[#3D991A] px-[18px] py-[10px]">
                  <Text className="text-[13px] font-semibold text-white">Register Now</Text>
                </TouchableOpacity>
              </View>
            </GlassCard>
          ))}
        </View>
      </ScrollView>
    </VibrantBackground>
  );
}
