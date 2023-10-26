import { View, Text, TouchableOpacity, FlatList, Modal, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import UserSearchBar from '../../components/UserSearchBar'
import ProfileIcon from '../../components/ProfileIcon'
import styles from '../../styles/AddUsersStyles'
import { findUserByEmailOrName } from '../../utils/api_function_calls/user_functions'
import SearchResultItem from '../../components/SearchResultItem'

const AddUsers = ({route , navigation}) => {
    const { groupName, groupIcon } = route.params;
    const [groupMembers, setGroupMembers] = useState([])
    const [resultDropdownShown , setResultDropdownShown] = useState(false)
    const [searchResult, setSearchResult] = useState([])
    function handleNextButtonPressed () {
        if (groupMembers.length !== 0){
          navigation.navigate("GroupPreferences" , {groupName , groupIcon , groupMembers})
        }else {
          alert("Add alteast 1 user")
        }
      }
      async function searchUser (input){
        const response = await findUserByEmailOrName(input)
        console.log("users",response)
        setSearchResult(response)
        setResultDropdownShown(true)
      }
    function addMember(user) {
        if (!groupMembers.some(existingUser => existingUser.email === user.email)){
          let temp = groupMembers
          temp.push(user)
          setGroupMembers(temp)
          setResultDropdownShown(false)
        }else{
            alert("User Already exists")
        }
        console.log(groupMembers)
    }
    function removeUser(email) {
        let temp = groupMembers.filter(user => user.email !== email)
        setGroupMembers(temp)
    }
  
    // Render individual icons in the grid
  const renderIconItem = ({ item }) => (
    <ProfileIcon user ={item} removeUser={removeUser} /> 
  );

  const renderResultItem = ({ item }) => (
    <TouchableOpacity onPress={() => addMember(item)}>
      <SearchResultItem item={item}></SearchResultItem>
    </TouchableOpacity>
  );

  function hideResults (){
    setResultDropdownShown(false)
    setSearchResult([])
  }
  return (
    <View style={{display:'flex', flex:1 , alignContent:'center' , alignItems:'center'}}>
        <Text>
            {groupName}
        </Text>
      <UserSearchBar searchUser ={searchUser} hideResults={hideResults} searchResultsShown={resultDropdownShown} ></UserSearchBar>
     
         
      { resultDropdownShown ? 
      <View>
        <View>
      {searchResult.length > 0 ? <Text> Search Results </Text> : <Text> No user found</Text>}
     </View>
      <FlatList
      data={searchResult}
      renderItem={renderResultItem}
      /> 
      </View> : null }

      <FlatList
        data={groupMembers}
        renderItem={renderIconItem}
        numColumns={3} // Adjust the number of columns as needed
        contentContainerStyle={styles.iconGrid}
      />
      <TouchableOpacity  style={styles.nextButton} onPress={handleNextButtonPressed}>
            <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddUsers