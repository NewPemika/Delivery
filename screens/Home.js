

import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {  Image, Text, View , ScrollView, TextInput } from "react-native";
import MostPopular from "../components/MostPopular";
import HomeIconMenu from "../components/HomeIconMenu";


export default function Home() {
    
    return (
        <ScrollView>
            <View style = {{marginTop: 20}}>

                <View style = {{flexDirection: 'row'}}>
                    <View style = {{marginTop: 40 , marginLeft:30}}>
                        <FontAwesome name="bars" size={30} color="grey" />
                    </View>
                    <Text style={{ fontSize : 30 , fontWeight: 'bold' , marginLeft: 30 , marginTop: 35 }}>Home</Text>
                    <View style = {{marginTop: 40 , marginLeft:145 , flexDirection: 'row'}}>
                        <FontAwesome name="heart" size={30} color="red" />
                        <View style = {{marginLeft: 10}}>
                            <MaterialIcons name="shopping-cart" size={30} color="grey" />
                        </View>
                    </View>
                </View>
                
                <ScrollView horizontal = {true} style = {{marginTop : 20}}>
                    <View>
                        <Image style={{ width: 300 , height: 150, borderRadius : 20 , marginLeft : 20}} source ={require('C:/Users/newpe/DeliveryApp/assets/hamburger.jpg')} />
                    </View>
                    <View>
                        <Image style={{ width: 300 , height: 150, borderRadius : 20 , marginLeft: 20 }} source ={require('C:/Users/newpe/DeliveryApp/assets/pizza.jpg')} />
                    </View>
                    <View>
                        <Image style={{ width: 300 , height: 150, borderRadius : 20 , marginLeft: 20 }} source ={require('C:/Users/newpe/DeliveryApp/assets/bonchon.jpg')} />
                    </View>
                    
                </ScrollView>

                <View style = {{flex: 1, marginTop: 20, marginHorizontal: 40, padding: 10, backgroundColor: '#F5F5F5', borderRadius: 20, height: 50, alignItems: 'center' , flexDirection: 'row'}}>
                    <View style = {{marginLeft: 10 , alignSelf: 'flex-start'}}>
                            <MaterialIcons name="search" size={30} color="grey" />
                    </View>
                    <TextInput style={{ fontSize : 15 }} placeholder="Search Product... ?" />

                </View>
                
            {/* <HomeIconMenu/> */}

            <HomeIconMenu/>
            </View>
            <Text style={{ fontSize : 20 , padding: 20 , fontWeight: 'bold', marginTop: 10}}>Most Popular</Text>
            <MostPopular/>
        </ScrollView>

    );
}