import React, { useState } from 'react';
import { View, Text, TextInput,TouchableOpacity,Image, StyleSheet } from 'react-native';
import { Input, Icon } from "react-native-elements";
import { BackgroundImage } from 'react-native-elements/dist/config';


const Login  = ({navigation}) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () =>{
        navigation.navigate('Home')
    } ;

    const dangky = () =>{
        navigation.navigate('Dang Ky')
    }

    const quenmk = () =>{
        navigation.navigate('Quen Mat Khau')
    }


    return(
       <View style={styles.view}>
        <Image source={require('../image/anh copy.jpg')} style={styles.logo}/>

       <View style={styles.container}>
         <View style={styles.inputContainer}>
        <Icon name="email" size={20} color="gray"  />
            <TextInput style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            />
        </View>
        <View style={styles.inputContainer}>
        <Icon name="key" size={20} color="gray"  />
        <TextInput style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
       />
        </View>
       </View>
       <View>
       <TouchableOpacity style={styles.buton} onPress={handleLogin}>
          <Text style={styles.bottomText}>Đăng Nhập</Text>
        </TouchableOpacity>
        <View style={styles.dangky}>
        <TouchableOpacity style={styles.chu} onPress={dangky}>
          <Text style={styles.bottomText}>Đăng Ký</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chu} onPress={quenmk}>
          <Text style={styles.bottomText}> | Quyên Mật Khẩu</Text>
        </TouchableOpacity>
        </View>
       </View>
   </View>
        
        
    )
}



export default Login;

const styles = StyleSheet.create({ 
    view:{
        marginTop:50,
        flex:1,  
        alignItems:'center',
        backgroundColor:'#F5F5F5'
    },
    buton:{
        backgroundColor:'#F6B9B9',
        margin: 50,
        borderRadius:15,
        width:150,
        height:50,
        alignItems:'center',
        padding:'auto',
        
       
    },
    logo:{
        width:200,
        height:200,
        marginBottom: 50,
        marginRight: 10,
        marginLeft:10,
        marginTop:100,
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
        marginEnd:50

    }, 
    bottomText:{
        color:'black',
        marginTop:10,
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    },
    container: {
        marginTop:80,
        padding: 16,
      },
    inputContainer: {
        backgroundColor:'#F6B9B9',
        marginTop:20,
        width:350,
        height:50,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: 'gray',
        borderRadius: 8,
        paddingLeft: 10,
      },
      input: {
        marginLeft:10,
        height: 40,
        width:300
      },
      dangky: {
        flexDirection: 'row', // Đặt hướng của layout thành "row"
        justifyContent: 'space-between', // Canh các phần tử theo chiều ngang với khoảng trống giữa chúng
        paddingHorizontal: 16, // Khoảng trống ngang ở hai bên
        marginTop: 20, // Khoảng cách từ top
      },
      chu: {
        color: 'white',
      },

})