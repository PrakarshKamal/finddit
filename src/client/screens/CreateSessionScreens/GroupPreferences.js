import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import React, { useState } from 'react'
import styles from '../../styles/GroupPreferencesStyles';
import Slider from '@react-native-community/slider';
import useAuth from '../../hooks/useAuth';
import {createNewGroup , getCardDataFromGroup} from '../../utils/api_function_calls/group_functions'
import { useNavigation } from '@react-navigation/native';
const GroupPreferences = ({route, navigation}) => {
    const {groupName , groupIcon , groupMembers} = route.params
    const [location, setLocation] = useState('');
    const admin = useAuth()
  const [radius, setRadius] = useState(5); // Default radius value
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [openNow, setOpenNow] = useState(true);
  const [groupDeadLine, setGroupDeadLine] = useState(24)
  const[isActive, setIsActive] = useState(true)

  const handleRadiusChange = (value) => {
    setRadius(value);
  };

  const handlePriceRangeSelect = (priceRange) => {
    setSelectedPriceRange(priceRange);
  };
  const  handleGenerateButtonPressed =  async () => {
    if(!radius || !selectedPriceRange || !openNow ){
      alert("please enter valid fields")
      return
    }
    const adminPreferences = {
      latitude: 43.260838906356824 ,
      longitude: -79.91288781166078 ,
      radius: radius*10000 , 
      keyword: "restaurant" ,
      maxPrice: selectedPriceRange ,
      minPrice: 1,
      openNow : openNow
    }
    const groupMembersEmails = groupMembers.map(user => user.email);
    const res = await createNewGroup(groupName,groupIcon,admin.user.email,groupMembersEmails,groupDeadLine,isActive,adminPreferences)
    if(res.data){
      const groupId = res.data
      const cardData = await getCardDataFromGroup(groupId)
      console.log(cardData.data)
      const group = {groupName : groupName ,
        groupId : groupId,
        cardData : cardData.data,
         groupIcon : groupIcon , 
         groupMembers:groupMembers ,
          groupAdmin :admin.user.email , 
          groupDeadLine: groupDeadLine , 
          isActive : isActive ,
           adminPreferences : adminPreferences }
        navigation.navigate("GroupCreated", group);

    }else{
      alert("Something went wrong")
    }
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
      <View style={styles.toggleButtonContainer}>
      <Text style={styles.label}>Open Now:</Text>
      <Switch
        trackColor={{ false: '', true: '#f27575' }}
        value={openNow}
        onValueChange={() => setOpenNow(!openNow)}
      />
    </View>
      <TouchableOpacity  style={styles.nextButton} onPress={handleGenerateButtonPressed}>
            <Text style={styles.nextButtonText}>Generate</Text>
      </TouchableOpacity>
    </View>
  );
}

export default GroupPreferences