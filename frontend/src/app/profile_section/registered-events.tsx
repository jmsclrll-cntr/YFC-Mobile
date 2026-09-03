import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import VibrantBackground from '@/components/vibrant-background';
import GlassIcon from '@/components/glass-icon';

const CARD = 'rounded-[20px] border border-[#E5E5EA] bg-white';
const SECTION_TITLE = 'mb-[12px] text-[13px] font-semibold uppercase tracking-[0.5px] text-[#8E8E93]';
const FILTER_BASE = 'mr-[10px] rounded-[20px] border px-[16px] py-[8px]';
const FILTER_IDLE = `${FILTER_BASE} border-[#E5E5EA] bg-white`;
const FILTER_ACTIVE = `${FILTER_BASE} border-[rgba(61,153,26,0.25)] bg-[#E8F5E3]`;

const REGISTERED_EVENTS = [
  {
    id: '1',
    title: 'YFC National Youth Summit 2026',
    date: 'SEP 15 – 17, 2026',
    time: '9:00 AM',
    location: 'Metropolitan Dome',
    category: 'Conference',
    status: 'Upcoming',
  },
  {
    id: '2',
    title: 'Friday Worship & Praise Night',
    date: 'AUG 29, 2026',
    time: '7:30 PM',
    location: 'Youth Center Main Hall',
    category: 'Worship',
    status: 'Attended',
  },
  {
    id: '3',
    title: 'Community Outreach & Food Drive',
    date: 'AUG 05, 2026',
    time: '8:00 AM',
    location: 'City Care Center',
    category: 'Outreach',
    status: 'Attended',
  },
  {
    id: '4',
    title: 'Leadership Formation Seminar',
    date: 'OCT 12, 2026',
    time: '10:00 AM',
    location: 'Parish Hall B',
    category: 'Workshop',
    status: 'Upcoming',
  },
];

const STATUS_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Upcoming: { bg: '#E8F5E3', text: '#3D991A', border: 'rgba(61,153,26,0.25)' },
  Attended: { bg: '#F5F5F5', text: '#8E8E93', border: '#E5E5EA' },
};

export default function RegisteredEventsScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Upcoming', 'Attended'];

  const filtered =
    activeFilter === 'All'
      ? REGISTERED_EVENTS
      : REGISTERED_EVENTS.filter((e) => e.status === activeFilter);

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
              My Registered Events
            </Text>
            <Text className="mt-[2px] text-[13px] text-[#8E8E93]">
              {REGISTERED_EVENTS.length} events registered
            </Text>
          </View>
        </View>

        {/* Stats row */}
        <View className="mb-[24px] flex-row gap-[12px]">
          {[
            { value: '18', label: 'Total Events' },
            { value: '2', label: 'Upcoming' },
            { value: '16', label: 'Attended' },
          ].map((s) => (
            <View key={s.label} className={`${CARD} flex-1 items-center px-[8px] py-[14px]`}>
              <Text className="mb-[2px] text-[20px] font-semibold text-[#3D991A]">{s.value}</Text>
              <Text className="text-center text-[11px] leading-[14px] text-[#8E8E93]">
                {s.label}
              </Text>
            </View>
          ))}
        </View>

        {/* Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-[20px] grow-0"
        >
          {filters.map((f) => (
            <TouchableOpacity
              key={f}
              onPress={() => setActiveFilter(f)}
              className={activeFilter === f ? FILTER_ACTIVE : FILTER_IDLE}
            >
              <Text
                className={
                  activeFilter === f
                    ? 'text-[13px] font-semibold text-[#3D991A]'
                    : 'text-[13px] font-medium text-[#8E8E93]'
                }
              >
                {f}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Event Cards */}
        <Text className={SECTION_TITLE}>
          {activeFilter === 'All' ? 'All Events' : activeFilter}
        </Text>
        <View className="gap-[12px]">
          {filtered.map((event) => {
            const colors = STATUS_COLORS[event.status];
            return (
              <View key={event.id} className={`${CARD} overflow-hidden`}>
                <View
                  className="px-[20px] py-[4px]"
                  style={{ backgroundColor: colors.bg }}
                />
                <View className="px-[20px] py-[16px]">
                  <View className="mb-[10px] flex-row items-center justify-between">
                    <View
                      className="rounded-[10px] border px-[10px] py-[3px]"
                      style={{ backgroundColor: colors.bg, borderColor: colors.border }}
                    >
                      <Text className="text-[11px] font-semibold" style={{ color: colors.text }}>
                        {event.status}
                      </Text>
                    </View>
                    <Text className="text-[12px] text-[#8E8E93]">{event.category}</Text>
                  </View>

                  <Text className="mb-[10px] text-[16px] font-semibold tracking-[-0.3px] text-[#1C1C1E]">
                    {event.title}
                  </Text>

                  <View className="mb-[4px] flex-row items-center gap-[8px]">
                    <GlassIcon name="calendar" size={13} color="#3D991A" />
                    <Text className="text-[13px] text-[#8E8E93]">{event.date}</Text>
                  </View>
                  <View className="mb-[4px] flex-row items-center gap-[8px]">
                    <GlassIcon name="clock" size={13} color="#8E8E93" />
                    <Text className="text-[13px] text-[#8E8E93]">{event.time}</Text>
                  </View>
                  <View className="flex-row items-center gap-[8px]">
                    <GlassIcon name="location" size={13} color="#8E8E93" />
                    <Text className="text-[13px] text-[#8E8E93]">{event.location}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </VibrantBackground>
  );
}
