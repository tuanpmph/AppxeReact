import React, { useState } from 'react';
import { SearchBar as RNESearchBar } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (text) => {
    setSearchTerm(text);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <>
    
    <RNESearchBar
      placeholder="Nhập từ khóa..."
      onChangeText={handleChange}
      value={searchTerm}
      onEndEditing={handleSearch} 
      inputContainerStyle={{
        backgroundColor: '#FAEFEF',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        borderRadius: 30,
        width:335 ,
        
      }}
       containerStyle={{ backgroundColor: '#fff', borderBottomWidth: 0, borderTopWidth: 0, borderRadius:50, height:60}}
      inputStyle={{ color: '#FAEFEF' }}
      searchIcon={{ size: 24, borderRadius: 20 }}
    />
   
    </>
  );
};

export default SearchBar;

const styles = StyleSheet.create({


});