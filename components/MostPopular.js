import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Button, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export default function MostPopular(props) { 

    const [coreMostPopular , setCorePopular] = useState ([]);

    const loadCorePopular = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/NewPemika/Delivery/master/MostPopular.json');
            let data = await promise.json();
            console.log("Load Data : " , data);
          //SET STATE
            setCorePopular(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }  

    useEffect(() => {
        loadCorePopular();
    }, []);

    const onPressButton = () => {
        console.log("");
        };


    return (
            <View>
                
                <FlatList
                    horizontal={true}
                    data={coreMostPopular}
                    renderItem={({ item, index }) => {
                        console.log(item, index, item.uri, item.price);
                        return (
                        <View style={{ marginLeft: 20, marginTop: 20, width: 200, borderRadius: 20, borderWidth: 0.5, backgroundColor: 'white' }}>
                            <Image style={{ width: 150, height: 150, borderRadius: 10, alignSelf: 'center', marginTop: 10 }} source={{ uri: item.uri }} />
                            <View style={{ padding: 10, alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, color: "black", fontWeight: 'bold' }}>{item.name}</Text>
                                <Text style={{ fontSize: 16, color: "black" }}>{item.price}</Text>
                                <Text style={{ fontSize: 14, color: "red" }}>{item.discount}</Text>
                            </View>
                        </View>
                        );
                    }}
                    keyExtractor={(item, index) => String(index)}
                    />

                






                
                

            </View>





    );
}