import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Header = ({backbuttonShown = true}) => {
    const navigation = useNavigation()
    const onBackPress = () => {
        navigation.goBack()
    }
    return (
        <SafeAreaView>
        <View style={styles.header}>
            { backbuttonShown ?<TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity> : null }
          <Text style={styles.title}>Finddit</Text>
        </View>
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60, // Header height
      },
      backButton: {
        position: 'absolute',
        left: 10, // Adjust the left position as needed
      },
      backButtonText: {
        color: "#f27575",
        fontSize: 16, // Back button text font size
      },
      title: {
        color: "#f27575",
        fontSize: 40, // Title text font size
        fontWeight: 'bold', // Title text font weight
      },
    });

export  default Header