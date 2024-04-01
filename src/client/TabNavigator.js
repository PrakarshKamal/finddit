import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "./screens/AccountScreen";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import HomeTab from "./tabs/HomeTab";
import AccountTab from "./tabs/AccountTab";

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: "#f27575" },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeTab}
                options={{
                    tabBarLabel: "Home",
                    tabBarLabelStyle: { color: "white", fontWeight: "bold" },
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" color={"white"} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountTab}
                options={{
                    tabBarLabel: "Account",
                    tabBarLabelStyle: { color: "white", fontWeight: "bold" },
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5
                            name="user-alt"
                            color={"white"}
                            size={22}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
