import React, { useEffect, useState } from "react";
import { Button, FlatList, Image, Text, TextInput } from "react-native";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Desserts(props) {
    const [onlineDesserts, setOnlineDesserts] = useState([]);   

    const loadOnlineDesserts = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/NewPemika/Delivery/master/Dessert.json');
            let data = await promise.json();
            console.log("Load Data : " , data);
          //SET STATE
            setOnlineDesserts(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }  

    useEffect(() => {
        loadOnlineDesserts();
    }, []);
    
return (
    
        <View style={{flex:1}}>
            <View style={props.style}>          

                {/* <Text style={{ fontSize: 28, fontWeight: 'bold', padding: 50, alignSelf: 'center'}}>Fastfood</Text> */}
                
                <View style={{alignSelf: 'center', borderColor: 'grey',flexDirection : "row", borderRadius: 20, width: 300, height: 50, borderWidth: 1, justifyContent: 'center',alignItems: 'center',marginTop: 35}}>
                    <FontAwesome style={{}} name="search" size={20} color="black" />
                    <TextInput style={{ fontSize : 10, color : 'gray' }}> Search </TextInput>
                </View>



                <FlatList
                horizontal={false}
                data={onlineDesserts}
                renderItem={({ item, index }) => {
                    console.log(item, index, item.uri, item.price);
                    return (
                    <View style={{ marginLeft: 20, marginTop: 20, width: 350 , borderRadius: 20, borderWidth: 0.5, backgroundColor: 'white', flexDirection: 'row' }}>
                        <Image style={{ width: 150, height: 150, borderRadius: 10, alignSelf: 'center', marginTop: 10 }} source={{ uri: item.uri }} />
                        <View style={{ padding: 10, justifyContent: 'space-around' , padding: 10 }}>
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
        </View>
    );
}
