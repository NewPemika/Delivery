// GPS.js
import * as Location from 'expo-location';

const requestPermissionsAsync = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.log('Permission to access location was denied');
    return false;
  }
  return true;
};

const getCurrentLocation = async () => {
  const hasPermission = await requestPermissionsAsync();
  if (!hasPermission) return;

  try {
    let location = await Location.getCurrentPositionAsync({});
    return location;
  } catch (error) {
    console.error('Error getting location', error);
  }
};

export default {
  getCurrentLocation
};
