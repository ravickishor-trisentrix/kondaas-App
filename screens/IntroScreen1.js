import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function IntroScreen1({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Skip Button */}
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.replace("SignupScreen")}  // BEST UX: Skip all intros
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Intro Image - Fixed positioning */}
      <Image
        source={require("../assets/introscreen1.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>Smart Monitoring</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Track your solar system's performance in real-time and stay in control
        anytime, anywhere.
      </Text>

      {/* Pagination Dots */}
      <View style={styles.dotsContainer}>
        <View style={styles.dotActive} />
        <View style={styles.dotInactive} />
        <View style={styles.dotInactive} />
      </View>

      {/* Next Button (Circle with Arrow) */}
      <TouchableOpacity
        style={styles.nextCircle}
        onPress={() => navigation.replace("IntroScreen2")}  // Fixed: Goes to Intro2
      >
        <View style={styles.innerCircle} />
        <Text style={styles.arrow}>{">"}</Text>
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
  right: 25,
  backgroundColor: "transparent",  // Changed to transparent
  paddingVertical: 6,
  paddingHorizontal: 14,
  borderRadius: 20,  // Increased for more rounded pill shape
  borderWidth: 2,  // Added border
  borderColor: "#F00001",  // Red border
  zIndex: 10,
},
skipText: {
  fontFamily: "System",
  fontWeight: "400",
  fontSize: 14,
  lineHeight: 21,
  letterSpacing: 0.5,
  color: "#F00001",  // Changed to red text
},

  // Intro image - FIXED: Moved to center, made bigger
  image: {
    width: 250,           // Made much bigger
    height: 200,          // Made much bigger
    position: "absolute",
    top: 180,             // Moved to center area
    left: 75,             // Centered horizontally
    opacity: 1,
  },

  // Title
  title: {
    position: "absolute",
    top: 430,             // Moved up to accommodate larger image
    left: 25,
    width: 338,
    height: 29,
    fontFamily: "System", // Changed from "Geist"
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: -0.48,
    color: "#404040",
  },

  // Subtitle
  subtitle: {
    position: "absolute",
    top: 470,             // Moved up accordingly
    left: 25,
    width: 351,
    height: 49,
    fontFamily: "System", // Changed from "Geist"
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    color: "#404040",
  },

  // Pagination dots
  dotsContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 765,
    left: 26,
  },
  dotActive: {
    width: 20,
    height: 5,
    borderRadius: 50,
    backgroundColor: "#F00001",
    marginRight: 7,
  },
  dotInactive: {
    width: 15,
    height: 5,
    borderRadius: 50,
    backgroundColor: "#FECACA",
    marginRight: 7,
  },

  // Next circle with arrow
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


