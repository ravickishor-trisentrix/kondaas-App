import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function IntroScreen2({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Skip Button */}
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.replace("SignupScreen")}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Group with image (placeholder intro image) */}
      <Image
        source={require("../assets/introscreen2.png")}
        style={styles.imageGroup}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>Kondaas Assured</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Enjoy complete peace of mind with our generation guarantee & reliable
        service support.
      </Text>

      {/* Pagination Dots */}
      <View style={styles.dotsContainer}>
        <View style={styles.dotInactive} /> 
        <View style={styles.dotActive} />   
        <View style={styles.dotInactive} /> 
      </View>

      {/* Next Button (circle with arrow) */}
<TouchableOpacity
  style={styles.nextCircle}
  onPress={() => navigation.replace("IntroScreen3")}
>
  <View style={styles.innerCircle} />
  <Text style={styles.arrow}>&gt;</Text>   {/* instead of {">"} */}
</TouchableOpacity>

</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // Skip button
  skipButton: {
    position: "absolute",
    top: 61,
    left: 324,
    backgroundColor: "#F00001",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  skipText: {
    fontFamily: "Geist",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.5,
    color: "#fff",
  },

  // Image group
  imageGroup: {
    position: "absolute",
    top: 213,
    left: 28,
    width: 342,
    height: 203,
    opacity: 1,
  },

  // Title
  title: {
    position: "absolute",
    top: 579,
    left: 25,
    width: 275,
    height: 29,
    fontFamily: "Geist",
    fontWeight: "600", // SemiBold
    fontSize: 24,
    lineHeight: 29, // 120%
    letterSpacing: -0.48, // -2% of 24
    color: "#404040",
  },

  // Subtitle
  subtitle: {
    position: "absolute",
    top: 618,
    left: 25,
    width: 366,
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

  // Next button
  nextCircle: {
    position: "absolute",
    top: 747,
    left: 334,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#F87171",
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    position: "absolute",
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F00001",
  },
  arrow: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    zIndex: 1,
  },
});

