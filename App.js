import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./screens/SplashScreen";
import IntroScreen1 from "./screens/IntroScreen1";
import IntroScreen2 from "./screens/IntroScreen2";
import IntroScreen3 from "./screens/IntroScreen3";
import SignupScreen from "./screens/SignupScreen";
import VerifyOTPScreen from "./screens/VerifyOTPScreen";
import CompleteProfileScreen from "./screens/CompleteProfileScreen";
import MainTabs from "./screens/MainTabs";
import DeviceDetailsScreen from "./screens/DeviceDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        {/* Splash + Intro Screens */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="IntroScreen1" component={IntroScreen1} />
        <Stack.Screen name="IntroScreen2" component={IntroScreen2} />
        <Stack.Screen name="IntroScreen3" component={IntroScreen3} />

        {/* Auth + Main App Screens */}
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="VerifyOTP" component={VerifyOTPScreen} />
        <Stack.Screen name="CompleteProfile" component={CompleteProfileScreen} />
        <Stack.Screen name="HomeTabs" component={MainTabs} />
        <Stack.Screen name="DeviceDetails" component={DeviceDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

