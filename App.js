import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Manhinhchao from './screeen/Manhinhchao';
import Login from './screeen/Login';
import Home from './screeen/Home';
import Dangky from './screeen/Dangky';
import Quenmk from './screeen/Quenmk';
import Thongtin from './screeen/Thongtin';
import Tungsanpham from './screeen/Tungsanpha';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Manhinhchao' headerMode="none">
        <Stack.Screen name='Manhinhchao' component={Manhinhchao} options={{headerShown: false}}/>
        <Stack.Screen name='Main' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Dang Ky' component={Dangky}/>
        <Stack.Screen name='Quen Mat Khau 1' component={Quenmk}/>
        <Stack.Screen name='Thong Tin' component={Thongtin}/>
        <Stack.Screen name='Tung san pham' component={Tungsanpham}/>
      </Stack.Navigator>
    </NavigationContainer>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
