import React, { useEffect } from "react";
import { View, Image, StyleSheet, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("IntroScreen1");
    }, 3000); // Show splash for 3 sec

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/image4983.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.brandName}>kondaas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E53E3E", // Red background color
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 60,
    marginBottom: 15,
  },
  brandName: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: 1,
    fontFamily: "System", // You can replace with your custom font
  },
});

