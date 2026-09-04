import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Redirect, useRouter, useLocalSearchParams } from 'expo-router';
import GlassIcon from '@/components/glass-icon';
import VibrantBackground from '@/components/vibrant-background';
import { useAuth } from '@/context/auth-context';
import { supabase } from '@/lib/supabase';

import { DashboardTab } from '@/components/dashboard/DashboardTab';
import { AreaTab } from '@/components/dashboard/AreaTab';
import { MembersTab } from '@/components/dashboard/MembersTab';
import { ActivitiesTab } from '@/components/dashboard/ActivitiesTab';
import { FormationsTab } from '@/components/dashboard/FormationsTab';
import { EvangelizationTab } from '@/components/dashboard/EvangelizationTab';
import { ReportsTab } from '@/components/dashboard/ReportsTab';
import { AcsTab } from '@/components/dashboard/AcsTab';
import { HelpTab } from '@/components/dashboard/HelpTab';

const TABS = [
  'Dashboard', 'Area', 'Members', 'Activities', 'Formations',
  'Evangelization', 'Reports', 'ACS/ID', 'Help'
];

const TAB_CHIP = 'mr-[10px] rounded-[20px] border px-[16px] py-[10px]';
const TAB_CHIP_IDLE = `${TAB_CHIP} border-[#E5E5EA] bg-white`;
const TAB_CHIP_ACTIVE = `${TAB_CHIP} border-[rgba(61,153,26,0.25)] bg-[#E8F5E3]`;

export default function DashboardScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ username?: string }>();
  const { isAuthenticated, username } = useAuth();
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [memberProfile, setMemberProfile] = useState<{ firstname?: string } | null>(null);

  const currentUsername = username || params.username;

  useEffect(() => {
    async function fetchMemberProfile() {
      if (!currentUsername) return;

      try {
        const { data, error } = await supabase
          .from('yfc_members')
          .select('*')
          .eq('username', currentUsername)
          .single();

        if (!error && data) {
          setMemberProfile(data);
        }
      } catch (err) {
        if (__DEV__) {
          console.error('Failed to fetch member profile:', err);
        }
      }
    }

    fetchMemberProfile();
  }, [currentUsername]);

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <VibrantBackground>
      <ScrollView contentContainerClassName="px-[20px] pt-[60px] pb-[110px]" showsVerticalScrollIndicator={false}>
        <View className="mb-[28px] flex-row items-center justify-between">
          <View className="flex-row items-center gap-[14px]">
            <View className="h-[48px] w-[48px] rounded-[24px] border border-[#E5E5EA] bg-white p-[2px] shadow-sm">
              <View className="flex-1 items-center justify-center rounded-[22px] bg-[#3D991A]">
                <Text className="text-[13px] font-bold text-white">YFC</Text>
              </View>
            </View>
            <View>
              <Text className="text-[13px] font-medium text-[#8E8E93]">Welcome back</Text>
              <Text className="text-[20px] font-semibold tracking-[-0.3px] text-[#1C1C1E]">
                {memberProfile?.firstname || 'Youth Servant'}
              </Text>
            </View>
          </View>

          <View className="flex-row gap-[10px]">
            <TouchableOpacity className="h-[40px] w-[40px] items-center justify-center rounded-[20px] border border-[#E5E5EA] bg-white shadow-sm">
              <GlassIcon name="search" size={18} color="#8E8E93" />
            </TouchableOpacity>
            <TouchableOpacity className="relative h-[40px] w-[40px] items-center justify-center rounded-[20px] border border-[#E5E5EA] bg-white shadow-sm">
              <GlassIcon name="bell" size={18} color="#8E8E93" />
              <View className="absolute right-[8px] top-[8px] h-[8px] w-[8px] rounded-[4px] border border-white bg-[#3D991A]" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-[28px] grow-0"
          contentContainerClassName="pr-[20px]"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                className={isActive ? TAB_CHIP_ACTIVE : TAB_CHIP_IDLE}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  className={
                    isActive
                      ? 'text-[14px] font-semibold text-[#3D991A]'
                      : 'text-[14px] font-medium text-[#8E8E93]'
                  }
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View className="flex-1">
          {activeTab === 'Dashboard' && <DashboardTab router={router} />}
          {activeTab === 'Area' && <AreaTab />}
          {activeTab === 'Members' && <MembersTab />}
          {activeTab === 'Activities' && <ActivitiesTab />}
          {activeTab === 'Formations' && <FormationsTab />}
          {activeTab === 'Evangelization' && <EvangelizationTab />}
          {activeTab === 'Reports' && <ReportsTab />}
          {activeTab === 'ACS/ID' && <AcsTab />}
          {activeTab === 'Help' && <HelpTab />}
        </View>
      </ScrollView>
    </VibrantBackground>
  );
}
