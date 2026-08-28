import React from 'react';
import { Tabs, usePathname } from 'expo-router';
import { StyleSheet, Platform, View } from 'react-native';
import { BlurView } from 'expo-blur';
import GlassIcon from '@/components/glass-icon';
import { AuthProvider } from '@/context/auth-context';

function TabLayoutInner() {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#c084fc',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.55)',
        tabBarLabelStyle: styles.labelStyle,
        tabBarStyle: isLoginPage ? { display: 'none' } : styles.tabBar,
        tabBarBackground: () => (
          <View style={StyleSheet.absoluteFill}>
            <BlurView intensity={70} tint="dark" style={StyleSheet.absoluteFill} />
            <View style={styles.tabShine} />
          </View>
        ),
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
        name="login"
        options={{
          href: null,
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          href: null,
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
    bottom: Platform.OS === 'ios' ? 24 : 16,
    left: 20,
    right: 20,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
    backgroundColor: Platform.OS === 'web' ? 'rgba(15, 23, 42, 0.65)' : 'rgba(15, 23, 42, 0.35)',
    paddingBottom: 6,
    paddingTop: 6,
    overflow: 'hidden',
    shadowColor: '#8b5cf6',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.35,
    shadowRadius: 24,
    elevation: 12,
    // @ts-ignore Web specific backdrop filter
    ...(Platform.OS === 'web' ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } : {}),
  },
  labelStyle: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
  tabShine: {
    height: 1,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    position: 'absolute',
    top: 0,
  },
});
