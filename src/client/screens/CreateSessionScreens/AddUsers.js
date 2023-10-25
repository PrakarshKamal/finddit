import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import UserSearchBar from '../../components/UserSearchBar'
import ProfileIcon from '../../components/ProfileIcon'
import styles from '../../styles/AddUsersStyles'
import { findUserByEmailOrName } from '../../utils/api_function_calls/user_functions'

const AddUsers = ({route , navigation}) => {
    const { groupName, groupIcon } = route.params;
    const [groupMembers, addGroupMembers] = useState([])
    function handleNextButtonPressed () {
        if (groupMembers.length !== 0){
          navigation.navigate("GroupPreferences" , {groupName , groupIcon , groupMembers})
        }else {
          alert("Add alteast 1 user")
        }
      }
    function addMembersUsingEmail (username) {
        console.log(username)
        console.log(findUserByEmailOrName(username))
        if (true){
            addGroupMembers([...groupMembers , { id : Math.random(), name : username , groupIcon : groupIcon.name}])
        }else{
            alert("User Already exists")
        }
        console.log(groupMembers)
    }
    function removeUser(id) {
        let temp = groupMembers.filter(user => user.id !== id)
        addGroupMembers(temp)
    }
    // Render individual icons in the grid
  const renderIconItem = ({ item }) => (
    <ProfileIcon user ={item} removeUser={removeUser} /> 
  );

  return (
    <View style={{display:'flex', flex:1 , alignContent:'center' , alignItems:'center'}}>
        <Text>
            {groupName}
        </Text>
      <UserSearchBar addMembersUsingEmail ={addMembersUsingEmail}></UserSearchBar>
      <FlatList
        data={groupMembers}
        renderItem={renderIconItem}
        keyExtractor={(item) => item.id.toString()}
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