import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import useAuth from '../hooks/useAuth'

const AccountScreen = () => {
  const {signOutUser} = useAuth()
  return (
    <View>
      <Text>AccountScreen</Text>
      <Pressable onPress={signOutUser}>
          <Text>Sign Out</Text>
        </Pressable>
    </View>
  )
}

export default AccountScreen