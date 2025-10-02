import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // ✅ updated import
import { auth } from "../firebaseConfig";
import { signInWithPhoneNumber } from "firebase/auth";

export default function SignupScreen() {
  const [phone, setPhone] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const navigation = useNavigation();

  const sendOTP = async () => {
    try {
      if (phone.trim().length < 10) {
        alert("Please enter a valid phone number");
        return;
      }

      // ✅ Works properly on built APK/IPA, not always in Expo Go
      const confirmation = await signInWithPhoneNumber(auth, phone);
      setVerificationId(confirmation.verificationId);

      alert("OTP Sent!");
      navigation.navigate("VerifyOTPScreen", {
        phone,
        verificationId: confirmation.verificationId,
      });
    } catch (err) {
      console.log("Error sending OTP:", err);
      alert("OTP failed — this works fully only in the built app.");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <View style={styles.container}>
        {/* Background Header */}
        <View style={styles.header}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Step Dots */}
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.dotInactive]} />
          <View style={[styles.dot, styles.dotActive]} />
          <View style={[styles.dot, styles.dotInactive]} />
        </View>

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.instruction}>
            Enter your phone number to continue
          </Text>

          {/* Input */}
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Phone number</Text>
            <TextInput
              style={styles.input}
              placeholder="+91XXXXXXXXXX"
              placeholderTextColor="#737373"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          {/* Button */}
          <TouchableOpacity style={styles.button} onPress={sendOTP}>
            <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>

          {/* Footer */}
          <Text style={styles.footerText}>
            By signing up you are accepting to{"\n"}
            <Text style={styles.link}>the Terms & Conditions</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F00001", // ✅ Background applied to SafeAreaView
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    marginTop: 78,
    marginBottom: 40,
    alignItems: "center",
  },
  logo: {
    width: 175,
    height: 106,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
    gap: 8,
  },
  dot: {
    width: 30,
    height: 8,
    borderRadius: 8,
  },
  dotInactive: {
    backgroundColor: "#E5E5E5",
  },
  dotActive: {
    backgroundColor: "#404040",
  },
  card: {
    width: 402,
    height: 632,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    paddingTop: 80,
    paddingHorizontal: 24,
    paddingBottom: 80,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    gap: 24,
  },
  welcome: {
    fontFamily: "FiraSans-SemiBold",
    fontSize: 20,
    fontWeight: "600",
    color: "#404040",
    marginBottom: 8,
  },
  instruction: {
    fontFamily: "FiraSans-Regular",
    fontSize: 12,
    color: "#737373",
    marginBottom: 28,
  },
  inputWrapper: {
    width: "100%",
    marginBottom: 28,
  },
  inputLabel: {
    fontSize: 14,
    color: "#404040",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 36,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D4D4D4",
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#404040",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  button: {
    width: "100%",
    height: 36,
    backgroundColor: "#404040",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  footerText: {
    fontSize: 12,
    color: "#A3A3A3",
    textAlign: "center",
    marginTop: 40,
    lineHeight: 18,
  },
  link: {
    textDecorationLine: "underline",
    color: "#A3A3A3",
  },
});





