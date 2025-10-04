import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddDeviceScreen from './AddDeviceScreen';
import DevicesHomeScreen from './DevicesHomeScreen';

function DummyScreen() {
  return null;
}

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Devices" component={DevicesHomeScreen} />
      <Tab.Screen name="AddDevice" component={AddDeviceScreen} />
      <Tab.Screen name="Service" component={DummyScreen} />
      <Tab.Screen name="Chat" component={DummyScreen} />
      <Tab.Screen name="Refer" component={DummyScreen} />
    </Tab.Navigator>
  );
}
