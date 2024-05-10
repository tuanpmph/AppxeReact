import React , {useState, useEffect, useRef} from "react";
import { View, FlatList , StyleSheet,TouchableOpacity, Image, ScrollView, Dimensions, Text, TouchableOpacityBase} from 'react-native';
import SearchBar from "../creencon/SearchBar";
import Tungsanpham from "./Tungsanpha";
const Home = ({navigation})  => {
    const handleSearch = (searchTerm) => {
        // Thực hiện các hành động khi người dùng nhấn nút tìm kiếm
        console.log('Đã tìm kiếm:', searchTerm);
      };
    

    const [currentPage, setCurrentPage] = useState(0);
     const flatListRef = useRef(null);

     const banners = [
    { id: '1', imageSource: require('../image/anhto.jpg') },
    { id: '2', imageSource: require('../image/anhtoo.jpg') },
    { id: '3', imageSource: require('../image/anhtooo.jpg') },
    // Thêm các đối tượng hình ảnh khác nếu cần
     ];

     const products = [
        { id: '1', name: 'Product 1', price: '$19.99',description: 'Lamborghini Aventador SVJ là một kiệt tác đầy ấn tượng, thể hiện sức mạnh và tốc độ đỉnh cao. Được trang bị động cơ V12 6.5 lít, siêu xe này đạt công suất lên đến 770 mã lực, cho phép nó tăng tốc từ 0 đến 100 km/h chỉ trong 2,8 giây. ', imageSource: require('../image/anh copy.jpg') },
        { id: '2', name: 'Product 2', price: '$29.99',description: 'Bugatti Chiron là một biểu tượng của sức mạnh và tốc độ vô song. Được trang bị động cơ W16 quad-turbocharged 8.0 lit, Chiron có công suất lên đến 1.500 mã lực và mô-men xoắn 1.600 Nm. Với hệ thống dẫn động 4 bánh toàn thời gian, Bugatti Chiron có khả năng tăng tốc từ 0 đến 100 km/h chỉ trong khoảng 2,5 giây.', imageSource: require('../image/anh copy.jpg') },
        { id: '3', name: 'Product 3', price: '$39.99',description: 'Ferrari 488 GTB nổi bật với thiết kế động cơ mid-rear và hệ thống truyền động cỡ cánh cổ, mang lại trải nghiệm lái xe đầy hứng khởi và linh hoạt. Hệ thống lái đa hướng và hệ thống treo chủ động giúp cải thiện khả năng vận hành.', imageSource: require('../image/anh copy.jpg') },
        { id: '4', name: 'Product 4', price: '$39.99',description: 'Siêu xe McLaren 720S là một trong những mô hình động cơ trung của hãng xe McLaren, nổi tiếng với hiệu suất cao và thiết kế động cơ mid-rear. Dưới đây là một số thông số kỹ thuật và đặc điểm của McLaren 720S:', imageSource: require('../image/anh copy.jpg') },
        { id: '5', name: 'Product 5', price: '$39.99',description: 'Description 1', imageSource: require('../image/anh copy.jpg') },
        { id: '6', name: 'Product 6', price: '$39.99',description: 'Description 1', imageSource: require('../image/anh copy.jpg') },
        // Thêm các sản phẩm khác nếu cần
      ];

     useEffect(() => {
       const interval = setInterval(() => {
      if (currentPage < banners.length - 1) {
        flatListRef.current.scrollToIndex({ index: currentPage + 1 });
        setCurrentPage((prevPage) => prevPage + 1);
      } else {
        flatListRef.current.scrollToIndex({ index: 0 });
        setCurrentPage(0);
      }
     }, 5000); // 5 giây cho mỗi trang

    return () => clearInterval(interval);
    }, [currentPage, banners.length]);
  
     const renderItem = ({ item }) => (
    <Image source={item.imageSource} style={styles.bannerImage} />
    );

    const handlePageChange = (event) => {
    const { contentOffset } = event.nativeEvent;
    const pageIndex = Math.round(contentOffset.x / Dimensions.get('window').width);
    setCurrentPage(pageIndex);
    };

    const renderItemm = ({ item }) => (
        <TouchableOpacity style={styles.productContainer} onPress={() => tungsanpham(item)  }>
          <Image source={item.imageSource} style={styles.productImage} />
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
        </TouchableOpacity>
      );

    const thongtin = ()=>{
        navigation.navigate('Thong Tin')
    }
    const tungsanpham = (products) =>{
        navigation.navigate('Tung san pham', { products});
    }




  return (
   <ScrollView style={{backgroundColor:'#fff'}}>
     <View style={styles.View}>
       
        <View style={{marginTop:10, marginLeft:10}}>
          <View style={styles.header}>

        <SearchBar onSearch={handleSearch} />

          <View style={{ alignItems:'center'}}>
            <TouchableOpacity onPress={thongtin}>
                <Image source ={require('../image/anh copy.jpg')} style={styles.avata}/>
            </TouchableOpacity>

          </View>
        </View>
     
    </View>
    </View>

    <View style={styles.banner}>
        <FlatList
         ref={flatListRef}
         data={banners}
         renderItem={renderItem}
         keyExtractor={(item) => item.id}
         horizontal
         pagingEnabled
         showsHorizontalScrollIndicator={false}
         onScroll={handlePageChange}
        />
    </View>

  <View style={{alignItems:'center'}}>
    <Text style={styles.text}>𝐍𝐄𝐖 𝐏𝐑𝐎𝐃𝐔𝐂𝐓</Text>
  </View>

  <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItemm}
        keyExtractor={(item) => item.id}
        numColumns={2} // Hiển thị 2 cột
        columnWrapperStyle={styles.row} // Cấu hình style cho từng dòng
      />
    </View>
   </ScrollView>
  );

}

export default Home;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'row',
  
  },
    View:{
        backgroundColor:'#fff',
        alignItems:'stretch',
        alignItems:'center'
    },
    avata:{
        marginTop:15,
        width:55,
        height:55,
        marginLeft:0,
        marginHorizontal:15,
        marginBottom:10,
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
    },
    banner:{backgroundColor:'#fff',
        marginTop:10,
       marginLeft:6,
       width:400,
       height:250,
    },
    bannerImage:{
        resizeMode:'cover',
        height:250,
        width:400,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    text:{
      fontFamily:'lato',
        color:'#FF0000',
        fontSize:30,
        fontWeight:'bold',
        marginTop:10
    },
    container: {
        flex: 1,
        padding: 0,
      },
      row: {
        flex: 1,
        justifyContent: 'space-between',
      },
      productContainer: {
        flex: 1,
        margin: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
      },
      productImage: {
        width: 170,
        height: 160,
        borderRadius: 10,
        marginBottom: 10,
      },
      productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      productPrice: {
        fontSize: 14,
        color: '#888',
      },

    
   

});