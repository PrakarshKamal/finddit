import { View, Text } from 'react-native'
import React from 'react'
import UserSearchBar from '../../components/UserSearchBar'
import ProfileIcon from '../../components/ProfileIcon'

const AddUsers = ({route , navigation}) => {
    const { groupName, groupIcon } = route.params;
  return (
    <View style={{display:'flex', flex:1}}>
        <Text>
            {groupName}
        </Text>
      <UserSearchBar></UserSearchBar>
      <ProfileIcon></ProfileIcon>
    </View>
  )
}

export default AddUsers