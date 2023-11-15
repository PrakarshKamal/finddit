import { View, Text } from 'react-native'
import React from 'react'

const GroupCreated = ({route, navigation}) => {
    const {groupName , groupId } = route.params
  return (
    <View>
      <Text>Group {groupName} Created with id {groupId} </Text>
    </View>
  )
}

export default GroupCreated