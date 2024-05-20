import React, { useEffect, useState, useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GPS from "../helpers/GPS";
import MyMapView from "../components/MyMapView";

export default function Location() {
  const [location, setLocation] = useState(null);
  const navigation = useNavigation();

  // Mock data for restaurants and a driver
  const restaurants = [
    { id: 1, name: 'Restaurant A', latitude: 13.7565, longitude: 100.5019 },
    // Add more restaurant data here
  ];
  const driver = { id: 1, latitude: 13.7568, longitude: 100.5022 }; // Example driver location

  // Fetch current location on component mount
  useEffect(() => {
    const fetchLocation = async () => {
      const currentLocation = await GPS.getCurrentLocation();
      if (currentLocation) {
        setLocation({
          coords: currentLocation.coords,
        });
      }
    };

    fetchLocation();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => alert("Quiz navigation or action")}
          style={{ paddingRight: 20 }}
        >
          <Text>Quiz</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  if (!location) {
    // Show loading spinner if location is not yet fetched
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {/* MyMapView component expects location, restaurants, and driver as props */}
      <MyMapView location={location} restaurants={restaurants} driver={driver} />
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
