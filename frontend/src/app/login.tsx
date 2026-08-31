import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, KeyboardAvoidingView, ScrollView, Image, ViewStyle } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { useFonts, Oswald_700Bold } from '@expo-google-fonts/oswald';
import GlassIcon from '@/components/glass-icon';
import { useAuth } from '@/context/auth-context';
import { UiColors, UiShadow } from '@/constants/ui';

const SLIDESHOW_IMAGES = [
  require('../assets/login_slideshow/bg1.jpg'),
  require('../assets/login_slideshow/bg2.jpg'),
  require('../assets/login_slideshow/bg3.jpg'),
];

const SLIDE_INTERVAL_MS = 4000;
const FADE_DURATION_MS = 1000;

const AnimatedImage = Animated.createAnimatedComponent(Image);

const glassCardShadow = {
  ...UiShadow.elevated,
  ...(Platform.OS === 'web' ? { backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' } : {}),
} as unknown as ViewStyle;

function LoginBackgroundSlideshow() {
  const [baseIndex, setBaseIndex] = useState(0);
  const fade = useSharedValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      fade.value = withTiming(1, { duration: FADE_DURATION_MS }, (finished) => {
        if (finished) {
          runOnJS(setBaseIndex)((index) => (index + 1) % SLIDESHOW_IMAGES.length);
          fade.value = 0;
        }
      });
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [fade]);

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: fade.value,
  }));

  const overlayIndex = (baseIndex + 1) % SLIDESHOW_IMAGES.length;

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <Image source={SLIDESHOW_IMAGES[baseIndex]} style={styles.slideshowImage} resizeMode="cover" />
      <AnimatedImage
        source={SLIDESHOW_IMAGES[overlayIndex]}
        style={[styles.slideshowImage, overlayStyle]}
        resizeMode="cover"
      />
    </View>
  );
}

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [fontsLoaded] = useFonts({ Oswald_700Bold });

  const handleLogin = () => {
    if (username.trim() === '' && password === '') {
      setErrorMessage('');
      login();
      router.replace('/');
    } else {
      setErrorMessage('Invalid username or password. Please try again.');
    }
  };

  return (
    <View className="flex-1">
      <LoginBackgroundSlideshow />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView
          contentContainerClassName="justify-center px-[24px] pt-[80px] pb-[60px]"
          showsVerticalScrollIndicator={false}
        >
          <View className="mb-[36px] items-center">
            <Image
              source={require('@/assets/org_icon.jpg')}
              className="mb-[20px] h-[100px] w-[100px] rounded-[22px] border border-[#E5E5EA]"
              resizeMode="contain"
            />
            <Text
              className="mb-[6px] text-center text-[28px] font-bold uppercase tracking-[1px] text-[#ffffff]"
              style={fontsLoaded ? { fontFamily: 'Oswald_700Bold' } : undefined}
            >
              Youth For Christ
            </Text>
            <Text className="text-center text-[15px] font-medium text-[#8E8E93]">
              Welcome back. Sign in to continue.
            </Text>
          </View>

          <View
            className="relative overflow-hidden rounded-[24px] border border-[#E5E5EA] bg-white"
            style={glassCardShadow}
          >
            <BlurView intensity={20} tint="light" style={StyleSheet.absoluteFill} />
            <View className="relative z-10 p-[28px]">
              <Text className="mb-[24px] text-center text-[20px] font-semibold tracking-[-0.3px] text-[#1C1C1E]">
                Account Login
              </Text>

              {errorMessage ? (
                <View className="mb-[16px] flex-row items-center gap-[8px] rounded-[14px] border border-[#FFD6D3] bg-[#FFEBE9] p-[12px]">
                  <GlassIcon name="shield" size={16} color={UiColors.error} />
                  <Text className="flex-1 text-[13px] font-medium text-[#FF3B30]">{errorMessage}</Text>
                </View>
              ) : null}

              <View className="mb-[20px]">
                <Text className="mb-[8px] text-[13px] font-semibold text-[#1C1C1E]">Username</Text>
                <View className="h-[50px] flex-row items-center rounded-[14px] border border-[#E5E5EA] bg-[#FAFAFA] px-[14px]">
                  <View className="mr-[10px]">
                    <GlassIcon name="person" size={18} color="#8E8E93" />
                  </View>
                  <TextInput
                    className="flex-1 text-[15px] font-medium text-[#1C1C1E]"
                    placeholder="Enter username (YFC)"
                    placeholderTextColor="#AEAEB2"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                  />
                </View>
              </View>

              <View className="mb-[20px]">
                <Text className="mb-[8px] text-[13px] font-semibold text-[#1C1C1E]">Password</Text>
                <View className="h-[50px] flex-row items-center rounded-[14px] border border-[#E5E5EA] bg-[#FAFAFA] px-[14px]">
                  <View className="mr-[10px]">
                    <GlassIcon name="shield" size={18} color="#8E8E93" />
                  </View>
                  <TextInput
                    className="flex-1 text-[15px] font-medium text-[#1C1C1E]"
                    placeholder="Enter password (1234)"
                    placeholderTextColor="#AEAEB2"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    className="p-[6px]"
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <GlassIcon name={showPassword ? 'sparkles' : 'search'} size={18} color="#8E8E93" />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity className="mb-[24px] self-end">
                <Text className="text-[13px] font-semibold text-[#3D991A]">Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="h-[52px] flex-row items-center justify-center gap-[8px] rounded-[16px] bg-[#3D991A]"
                style={UiShadow.card}
                onPress={handleLogin}
              >
                <Text className="text-[15px] font-semibold tracking-[0.3px] text-white">Sign In</Text>
                <GlassIcon name="chevron-right" size={18} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  slideshowImage: {
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
  },
});
