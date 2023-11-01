import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import GroupInnit from '../screens/CreateSessionScreens/GroupInnit';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header';
import AddUsers from '../screens/CreateSessionScreens/AddUsers';
import GroupPreferences from '../screens/CreateSessionScreens/GroupPreferences';
import groupCreated from '../screens/Session/groupCreated';

const HomeTab = () => {
    const Stack = createStackNavigator();
    // this function is to render the header without a back button
  function HeaderWithoutBack (){
    return <Header backbuttonShown={false} ></Header>
  }
  return (
    <Stack.Navigator screenOptions={{ header: Header}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{header : HeaderWithoutBack}}/>
      <Stack.Screen name="GroupInnit" component={GroupInnit}  />
      <Stack.Screen name="AddUsers" component={AddUsers}  />
      <Stack.Screen name="GroupPreferences" component={GroupPreferences}  />
      <Stack.Screen name="GroupCreated" component={groupCreated}  />
    </Stack.Navigator>
  )
}

export default HomeTab