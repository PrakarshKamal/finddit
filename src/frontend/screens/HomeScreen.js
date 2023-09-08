import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>TAAN DIYA HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
