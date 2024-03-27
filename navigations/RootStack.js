import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Noodles from "../screens/Noodles";
import RiceBowls from "../screens/RiceBowls";
import Fastfood from "../screens/FastFood";
import Desserts from "../screens/Desserts";
import Drinks from "../screens/Drinks";
import Healthy from "../screens/Healthy";
import BottomTabs from "../navigations/BottomTabs";


const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTabs">
      <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Noodles" component={Noodles}/>
      <Stack.Screen name="RiceBowls" component={RiceBowls} />
      <Stack.Screen name="FastFoods" component={Fastfood} />
      <Stack.Screen name="Desserts" component={Desserts} />
      <Stack.Screen name="Drinks" component={Drinks} />
      <Stack.Screen name="Healthy" component={Healthy} />
      {/* <Stack.Screen name="Fastfood" component={Fastfood} /> */}

    </Stack.Navigator>
  );
}