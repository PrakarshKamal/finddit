import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../styles/accountScreenStyles';

const ProfileIcon = ({ userImageSource, userName }) => {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require("../assets/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpeg")} style={styles.userImage} />
        </View>
  
        <Text style={styles.userName}>Hriday</Text>
      </View>
    );
  };

export default ProfileIcon