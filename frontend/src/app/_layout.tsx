import React from 'react';
import { Tabs, usePathname } from 'expo-router';
import { StyleSheet, Platform, View } from 'react-native';
import GlassIcon from '@/components/glass-icon';
import { AuthProvider } from '@/context/auth-context';
import { UiColors } from '@/constants/ui';

function TabLayoutInner() {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';
  const hideTabBar = isLoginPage || pathname.startsWith('/profile_section');

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: UiColors.accent,
        tabBarInactiveTintColor: UiColors.textSecondary,
        tabBarLabelStyle: styles.labelStyle,
        tabBarStyle: hideTabBar ? { display: 'none' } : styles.tabBar,
        tabBarBackground: () => <View style={styles.tabBarBackground} />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <GlassIcon name="home" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: 'Events',
          tabBarIcon: ({ color }) => <GlassIcon name="calendar" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: 'Community',
          tabBarIcon: ({ color }) => <GlassIcon name="people" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <GlassIcon name="person" size={22} color={color} />,
        }}
      />

      <Tabs.Screen
        name="announcements"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="attendance"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="profile_section"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}

export default function TabLayout() {
  return (
    <AuthProvider>
      <TabLayoutInner />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 28 : 20,
    left: 28,
    right: 28,
    height: 60,
    borderRadius: 30,
    borderWidth: StyleSheet.hairlineWidth + 0.5,
    borderColor: UiColors.border,
    backgroundColor: UiColors.surface,
    paddingBottom: 4,
    paddingTop: 4,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 3,
  },
  tabBarBackground: {
    flex: 1,
    backgroundColor: UiColors.surface,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: UiColors.borderLight,
  },
  labelStyle: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
});
