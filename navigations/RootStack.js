import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Noodles from "../screens/Noodles";
import RiceBowls from "../screens/RiceBowls";
import Fastfood from "../screens/FastFoods";
import Desserts from "../screens/Desserts";
import Drinks from "../screens/Drinks";

import BottomTabs from "../navigations/BottomTabs";
import FastFoods from "../screens/FastFoods";
import Delivery from "../screens/Location";


const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTabs">
      <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Noodles" component={Noodles}/>
      <Stack.Screen name="RiceBowls" component={RiceBowls} />
      <Stack.Screen name="FastFoods" component={FastFoods} />
      <Stack.Screen name="Desserts" component={Desserts} />
      <Stack.Screen name="Drinks" component={Drinks} />
      <Stack.Screen name="Delivery" component={Delivery} />

      
      {/* <Stack.Screen name="Fastfood" component={Fastfood} /> */}

    </Stack.Navigator>
  );
}