import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/base';
import styles from '../styles/UserSearchBarStyles';

const UserSearchBar = ({addMembersUsingEmail}) => {
    const [searchText, setSearchText] = useState('');
    function searchUser (){
        addMembersUsingEmail(searchText)
    }
    return (
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Add Members"
          style={styles.input}
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
        <TouchableOpacity onPress={searchUser}>
        <Icon name="search" size={40} color="#f27575" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
    );
  };

export default UserSearchBar