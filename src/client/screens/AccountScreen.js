import { View, Text, Pressable } from "react-native";
import React from "react";
import { Button } from "react-native";
import useAuth from "../hooks/useAuth";
import styles from "../styles/accountScreenStyles";

const AccountScreen = () => {
  const { signOutUser } = useAuth();
  return (
    <View>
      <Text>AccountScreen</Text>
      <TouchableOpacity style={styles.signOutButton} onPress={signOutUser}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountScreen;
