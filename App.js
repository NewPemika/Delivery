import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStack from './navigations/RootStack';


export default function App() {
  return (
    //<Ex12 />
    // <MyIcon/>
    //<PaperProvider>
      //<TestPaper/>
    //</PaperProvider>
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
    
    
    
  );
}