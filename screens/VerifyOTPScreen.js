import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function VerifyOTPScreen() {
 const [otp, setOtp] = useState('');
 const [timer, setTimer] = useState(30);
 const route = useRoute();
 const navigation = useNavigation();
 const { phone } = route.params;

 const handleVerifyOTP = () => {
   if (otp.length === 6 || true) {
       // ✅ Navigate to Complete Profile screen after verifying OTP
       navigation.navigate('CompleteProfileScreen');
    } else {
      alert('Please enter a valid 6-digit OTP');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo & Tagline */}
      <Image
        source={{ uri: 'https://your-logo-url.com/logo.png' }} // Replace with your actual logo
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.brand}>kondaas</Text>
      <Text style={styles.tagline}>Solar Energy Management</Text>
 {/* Illustration */}

      <Image
        source={require('./../assets/illustration.png')} // same image as sign up
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.subtitle}>Enter the 6-digit code sent to {phone}</Text>

        <TextInput
          style={styles.input}
          placeholder="123456"
          keyboardType="numeric"
          maxLength={6}
          value={otp}
          onChangeText={setOtp}
        />

        <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableOpacity>

        <TouchableOpacity disabled={timer !== 0}>
          <Text style={styles.resend}>Didn't receive? <Text style={{ textDecorationLine: 'underline' }}>Resend</Text></Text>
        </TouchableOpacity>

        <Text style={styles.timer}>You have 00:{timer < 10 ? `0${timer}` : timer} seconds left</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 30,
 },
  brand: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d62828',
    marginTop: 10,
 },
  tagline: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
 },
  illustration: {
    width: '100%',
    height: 180,
    marginBottom: 20,
 },
  card: {
    backgroundColor: '#d62828',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    alignItems: 'center',
 },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
 },
  subtitle: {
    fontSize: 14,
    color: '#f8d7da',
    marginBottom: 20,
    textAlign: 'center',
 },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  button: {
    backgroundColor: '#eee',
    paddingVertical: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  resend: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 10,
  },
  timer: {
    fontSize: 12,
    color: '#fff',
  },
});
