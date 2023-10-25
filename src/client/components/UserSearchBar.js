import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/base';
import styles from '../styles/UserSearchBarStyles';

const UserSearchBar = ({searchUser, hideResults, searchResultsShown}) => {
    const [searchText, setSearchText] = useState('');

    function onSearchtextChange(text){
      setSearchText(text)
      hideResults()
    }

    function clearText(){
      setSearchText(null)
      hideResults()
    }
    async function searchThisUser (){
      await  searchUser(searchText)
    }
    return (
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Add Members"
          style={styles.input}
          onChangeText={(text) => onSearchtextChange(text)}
          value={searchText}
        />
        {!searchResultsShown ? 
        <TouchableOpacity onPress={searchThisUser}>
           <Icon name="search" size={40} color="#f27575" style={styles.searchIcon} />
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={clearText}>
           <Icon name="cancel" size={40} color="#f27575" style={styles.searchIcon} /> 
        </TouchableOpacity>}
      </View>
    );
  };

export default UserSearchBar