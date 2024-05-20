// MyMapView.js
import React from 'react';
import { View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MyMapView = ({ location, driver }) => {
  // Mock restaurant data
  const restaurants = [
    { id: 1, name: 'Sushi Place', latitude: 13.736717, longitude: 100.523186 }, // Central Bangkok
    // 
     // Siam Area
    { id: 3, name: 'Curry Corner', latitude: 13.721435, longitude: 100.791532 }, // Eastern Bangkok
    { id: 4, name: 'Italian Pasta', latitude: 13.794255, longitude: 100.327122 }, // Northern Bangkok
    { id: 5, name: 'Taco Spot', latitude: 13.682212, longitude: 100.351929 }, // Western Bangkok
    { id: 6, name: 'Seafood Delight', latitude: 13.599096, longitude: 100.599502 }, // Near Suvarnabhumi Airport
    { id: 7, name: 'Vegan Diner', latitude: 13.746535, longitude: 100.532752 }, // Sukhumvit Area
    { id: 8, name: 'BBQ Heaven', latitude: 13.810488, longitude: 100.537132 }, // Chatuchak Area
    { id: 9, name: 'Salad Station', latitude: 13.708759, longitude: 100.502075 }, // South Bangkok
    { id: 10, name: 'Burger Joint', latitude: 13.777254, longitude: 100.556853 }, // Victory Monument
    { id: 11, name: 'Pho Real', latitude: 13.780401, longitude: 100.445833 }, // Western Bangkok
    { id: 12, name: 'Dumpling Den', latitude: 13.851993, longitude: 100.561175 }, // Don Mueang Area
    { id: 13, name: 'Steakhouse Central', latitude: 13.746008, longitude: 100.534027 }, // Central World
    { id: 14, name: 'Ramen Roadhouse', latitude: 13.730778, longitude: 100.515354 }, // Patpong Area
    { id: 15, name: 'Indian Indulgence', latitude: 13.723419, longitude: 100.476232 }, // Near ICONSIAM
    { id: 16, name: 'Tapas Tavern', latitude: 13.703652, longitude: 100.493087 }, // Charoen Krung
    { id: 17, name: 'Pancake Podium', latitude: 13.722317, longitude: 100.530100 }, // Thong Lo
    { id: 18, name: 'Waffle Wonderland', latitude: 13.736033, longitude: 100.560159 }, // Si Lom
    { id: 19, name: 'Espresso Emporium', latitude: 13.717931, longitude: 100.521205 }, // Rama III
    { id: 20, name: 'Cake Castle', latitude: 13.722982, longitude: 100.525492 }, // Asiatique
  ];
  

  const { width, height } = Dimensions.get('window');

  return (
    <MapView
      style={{ width: width, height: height }}
      initialRegion={{
        latitude: location ? location.coords.latitude : 13.7563,
        longitude: location ? location.coords.longitude : 100.5018,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
    >
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.id.toString()}
          coordinate={{
            latitude: restaurant.latitude,
            longitude: restaurant.longitude,
          }}
          title={restaurant.name}
        >
          <FontAwesome5 name="utensils" size={24} color="orange" />
        </Marker>
      ))}
      {driver && (
        <Marker
          coordinate={{
            latitude: driver.latitude,
            longitude: driver.longitude,
          }}
          title="Driver"
        >
          <MaterialIcons name="delivery-dining" size={30} color="blue" />
        </Marker>
      )}
    </MapView>
  );
};

export default MyMapView;
