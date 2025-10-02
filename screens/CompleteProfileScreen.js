import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CompleteProfileScreen() {
  const [fullName, setFullName] = useState('');
  const navigation = useNavigation();
  const handleCompleteSetup = () => {
  if (fullName.trim() === '') {
    alert('Please enter your full name');
    return;
  }
  navigation.navigate('HomeTabs'); // ✅ Takes user to bottom tabs
};


  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image
        source={require("./../assets/logo.png")} // Replace with your logo image
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.brand}>kondaas</Text>
      <Text style={styles.tagline}>Solar Energy Management</Text>

      {/* Illustration */}
      <Image
        source={require('./../assets/complete-profile.png')} // Replace with your image file
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Complete Profile</Text>
        <Text style={styles.subtitle}>Enter your name to continue setup</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />

        <TouchableOpacity style={styles.button} onPress={handleCompleteSetup}>
          <Text style={styles.buttonText}>Complete Setup</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexGrow: 1,
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
});
