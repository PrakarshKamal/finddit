import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
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
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="App" component={MainAppScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
