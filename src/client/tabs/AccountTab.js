import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/Header";

import AccountScreen from "../screens/AccountScreen";
const AccountTab = () => {
    const Stack = createStackNavigator();
    // this function is to render the header without a back button
    function HeaderWithoutBack() {
        return <Header backbuttonShown={false}></Header>;
    }
    return (
        <Stack.Navigator screenOptions={{ header: Header }}>
            <Stack.Screen
                name="AccountScreen"
                component={AccountScreen}
                options={{ header: HeaderWithoutBack }}
            />
        </Stack.Navigator>
    );
};

export default AccountTab;
