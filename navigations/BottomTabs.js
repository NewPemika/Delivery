import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from "@expo/vector-icons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Search from '../screens/Search';
import Payment from '../screens/Location';
import Account from '../screens/Account';
import Home from '../screens/Home';
import Delivery from '../screens/Location';
import Location from '../screens/Location';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray' }} >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "Main",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="home" color={color} size={size} /> ),
              headerShown : false,
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: "Search",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="search" color={color} size={size} /> ),
              headerShown : false
            }}
          />
          <Tab.Screen
            name="Location"
            component={Location}
            options={{
              tabBarLabel: "Delivery",
              tabBarIcon: ({ color, size }) => ( <MaterialIcons name="delivery-dining" color={color} size={size}/> ),
              headerShown : false
            }}
          />
          <Tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarLabel: "Account",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="user" color={color} size={size} /> ),
              headerShown : false
            }}
          />
        </Tab.Navigator>
      );
    


}