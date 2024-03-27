import React from 'react';
import { View, Image, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function Search() {

    return (
        <View style = {{ marginTop: 20, marginHorizontal: 40, padding: 10, backgroundColor: '#F5F5F5', borderRadius: 20, height: 50, alignItems: 'center' , flexDirection: 'row'}}>
                    <View style = {{marginLeft: 10 , alignSelf: 'flex-start'}}>
                        <MaterialIcons name="search" size={30} color="grey" />
                    </View>
                    <TextInput style={{ fontSize : 15 }} placeholder="Search Product... ?" />

        </View>
    );
}