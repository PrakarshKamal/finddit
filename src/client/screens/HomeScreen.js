import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/homeScreenStyles';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation()
  const handleButton1Press = () => {
    navigation.navigate("GroupInnit")
    console.log('Button 1 Pressed');
  };

  
  const handleButton2Press = () => {
    
    console.log('Button 2 Pressed');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleButton1Press}
      >
        <Text style={styles.buttonText}>CREATE A SESSION</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleButton2Press}
      >
        <Text style={styles.buttonText}>JOIN A SESSION</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen