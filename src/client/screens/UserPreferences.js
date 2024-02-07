import { View, Text } from "react-native";
import React from "react";

const UserPreferences = ({ route, navigation }) => {
    const {
        groupIconID,
        groupName,
        groupAdminEmail,
        votingDeadline,
        timeStamp,
    } = route.params;
    return (
        <View>
            <Text>{groupName}</Text>
        </View>
    );
};

export default UserPreferences;
