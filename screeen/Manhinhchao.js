import React from "react";
import { useEffect, useState } from "react";
import { Image, View, StyleSheet , Text, TextInput, Dimensions} from "react-native";

import { useNavigation } from "@react-navigation/native";
const Manhinhchao = () =>{
    const navigation =  useNavigation();

    useEffect(() =>{
        setTimeout(() =>{
            navigation.replace('Main');
        }, 3000);

    }, []);

    return(
        <View style={styles.css}>
            <Image style={styles.csss} source={require('../image/image.png')} resizeMode="cover"/>
            <View style={styles.khung}>
            <Text style={styles.text}>Mèo Đen</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    css:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'
    },
    csss:{
        marginTop:60,
        width: 300, //Dimensions.get('window').width, // Sử dụng chiều rộng toàn màn hình
        height: 300 //Dimensions.get('window').height, // Sử dụng chiều cao toàn màn hình
    },
    khung:{
        marginTop:200,
        backgroundColor:'#F6B9B9',
        margin: 50,
        borderRadius:25,
        width:250,
        height:60,
        alignItems:'center',
        padding:'auto'
    },
    text:{
        color:'#F12121',
        marginTop:10,
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold'
    }
})

export default Manhinhchao;