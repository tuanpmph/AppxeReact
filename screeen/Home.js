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
    const [home,setHome] = useState([]);
     const flatListRef = useRef(null);
     

     const banners = [
    { id: '1', imageSource: require('../image/anhto.jpg')},
    { id: '2', imageSource: require('../image/anhtoo.jpg') },
    { id: '3', imageSource: require('../image/anhtooo.jpg') },
    // Thêm các đối tượng hình ảnh khác nếu cần
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
    

    

    const thongtin = ()=>{
        navigation.navigate('Thong Tin')
    }
    const tungsanpham = ( homeAPI ) =>{
        navigation.navigate('Tung san pham', { homeAPI });
    }



    useEffect(() =>{
      homeAPI();
    },[]);

    const homeAPI = async () =>{
     try{
      const response = await fetch('https://646f2b9709ff19b12086b863.mockapi.io/home');
      const data = await response.json();
      setHome(data)
     }catch(error){
      console.log(error);
     }
    }




  return (
   <ScrollView style={{backgroundColor:'#fff', marginLeft:0}}>
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

    <View style={styles.banner2}>
                    <FlatList
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        data={home}
                        renderItem={({item}) => 
                          <View style={styles.producviewchay2}>
                        <TouchableOpacity style={styles.productContainer2} onPress={() => tungsanpham(item)  }>
                          <Image source={{uri:item.avatar}} style={styles.productImage2} />
                          <Text style={styles.productName2}>{item.name}</Text>
                          <Text style={styles.productPrice2}>{item.price}$</Text>
                        </TouchableOpacity>
                      </View>}
            
                        keyExtractor={(item) => item.id}
                    />
                </View>

    <View style={styles.banner}>
        <FlatList
        scrollEnabled={false}
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
       scrollEnabled={false}
        data={home} //// đây nhé dât day nhé
        renderItem={({item})=>
        <View>
          <TouchableOpacity style={styles.productContainer} onPress={() => tungsanpham(item)  }>
            <Image source={{uri:item.avatar}} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}$</Text>
          </TouchableOpacity>
        </View>}
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
   
    bannerImage:{
        resizeMode:'cover',
        height:250,
        width:415,
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
        width: 140,
        height: 160,
        borderRadius: 10,
        marginBottom: 10,
      },
      productName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      productPrice: {
        fontSize: 14,
        color: '#888',
      },
      banner: {
        backgroundColor: '#fff',
        marginTop: 1,
        marginLeft: 5,
        marginRight:5,
        width: Dimensions.get('window').width,
        height: 250,
    },
    banner2: {
      backgroundColor: '#fff',
      marginTop: -10,
      marginLeft: 0,
      height:200,
  },
  productContainer2: {
    alignItems:'center',
    flex: 1,
    width:100,
    height: 80,
    margin: 3,
    backgroundColor: '#FFDADA',
    borderRadius: 10,
    padding: 6,
    alignItems: 'center',
  },
  productImage2: {
    width: 90,
    height: 110,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName2: {
    alignItems:'center',
    width:80,
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign:'center'
  },
  productPrice2: {
    borderRadius:5,
    backgroundColor:'red',
    fontSize: 12,
    width:85,
    color: '#fff',
    
    textAlign:'center'
  },
  producviewchay2:{
    backgroundColor: '#fff'

  }

    
   

});