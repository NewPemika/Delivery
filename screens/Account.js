import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from "react-native";

export default function Account() {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to manage loading indicator

  const simulateSignUp = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "User registered successfully." });
      }, 2000); // Simulate network delay
    });
  };

  const handleSignIn = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Password Mismatch", "Your passwords do not match. Please try again.");
      return;
    }
    
    setIsLoading(true); // Show loading indicator
    try {
      // Simulate sign-up process
      const response = await simulateSignUp();
      Alert.alert("Success", response.message);
      // Here, you would handle the success scenario, perhaps navigating to a different screen.
    } catch (error) {
      // Handle any errors that occur during sign-up
      Alert.alert("Error", "An error occurred during sign-up. Please try again later.");
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Full Name" placeholderTextColor="#888" />
      <TextInput style={styles.input} onChangeText={setPhoneNo} value={phoneNo} placeholder="Phone Number" keyboardType="phone-pad" placeholderTextColor="#888" />
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email Address" keyboardType="email-address" autoCapitalize="none" placeholderTextColor="#888" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry={true} placeholderTextColor="#888" />
      <TextInput style={styles.input} onChangeText={setConfirmPassword} value={confirmPassword} placeholder="Confirm Password" secureTextEntry={true} placeholderTextColor="#888" />
      
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f7f7f7", // Light grey background
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#333",
    marginBottom: 40,
    textAlign: "center",
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  button: {
    height: 50,
    backgroundColor: "#5cb85c", // Bootstrap success color
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#5cb85c",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
});
