import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Intro3Screen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Main Image / Object */}
      <Image
        source={require("../assets/introscreen3.png")}
        style={styles.imageObject}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>Refer & Earn ₹5000</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Invite your friends to join Kondaas Solar and earn ₹5000 for every
        successful referral.
      </Text>

      {/* Pagination Dots */}
      <View style={styles.dotsContainer}>
        <View style={styles.dotInactive} />
        <View style={styles.dotInactive} />
        <View style={styles.dotActive} /> 
      </View>

      {/* Let's Go Button */}
      <TouchableOpacity
        style={styles.letsGoButton}
        onPress={() => navigation.replace("SignupScreen")}
      >
        <Text style={styles.letsGoText}>Let’s Go</Text>
        <Text style={styles.arrow}>&gt;</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // Image object
  imageObject: {
    position: "absolute",
    top: 175,
    left: 36,
    width: 329,
    height: 261,
    opacity: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },

  // Title
  title: {
    position: "absolute",
    top: 579,
    left: 25,
    width: 351,
    height: 29,
    fontFamily: "Geist",
    fontWeight: "600", // SemiBold
    fontSize: 24,
    lineHeight: 29, // 120% of 24
    letterSpacing: -0.48, // -2% of 24
    color: "#404040",
  },

  // Subtitle
  subtitle: {
    position: "absolute",
    top: 618,
    left: 25,
    width: 351,
    height: 49,
    fontFamily: "Geist",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24, // 150%
    color: "#404040",
  },

  // Pagination dots
  dotsContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 765,
    left: 26,
  },
  dotInactive: {
    width: 15,
    height: 5,
    borderRadius: 50,
    backgroundColor: "#FECACA",
    marginRight: 7,
  },
  dotActive: {
    width: 20,
    height: 5,
    borderRadius: 50,
    backgroundColor: "#F00001",
    marginRight: 7,
  },

  // Let's Go button
  letsGoButton: {
    position: "absolute",
    top: 751,
    left: 285,
    width: 90,
    height: 32,
    borderRadius: 50,
    backgroundColor: "#F00001",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  letsGoText: {
    fontFamily: "Geist",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.5,
    color: "#fff",
    marginRight: 5,
  },
  arrow: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

