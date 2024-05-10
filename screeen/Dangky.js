import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const Dangky = (navigation)  => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');


    const handleHome = () => {
        navigation.navigate('Main')
    };

    return(
        <View style={styles.view}>
            <Image source={require('../image/anh copy.jpg')} style={styles.anh}/>
            <View style={styles.view2}>
            <View style={styles.inputContainer}>
                <Icon name="email" size={20} color="gray"/>
                <TextInput style={styles.input}
                   placeholder="Email"
                   value={email}
                   onChange={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="phone" size={20} color="gray"/>
                <TextInput  style={styles.input}
                   placeholder="Phone"
                   value={phone}
                   onChange={setPhone}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="key" size={20} color="gray"/>
                <TextInput  style={styles.input}
                   placeholder="Password"
                   value={password}
                   secureTextEntry={true}
                   onChange={setPassword}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="key" size={20} color="gray"/>
                <TextInput  style={styles.input}
                   placeholder="Password"
                   value={passwordTwo}
                   secureTextEntry={true}
                   onChange={setPasswordTwo}
                />
            </View>
            </View>

            <View>
                <TouchableOpacity style={styles.bottom}>
                    <Text style={styles.bottomText}>Đăng Ký</Text>
                </TouchableOpacity>
            </View>
        </View>


    );
 
};

export default Dangky;

const styles = StyleSheet.create({
    view:{
        backgroundColor:'#F5F5F5',
        flex:1,
        alignItems:'center'
    },
    anh:{
        width:150,
        height:150,
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
        marginTop:50
    },
    input:{
        marginLeft:10,
        height:40,
        width:300

    },
    bottomText:{
        color:'black',
        marginTop:10,
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'

    },
    bottom:{
        backgroundColor:'#F6B9B9',
        marginTop:70,
        borderRadius:15,
        width:150,
        height:50,
        alignItems:'center',

    },
     view2:{
        marginTop:30

     },
      inputContainer:{
        backgroundColor:'#F6B9B9',
        marginTop:35,
        width:350,
        height:50,
        flexDirection:'row',
        alignItems:'center',
        borderColor:'gray',
        borderRadius:10,
        paddingLeft:8
      }

    

});