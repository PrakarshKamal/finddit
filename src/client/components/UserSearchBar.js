import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/base';
import styles from '../styles/accountScreenStyles';

const UserSearchBar = () => {
    const [searchText, setSearchText] = useState('');
    function searchUser (){
        console.log(searchText)
    }
    return (
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search..."
          style={styles.input}
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
        <TouchableOpacity onPress={searchUser}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
    );
  };

export default UserSearchBar