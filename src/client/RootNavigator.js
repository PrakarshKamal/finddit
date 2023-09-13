import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/Login";
import TabNavigator from "./TabNavigator"; // Import your TabNavigator component

const Stack = createStackNavigator();

const MainAppScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="App" component={MainAppScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
