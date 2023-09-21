import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/Signup";
import TabNavigator from "./TabNavigator"; // Import your TabNavigator component

const Stack = createStackNavigator();

const MainAppScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false  }} >
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="App" component={MainAppScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
