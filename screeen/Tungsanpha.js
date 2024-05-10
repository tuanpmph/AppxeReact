import React from 'react';
import { View, Text, Image , StyleSheet} from 'react-native';


const Tungsanpham = ({ route }) => {
  const { products } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image source={products.imageSource} style={styles.image} />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }}>{products.name}</Text>
      <Text style={styles.text}>{products.description}</Text>
      <Text style={styles.text2}>{products.price}</Text>
    </View>
  );
};

export default Tungsanpham;

const styles = StyleSheet.create({
  image:{
    marginTop:20,
    width: 400,
    height: 400,
    borderRadius: 10
  },
  text:{
    width:380,
    fontSize:20,

  },
  text2:{
    marginTop: 60,
    fontSize: 30,
    color:'green'
  }
});
