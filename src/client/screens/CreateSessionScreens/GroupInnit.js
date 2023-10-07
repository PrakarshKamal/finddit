import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, Modal, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/GroupInnit';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

const GroupInnit = () => {
  const navigation = useNavigation()
  const [groupName , setGroupName] = useState('');
  const [profileIconId , setProfileIconId] = useState(null);
  const [isProfileIconModalVisible , setProfileIconModalVisible] = useState(false)
  const [selectedIcon, setSelectedIcon] = useState(null);
  const icons = [
    { id: 1, name: 'Icon 1' },
    { id: 2, name: 'Icon 2' },
    { id: 3, name: 'Icon 3' },
    { id: 4, name: 'Icon 4' },
  ];

  // Function to handle icon selection
  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
  };

  // Function to handle cancel button press
  const handleCancelPress = () => {
    setProfileIconModalVisible(false)
  };

  // Function to handle select button press
  const handleSelectPress = () => {
    // Add your logic for confirming the selected icon
    if (selectedIcon) {
      console.log(`Selected Icon: ${selectedIcon.name}`);
      setProfileIconModalVisible(false)
    }
  };

  // Render individual icons in the grid
  const renderIconItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.iconContainer, selectedIcon?.id === item?.id && styles.selectedIcon]}
      onPress={() => handleIconSelect(item)}
    >
      <Text style={styles.iconText}>{item.name}</Text>
    </TouchableOpacity>
  );

  function handleProfileIconPressed() {
    setProfileIconModalVisible(true)
  }

  function handleNextButtonPressed () {
    if (groupName != '' && selectedIcon){
      navigation.navigate("AddUsers" , {groupIcon : selectedIcon , groupName : groupName})
    }else {
      alert("Enter all data")
    }
  }
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
           <Modal
      animationType="slide"
      transparent={false}
      visible={isProfileIconModalVisible}
      onRequestClose={() => {
        setProfileIconModalVisible(!isProfileIconModalVisible);
      }}>
      <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Pick a Profile Icon for Your Group</Text>

      {/* Icon Grid */}
      <FlatList
        data={icons}
        renderItem={renderIconItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Adjust the number of columns as needed
        contentContainerStyle={styles.iconGrid}
      />

      {/* Select and Cancel Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleCancelPress} style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSelectPress} style={styles.selectButton}>
          <Text style={styles.buttonText}>Select</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    </Modal>
          <Text style={styles.heading}>
            Set the name of the group and choose a group profile.
          </Text>
          <View>
            <TouchableOpacity onPress={handleProfileIconPressed}>
          <View style={styles.circle}>
            { selectedIcon ? <Text style={styles.plusIcon}> {selectedIcon.name}</Text> :
        <Text style={styles.plusIcon}>+</Text>}
      </View>
      </TouchableOpacity>

          </View>
          <View style = {styles.textInputView}>
            <Text>
              Enter Group Name
            </Text>
          <TextInput
            placeholder="Enter text here"
            style={styles.textInput}
            value={groupName}
            onChangeText={(text) => {
              setGroupName(text)
            }}
          />
          </View>
    
          
          <TouchableOpacity  style={styles.nextButton} onPress={handleNextButtonPressed}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
        </SafeAreaView>
      );
}

export default GroupInnit