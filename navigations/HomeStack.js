import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';



const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home"> 
            <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" , headerShown: false }}
            />
          {/* <Stack.Screen
            name="Ex01"
            component={Ex01} //สำคัญ!! ต้อง  import component ในบรรทัด component 
            options={{ title: "Exercise 1" }} //ใช้ปรับแต่ง
          />       */}

            <Stack.Screen
            name="Travel"
            component={Travel}
            options={{ title: "Travel" }}
          />
            <Stack.Screen
                name="Resort"
                component={Resort}
                options={{ title: "Resort" }}
            />
            <Stack.Screen
                name="Health"
                component={Health}
                options={{ title: "Health" }}
            />


          
        </Stack.Navigator>
      );      
      
        
     
  
}
