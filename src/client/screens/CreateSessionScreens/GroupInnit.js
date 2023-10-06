import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from '../../styles/GroupInnit';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

const GroupInnit = () => {
  const navigation = useNavigation()
    return (
        <View style={styles.container}>
          <View>
          <Image source={require('../../assets/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpeg')} style={styles.circularImage} />
          </View>
          <View style = {styles.textInputView}>
            <Text>
              Enter Group Name
            </Text>
          <TextInput
            placeholder="Enter text here"
            style={styles.textInput}
            onChangeText={(text) => {
            }}
          />
          </View>
    
          
          <TouchableOpacity  style={styles.nextButton} onPress={() => {
           navigation.navigate("AddUsers")
          }}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      );
}

export default GroupInnit