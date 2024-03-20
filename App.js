import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import MostPopular from './components/MostPopular';
import BottomTabs from './navigations/BottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeStack from './navigations/HomeStack';
import Fastfood from './components/FastFood';
import HomeIconMenu from './components/HomeIconMenu';

export default function App() {
  return (
    //<Ex12 />
    // <MyIcon/>
    //<PaperProvider>
      //<TestPaper/>
    //</PaperProvider>
    <NavigationContainer>
      <BottomTabs/>
    </NavigationContainer>
    
    
    
    
  );
}