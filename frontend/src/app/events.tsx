import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import VibrantBackground from '@/components/vibrant-background';
import GlassIcon from '@/components/glass-icon';

const CARD = 'rounded-[20px] border border-[#E5E5EA] bg-white';
const SECTION_TITLE = 'mb-[12px] text-[13px] font-semibold uppercase tracking-[0.5px] text-[#8E8E93]';
const FILTER_BASE = 'mr-[10px] rounded-[20px] border px-[16px] py-[8px]';
const FILTER_IDLE = `${FILTER_BASE} border-[#E5E5EA] bg-white`;
const FILTER_ACTIVE = `${FILTER_BASE} border-[rgba(61,153,26,0.25)] bg-[#E8F5E3]`;
const META_ROW = 'flex-row items-center gap-[8px]';
const META_TEXT = 'flex-1 text-[13px] text-[#8E8E93]';

const CATEGORIES = ['All', 'Worship', 'Conference', 'Outreach', 'Workshops'];

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

export default function EventsScreen() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = EVENTS.filter((e) => activeTab === 'All' || e.category === activeTab);

  return (
    <VibrantBackground>
      <ScrollView
        contentContainerClassName="px-[20px] pt-[60px] pb-[110px]"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="mb-[28px]">
          <Text className="text-[28px] font-semibold tracking-[-0.5px] text-[#1C1C1E]">
            YFC Events
          </Text>
          <Text className="mt-[4px] text-[15px] text-[#8E8E93]">
            Discover upcoming gatherings & worship nights
          </Text>
        </View>

        {/* Category Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-[20px] grow-0"
          contentContainerClassName="pr-[20px]"
        >
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setActiveTab(cat)}
              className={activeTab === cat ? FILTER_ACTIVE : FILTER_IDLE}
            >
              <Text
                className={
                  activeTab === cat
                    ? 'text-[13px] font-semibold text-[#3D991A]'
                    : 'text-[13px] font-medium text-[#8E8E93]'
                }
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Events List */}
        <Text className={SECTION_TITLE}>{activeTab === 'All' ? 'All Events' : activeTab}</Text>
        <View className="gap-[12px]">
          {filtered.map((event) => (
            <View key={event.id} className={`${CARD} px-[20px] py-[16px]`}>
              <View className="mb-[10px] flex-row items-center justify-between gap-[8px]">
                <View className="rounded-[10px] border border-[rgba(61,153,26,0.25)] bg-[#E8F5E3] px-[10px] py-[3px]">
                  <Text className="text-[11px] font-semibold text-[#3D991A]">{event.tag}</Text>
                </View>
                <Text className="text-[12px] text-[#8E8E93]">{event.category}</Text>
              </View>

              <Text className="mb-[6px] text-[16px] font-semibold tracking-[-0.3px] text-[#1C1C1E]">
                {event.title}
              </Text>
              <Text className="mb-[12px] text-[14px] leading-[20px] text-[#8E8E93]">
                {event.description}
              </Text>

              <View className={`${META_ROW} mb-[4px]`}>
                <GlassIcon name="calendar" size={13} color="#3D991A" />
                <Text className={META_TEXT}>{event.date}</Text>
              </View>
              <View className={`${META_ROW} mb-[4px]`}>
                <GlassIcon name="clock" size={13} color="#8E8E93" />
                <Text className={META_TEXT}>{event.time}</Text>
              </View>
              <View className={META_ROW}>
                <GlassIcon name="location" size={13} color="#8E8E93" />
                <Text className={META_TEXT}>{event.location}</Text>
              </View>

              <View className="mt-[14px] flex-row items-center justify-between gap-[12px] border-t border-t-[#F0F0F0] pt-[12px]">
                <View className="flex-1 flex-row items-center gap-[6px]">
                  <GlassIcon name="people" size={14} color="#8E8E93" />
                  <Text className="text-[12px] text-[#8E8E93]">{event.attendees} Going</Text>
                </View>
                <TouchableOpacity className="rounded-[16px] bg-[#3D991A] px-[16px] py-[10px]">
                  <Text className="text-[13px] font-semibold text-white">Register Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {filtered.length === 0 && (
            <View className={`${CARD} items-center px-[20px] py-[28px]`}>
              <Text className="text-[14px] text-[#8E8E93]">No events in this category yet.</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </VibrantBackground>
  );
}
