import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/ProfileIcon';

const ProfileIcon = ({ user , removeUser }) => {
    function removeUserOnPress () {
        removeUser(user.email)
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={removeUserOnPress}>
            <Text style={{textAlign:'right'}}>
                X
            </Text>
        </TouchableOpacity>
         <View
      style={styles.iconContainer}
    >
      <Text style={styles.iconText}>{user.iconID}</Text>
    </View>
        <Text style={styles.userName}>{user.firstName} {user.lastName}</Text>
      </View>
    );
  };

export default ProfileIcon