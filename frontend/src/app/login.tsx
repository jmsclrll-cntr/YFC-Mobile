import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet, Platform, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { useFonts, Oswald_700Bold } from '@expo-google-fonts/oswald';
import GlassIcon from '@/components/glass-icon';
import { useAuth } from '@/context/auth-context';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [fontsLoaded] = useFonts({ Oswald_700Bold });

  const handleLogin = () => {
    // Hardcoded credentials check
    if (username.trim() === 'YFC' && password === '1234') {
      setErrorMessage('');
      login();
      router.replace('/');
    } else {
      setErrorMessage('Invalid username or password. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {/* #3d991a Mesh Gradient Background Canvas */}
      <LinearGradient
        colors={['#103306', '#225b10', '#3d991a', '#143c08']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Mesh Blob 1 - Top-Left Sphere */}
      <LinearGradient
        colors={['rgba(134, 239, 172, 0.35)', 'rgba(61, 153, 26, 0.2)', 'transparent']}
        style={styles.blobTopLeft}
      />

      {/* Mesh Blob 2 - Center-Right Sphere */}
      <LinearGradient
        colors={['rgba(74, 222, 128, 0.30)', 'rgba(34, 197, 94, 0.15)', 'transparent']}
        style={styles.blobCenterRight}
      />

      {/* Mesh Blob 3 - Bottom-Left Sphere */}
      <LinearGradient
        colors={['rgba(22, 101, 52, 0.45)', 'rgba(61, 153, 26, 0.15)', 'transparent']}
        style={styles.blobBottomLeft}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* YFC Logo Branding */}
          <View style={styles.brandContainer}>
            <Image
              source={require('@/assets/org_icon.jpg')}
              style={styles.brandLogoImage}
              resizeMode="contain"
            />
            <Text style={[styles.brandTitle, fontsLoaded ? { fontFamily: 'Oswald_700Bold' } : {}]}>
              Youth For Christ
            </Text>
            <Text style={styles.brandSubtitle}>Welcome Back! Sign in to continue</Text>
          </View>

          {/* Frosted Glass Login Card */}
          <View style={styles.glassCard}>
            <BlurView intensity={55} tint="light" style={StyleSheet.absoluteFill} />
            <View style={styles.cardInner}>
              <Text style={styles.formHeading}>Account Login</Text>

              {/* Error Banner */}
              {errorMessage ? (
                <View style={styles.errorBox}>
                  <GlassIcon name="shield" size={16} color="#ffffff" />
                  <Text style={styles.errorText}>{errorMessage}</Text>
                </View>
              ) : null}

              {/* Username Input */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Username</Text>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputIcon}>
                    <GlassIcon name="person" size={18} color="#ffffff" />
                  </View>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter username (YFC)"
                    placeholderTextColor="rgba(255, 255, 255, 0.65)"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                  />
                </View>
              </View>

              {/* Password Input */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputIcon}>
                    <GlassIcon name="shield" size={18} color="#ffffff" />
                  </View>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter password (1234)"
                    placeholderTextColor="rgba(255, 255, 255, 0.65)"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    style={styles.eyeBtn}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <GlassIcon name={showPassword ? 'sparkles' : 'search'} size={18} color="#ffffff" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Forgot Password Link */}
              <TouchableOpacity style={styles.forgotBtn}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>

              {/* Sign In Button */}
              <TouchableOpacity style={styles.signInBtn} onPress={handleLogin}>
                <Text style={styles.signInBtnText}>SIGN IN</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#143c08',
    position: 'relative',
    overflow: 'hidden',
  },
  blobTopLeft: {
    position: 'absolute',
    top: -height * 0.1,
    left: -width * 0.2,
    width: width * 1.1,
    height: width * 1.1,
    borderRadius: 999,
  },
  blobCenterRight: {
    position: 'absolute',
    top: height * 0.3,
    right: -width * 0.3,
    width: width * 1.0,
    height: width * 1.0,
    borderRadius: 999,
  },
  blobBottomLeft: {
    position: 'absolute',
    bottom: -height * 0.1,
    left: -width * 0.15,
    width: width * 0.9,
    height: width * 0.9,
    borderRadius: 999,
  },
  scrollContent: {
    padding: 24,
    paddingTop: 80,
    paddingBottom: 60,
    justifyContent: 'center',
  },
  brandContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  brandLogoImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 16,
  },
  brandTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
    textAlign: 'center',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  brandSubtitle: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '500',
    textAlign: 'center',
  },
  glassCard: {
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#ffffff',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
    position: 'relative',
    // @ts-ignore Web backdrop filter
    ...(Platform.OS === 'web' ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } : {}),
  },
  cardInner: {
    padding: 24,
    position: 'relative',
    zIndex: 10,
  },
  formHeading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  errorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(220, 38, 38, 0.4)',
    borderWidth: 1,
    borderColor: '#ffffff',
    padding: 12,
    borderRadius: 14,
    marginBottom: 16,
  },
  errorText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
    flex: 1,
  },
  inputGroup: {
    marginBottom: 18,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 50,
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  eyeBtn: {
    padding: 6,
  },
  forgotBtn: {
    alignSelf: 'flex-end',
    marginBottom: 22,
  },
  forgotText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  signInBtn: {
    backgroundColor: '#3d991a',
    height: 52,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  signInBtnText: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 15,
    letterSpacing: 0.5,
  },
});
