import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import VibrantBackground from '@/components/vibrant-background';
import GlassIcon from '@/components/glass-icon';

const CARD = 'rounded-[20px] border border-[#E5E5EA] bg-white';
const SECTION_TITLE = 'mb-[12px] text-[13px] font-semibold uppercase tracking-[0.5px] text-[#8E8E93]';
const FIELD_LABEL = 'mb-[6px] text-[12px] font-medium text-[#8E8E93]';
const FIELD_VALUE = 'text-[15px] font-medium text-[#1C1C1E]';
const FIELD_ROW = 'border-b border-b-[#F0F0F0] px-[20px] py-[14px]';

const INFO_FIELDS = [
  { label: 'Full Name', value: 'John Doe', icon: 'person' as const },
  { label: 'Email Address', value: 'johndoe@yfc.org', icon: 'shield' as const },
  { label: 'Phone Number', value: '+63 917 123 4567', icon: 'bell' as const },
  { label: 'Birthday', value: 'March 15, 2000', icon: 'calendar' as const },
];

const CHAPTER_FIELDS = [
  { label: 'Chapter', value: 'Campus Chapter — Ateneo' },
  { label: 'Role', value: 'Youth Member' },
  { label: 'Member Since', value: 'January 2024' },
];

export default function PersonalInformationScreen() {
  const router = useRouter();
  const [editing, setEditing] = useState(false);

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
              Personal Information
            </Text>
            <Text className="mt-[2px] text-[13px] text-[#8E8E93]">Your profile details</Text>
          </View>
          <TouchableOpacity
            onPress={() => setEditing((e) => !e)}
            className="rounded-[14px] border border-[rgba(61,153,26,0.25)] bg-[#E8F5E3] px-[14px] py-[8px]"
          >
            <Text className="text-[13px] font-semibold text-[#3D991A]">
              {editing ? 'Save' : 'Edit'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Avatar Card */}
        <View className={`${CARD} mb-[24px] items-center px-[20px] py-[24px]`}>
          <View className="mb-[14px] h-[80px] w-[80px] items-center justify-center rounded-[40px] bg-[#E8F5E3]">
            <Text className="text-[26px] font-semibold text-[#3D991A]">JD</Text>
          </View>
          <TouchableOpacity className="rounded-[12px] border border-[#E5E5EA] bg-[#FAFAFA] px-[16px] py-[8px]">
            <Text className="text-[13px] font-medium text-[#1C1C1E]">Change Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Personal Details */}
        <Text className={SECTION_TITLE}>Personal Details</Text>
        <View className={`${CARD} mb-[24px] overflow-hidden`}>
          {INFO_FIELDS.map((field, idx) => (
            <View
              key={field.label}
              className={idx < INFO_FIELDS.length - 1 ? FIELD_ROW : 'px-[20px] py-[14px]'}
            >
              <Text className={FIELD_LABEL}>{field.label}</Text>
              {editing ? (
                <TextInput
                  defaultValue={field.value}
                  className="text-[15px] font-medium text-[#1C1C1E]"
                  style={{ padding: 0 }}
                />
              ) : (
                <Text className={FIELD_VALUE}>{field.value}</Text>
              )}
            </View>
          ))}
        </View>

        {/* Chapter Info */}
        <Text className={SECTION_TITLE}>Chapter & Membership</Text>
        <View className={`${CARD} overflow-hidden`}>
          {CHAPTER_FIELDS.map((field, idx) => (
            <View
              key={field.label}
              className={idx < CHAPTER_FIELDS.length - 1 ? FIELD_ROW : 'px-[20px] py-[14px]'}
            >
              <Text className={FIELD_LABEL}>{field.label}</Text>
              <Text className={FIELD_VALUE}>{field.value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </VibrantBackground>
  );
}
