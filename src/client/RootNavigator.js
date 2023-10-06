import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/Signup";
import TabNavigator from "./TabNavigator"; // Import your TabNavigator component
import useAuth from "./hooks/useAuth";
import GroupInnit from "./screens/CreateSessionScreens/GroupInnit";
import Header from "./components/Header";

const Stack = createStackNavigator();

const MainAppScreen = () => {

  function HeaderWithoutBack (){
    return <Header backbuttonShown={false} ></Header>
  }
  return (
    <Stack.Navigator screenOptions={{header: Header}} >
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{header : HeaderWithoutBack}}  />
      <Stack.Screen name="GroupInnit" component={GroupInnit}  />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  const {user} = useAuth();
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false}}>
      {(user) ?  <Stack.Screen name="App" component={MainAppScreen} /> 
      :
      <>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      </>
  }
      
    </Stack.Navigator>
  );
};

export default RootNavigator;
