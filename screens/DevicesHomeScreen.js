import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function DevicesHomeScreen() {
  const navigation = useNavigation();

  const devices = [
    { name: 'My Home', number: 'KO-TN-1234-5678', savings: '₹ 345' },
    { name: 'ECR Office', number: 'KO-TN-1234-9900', savings: '₹ 1,875' },
    { name: 'Farm House', number: 'KO-TN-1166-5678', savings: '₹ 845' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>kondaas</Text>
        <Image
          source={{ uri: 'https://your-avatar-url.com/avatar.png' }} // Replace with actual avatar
          style={styles.avatar}
        />
      </View>

      {/* Device Cards */}
      {/* Device Cards */}
<ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}>
  {devices.map((device, index) => (
    <TouchableOpacity
      key={index}
      style={styles.card}
      onPress={() =>
  navigation.navigate('DeviceDetailsScreen', {
    name: device.name,
    number: device.number,
    image:
      device.name === 'ECR Office'
        ? require('../assets/ecr-office.png')
        : device.name === 'Farm House'
        ? require('../assets/house.png')
        : require('../assets/house.png'),
  })
}
 // ✅ Pass device as param
    >
      <Ionicons name="home-outline" size={28} color="#fff" style={styles.icon} />
      <View style={{ flex: 1 }}>
        <Text style={styles.deviceName}>{device.name}</Text>
        <Text style={styles.deviceNumber}># {device.number}</Text>
        <Text style={styles.savings}>Today’s Savings: {device.savings}</Text>
      </View>
    </TouchableOpacity>
  ))}


        {/* Add Device Button */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddDevice')}
        >
          <Ionicons name="add-circle-outline" size={20} color="#fff" />
          <Text style={styles.addButtonText}>Add New Device</Text>
        </TouchableOpacity>

        {/* Bottom Illustration */}
        <Image
          source={require('./../assets/devices-illustration.png')} // Replace with your image
          style={styles.illustration}
          resizeMode="contain"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    paddingHorizontal: 20,
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d62828',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  icon: {
    marginRight: 15,
  },
  deviceName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  deviceNumber: {
    fontSize: 12,
    color: '#f8d7da',
  },
  savings: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#d62828',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  illustration: {
    width: '100%',
    height: 120,
    marginTop: 20,
  },
});
