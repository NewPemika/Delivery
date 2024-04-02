import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import MyIcon from './MyIcons';
// import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';


export default function HomeIconMenu() {
    const navigation = useNavigation();
        return (
            // <ScrollView horizontal = {true}  style = {{alignContent: 'space-between'}}>
                <View style={{marginHorizontal : 20 , marginTop : -50 , padding : 20, borderWidth : 1, borderColor : 'gray', borderRadius : 20, backgroundColor : 'white'}}>


                    <View style={{ flexDirection : "row", marginTop : 10 , justifyContent : "space-around" }}>
                        <View style={{alignItems: 'center'}}>
                            <MaterialCommunityIcons name="noodles" size={20} color="black" onPress={()=>{ navigation.navigate("Noodles"); }} />    
                            <Text style={{paddingTop: 5}}>Noodles</Text>
                        </View>

                        <View style={{alignItems: 'center'}}>
                            <FontAwesome6 name="bowl-rice" size={20} color="black" onPress={()=>{ navigation.navigate("RiceBowls"); }}  />
                            <Text style={{paddingTop: 5}}>Rice Bowls</Text>
                        </View>

                    
                        
                        <View style={{alignItems: 'center'}}>
                            <Ionicons name="fast-food" size={20} color="black" onPress={()=>{ navigation.navigate("FastFoods"); }}/>
                            <Text style={{paddingTop: 5}}>Fast Food</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection : "row", marginTop : 10 , justifyContent : "space-around" }}>

                        <View style={{alignItems: 'center'}}>
                            <MaterialCommunityIcons name="cupcake" size={20} color="black" onPress={()=>{ navigation.navigate("Desserts"); }} />
                            <Text style={{paddingTop: 5}}>Dessert</Text>
                        </View>

        

                        <View style={{alignItems: 'center'}}>
                            <FontAwesome style={{ }} name="glass" size={20} color="black" onPress={()=>{ navigation.navigate("Drinks"); }} />
                            <Text style={{paddingTop: 5}}>Drinks</Text>
                        </View>

                        <View style={{alignItems: 'center'}}>
                            <MaterialCommunityIcons name="fruit-citrus" size={20} color="black" onPress={()=>{ navigation.navigate("Healthy"); }}/>
                            <Text style={{paddingTop: 5}}>Healthy </Text>

                        

                        </View>
                        
                    </View>

                    
                </View>
            // </ScrollView>
            
            
        );
}