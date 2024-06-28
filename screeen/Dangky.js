import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert , Button} from "react-native";
import { Icon } from "react-native-elements";

const Dangky = ({navigation})  => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    // const [passwordTwo, setPasswordTwo] = useState('');


    const handleDangky = async () => {


        if (!name || !email || !phone || !password ) {
            Alert.alert('Error', 'Vui lòng điền vào tất cả các trường!');
            return;
          }

        // if(password !== setPasswordTwo){
        //     Alert.alert('Error!' , 'Mat khau ko khop');
        //     return;
        // }
        
        console.log('Registering with:', {name, email, phone, password });


        try {
            const response = await axios.post('https://646f2b9709ff19b12086b863.mockapi.io/dangky', {
              name: name,
              email: email,
              phone: phone,
              password: password,
            });
            if (response.status === 201) {
              Alert.alert('Success', 'Đăng ký thành công', [
                { text: 'OK', onPress: () => navigation.navigate('Main') }
              ]);
            } else {
              Alert.alert('Error', 'Đăng ký không thành công');
            }
          } catch (error) {
            Alert.alert('Error', 'Đã xảy ra lỗi trong quá trình đăng ký');
          }
    };
    useEffect(() =>{
        handleDangky();
      } ,[]);

    return(
        <View style={styles.view}>
            <Image source={require('../image/anh copy.jpg')} style={styles.anh}/>
            <View style={styles.view2}>

            <View style={styles.inputContainer}>
                <Icon name="person" size={20} color="gray"/>
                <TextInput style={styles.input}
                   placeholder="Name"
                   value={name}
                   onChangeText={setName}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="email" size={20} color="gray"/>
                <TextInput style={styles.input}
                   placeholder="Email"
                   value={email}
                   onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="phone" size={20} color="gray"/>
                <TextInput  style={styles.input}
                   placeholder="Phone"
                   value={phone}
                   onChangeText={setPhone}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="key" size={20} color="gray"/>
                <TextInput  style={styles.input}
                   placeholder="Password"
                   value={password}
                   secureTextEntry={true}
                   onChangeText={setPassword}
                />
            </View>

            {/* <View style={styles.inputContainer}>
                <Icon name="key" size={20} color="gray"/>
                <TextInput  style={styles.input}
                   placeholder="Password"
                   value={passwordTwo}
                   secureTextEntry={true}
                   onChange={setPasswordTwo}
                />
            </View> */}
            </View>

            <View>
                <TouchableOpacity style={styles.bottom} onPress={handleDangky}>
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