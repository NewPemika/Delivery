import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import Noodles from '../screens/Noodles';
import RiceBowls from '../screens/RiceBowls';
import Fastfood from '../screens/FastFood';
import Desserts from '../screens/Desserts';
import Drinks from '../screens/Drinks';
import Healthy from '../screens/Healthy';


const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home"> 
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "Home", headerShown: false }}
            />
            <Stack.Screen
                name="Noodles"
                component={Noodles}
                options={{ title: "Noodles" }}
            />
            <Stack.Screen
                name="RiceBowls"
                component={RiceBowls}
                options={{ title: "Rice Bowls" }}
            />
            <Stack.Screen
                name="FastFood"
                component={Fastfood}
                options={{ title: "Fast Food" }}
            />
            <Stack.Screen
                name="Desserts"
                component={Desserts}
                options={{ title: "Desserts" }}
            />
            <Stack.Screen
                name="Drinks"
                component={Drinks}
                options={{ title: "Drinks" }}
            />
            <Stack.Screen
                name="Healthy"
                component={Healthy}
                options={{ title: "Healthy" }}
            />
        </Stack.Navigator>
    );
}
