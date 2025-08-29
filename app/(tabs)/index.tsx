import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const MetaLogo = () => (
    <View style={styles.metaLogoContainer}>
      <Text style={styles.metaLogo}>∞ Meta</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ChevronLeft size={24} color="#262626" />
        </TouchableOpacity>
        <Text style={styles.languageText}>English (UK)</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Login Form */}
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username, email address or mobile number"
              placeholderTextColor="#8e8e8e"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#8e8e8e"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <TouchableOpacity style={styles.loginButton} activeOpacity={0.8}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotPasswordButton} activeOpacity={0.6}>
            <Text style={styles.forgotPasswordText}>Forgotten password?</Text>
          </TouchableOpacity>
        </View>

        {/* Spacer */}
        <View style={styles.spacer} />

        {/* Create Account Button */}
        <View style={styles.bottomSection}>
          <TouchableOpacity style={styles.createAccountButton} activeOpacity={0.8}>
            <Text style={styles.createAccountText}>Create new account</Text>
          </TouchableOpacity>

          <MetaLogo />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
  },
  backButton: {
    padding: 8,
  },
  languageText: {
    fontSize: 16,
    color: '#262626',
    fontWeight: '400',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 32,
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 14,
    color: '#262626',
  },
  loginButton: {
    backgroundColor: '#0095f6',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 24,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  forgotPasswordButton: {
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#262626',
    fontSize: 14,
    fontWeight: '500',
  },
  spacer: {
    flex: 1,
  },
  bottomSection: {
    paddingBottom: Platform.OS === 'ios' ? 32 : 24,
  },
  createAccountButton: {
    borderWidth: 1,
    borderColor: '#0095f6',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 32,
  },
  createAccountText: {
    color: '#0095f6',
    fontSize: 14,
    fontWeight: '600',
  },
  metaLogoContainer: {
    alignItems: 'center',
  },
  metaLogo: {
    fontSize: 14,
    color: '#737373',
    fontWeight: '500',
  },
});