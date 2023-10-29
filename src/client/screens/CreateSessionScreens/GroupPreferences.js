import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react'
import styles from '../../styles/GroupPreferencesStyles';
import Slider from '@react-native-community/slider';
import useAuth from '../../hooks/useAuth';
import {createNewGroup} from '../../utils/api_function_calls/group_functions'
const GroupPreferences = ({route, navigation}) => {
    const {groupName , groupIcon , groupMembers} = route.params
    const [location, setLocation] = useState('');
    const admin = useAuth()
  const [radius, setRadius] = useState(5); // Default radius value
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const handleRadiusChange = (value) => {
    setRadius(value);
  };

  const handlePriceRangeSelect = (priceRange) => {
    setSelectedPriceRange(priceRange);
  };
  const  handleGenerateButtonPressed =  async () => {
    const adminPreferences = {
      latitude: 43.260838906356824 ,
      longitude: -79.91288781166078 ,
      radius: radius*10000 , 
      keyword: "restaurant" ,
      maxPrice: selectedPriceRange ,
      minPrice: 1
    }
    const groupMembersEmails = groupMembers.map(user => user.email);
    const res = await createNewGroup(groupName,groupIcon,admin.user.email,groupMembersEmails,24,true,adminPreferences)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.groupName}>{groupName}</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Radius (miles): {radius}</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={20}
          thumbTintColor = {"#f27575"}
          minimumTrackTintColor = {"#f27575"}
          step={1}
          value={radius}
          onValueChange={handleRadiusChange}
        />
      </View>

      <View >
        <Text style={styles.label}>Price Range</Text>
        <View style={styles.priceRangeContainer}>
        <TouchableOpacity
          style={[styles.priceRangeButton, selectedPriceRange === 1 && styles.selectedPriceRange]}
          onPress={() => handlePriceRangeSelect(1)}
        >
          <Text style={styles.priceRangeText}>$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.priceRangeButton, selectedPriceRange === 2 && styles.selectedPriceRange]}
          onPress={() => handlePriceRangeSelect(2)}
        >
          <Text style={styles.priceRangeText}>$$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.priceRangeButton, selectedPriceRange === 3 && styles.selectedPriceRange]}
          onPress={() => handlePriceRangeSelect(3)}
        >
          <Text style={styles.priceRangeText}>$$$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.priceRangeButton, selectedPriceRange === 4 && styles.selectedPriceRange]}
          onPress={() => handlePriceRangeSelect(4)}
        >
          <Text style={styles.priceRangeText}>$$$$</Text>
        </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity  style={styles.nextButton} onPress={handleGenerateButtonPressed}>
            <Text style={styles.nextButtonText}>Generate</Text>
      </TouchableOpacity>
    </View>
  );
}

export default GroupPreferences