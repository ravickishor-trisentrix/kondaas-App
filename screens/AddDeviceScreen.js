import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';

export default function AddDeviceScreen() {
  const [siteName, setSiteName] = useState('');
  const [deviceNumber, setDeviceNumber] = useState('');

  const handleAddDevice = () => {
    if (!siteName || !deviceNumber) {
      alert('Please fill out both fields');
      return;
    }
    console.log("Device Added:", siteName, deviceNumber);
    alert('Device added successfully!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Top Logo + Avatar */}
        <View style={styles.header}>
          <Text style={styles.logo}>kondaas</Text>
          <Image
            source={{ uri: 'https://your-avatar-url.com/avatar.png' }} // Replace with local avatar if needed
            style={styles.avatar}
          />
        </View>

        {/* Illustration */}
        <Image
          source={require('./../assets/add-device.png')} // Replace with actual image
          style={styles.illustration}
          resizeMode="contain"
        />

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.title}>Add your device</Text>
          <Text style={styles.subtitle}>Enter your device details to be monitored</Text>

          <TextInput
            style={styles.input}
            placeholder="Eg. My Home"
            value={siteName}
            onChangeText={setSiteName}
          />

          <TextInput
            style={styles.input}
            placeholder="KO-TN-1234-5678"
            value={deviceNumber}
            onChangeText={setDeviceNumber}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddDevice}>
            <Text style={styles.buttonText}>Add Device</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    alignItems: 'center',
    padding: 20,
  },
  header: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    color: '#d62828',
    fontWeight: 'bold',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ccc',
  },
  illustration: {
    width: '100%',
    height: 200,
    marginVertical: 20,
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
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});
