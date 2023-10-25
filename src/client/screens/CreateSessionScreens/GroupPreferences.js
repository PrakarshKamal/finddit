import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react'
import styles from '../../styles/GroupPreferencesStyles';
import Slider from '@react-native-community/slider';

const GroupPreferences = ({route, navigation}) => {
    const {groupName , groupIcon , groupMembers} = route.params
    const [location, setLocation] = useState('');
  const [radius, setRadius] = useState(5); // Default radius value
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const handleRadiusChange = (value) => {
    setRadius(value);
  };

  const handlePriceRangeSelect = (priceRange) => {
    setSelectedPriceRange(priceRange);
  };
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
          style={[styles.priceRangeButton, selectedPriceRange === 'one' && styles.selectedPriceRange]}
          onPress={() => handlePriceRangeSelect('one')}
        >
          <Text style={styles.priceRangeText}>$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.priceRangeButton, selectedPriceRange === 'two' && styles.selectedPriceRange]}
          onPress={() => handlePriceRangeSelect('two')}
        >
          <Text style={styles.priceRangeText}>$$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.priceRangeButton, selectedPriceRange === 'three' && styles.selectedPriceRange]}
          onPress={() => handlePriceRangeSelect('three')}
        >
          <Text style={styles.priceRangeText}>$$$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.priceRangeButton, selectedPriceRange === 'four' && styles.selectedPriceRange]}
          onPress={() => handlePriceRangeSelect('four')}
        >
          <Text style={styles.priceRangeText}>$$$$</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default GroupPreferences