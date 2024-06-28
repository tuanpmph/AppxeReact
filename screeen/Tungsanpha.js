import React, {useRef} from 'react';
import { View, Text, Image , StyleSheet, ScrollView,Animated} from 'react-native';


const Tungsanpham = ({ route }) => {
  const { homeAPI } = route.params;
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: true,
      listener: (event) => {
        console.log(event.nativeEvent.contentOffset.y); // Kiểm tra log để xác nhận giá trị scrollY
      },
    }
  );
  const opacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <ScrollView  style={{ flex: 1 }}
          onScroll={handleScroll}
          scrollEventThrottle={16}>
        <Animated.View style={[styles.animatedView, { opacity }]}>
          <Image source={{ uri: homeAPI.avatar }} style={styles.productImage} />
          <Text style={styles.productName}>{homeAPI.name}</Text>
          <Text style={styles.productPrice}>{homeAPI.price}$</Text>
          <Text style={styles.productDescription}>{homeAPI.thongtin}</Text>
        </Animated.View>
      </ScrollView>
      
   
            
    </View>
  );
};

export default Tungsanpham;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  animatedView: {
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'lato',  // Sử dụng font "Lato"
  },
  productPrice: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
    fontFamily: 'lato',  // Sử dụng font "Lato"
  },
  productDescription: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: 'lato',  // Sử dụng font "Lato"
  },
});
