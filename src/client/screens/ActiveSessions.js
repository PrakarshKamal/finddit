// ActiveSessions.js
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from "react-native";
import { getActiveGroupsForUser } from "../utils/api_function_calls/group_functions";
import GroupItem from "../components/GroupItem";
import styles from "../styles/ActiveSessionsStyles";

const ActiveSessions = ({ route }) => {
    const { email } = route.params;
    const [activeGroups, setActiveGroups] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const fetchActiveGroups = async () => {
        try {
            setIsLoading(true);
            const response = await getActiveGroupsForUser(email);
            const data = await response.data;
            console.log("active groups", data);
            setActiveGroups(data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching active groups:", error);
        }
    };

    const renderActiveGroups = (item) => {
        return <GroupItem group={item.item} loggedInUser={email}></GroupItem>;
    };
    useEffect(() => {
        fetchActiveGroups();
    }, []);

    return (
        <View>
            <Text style={styles.sessionHistoryText}>SESSION HISTORY</Text>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <View>
                    {activeGroups.length > 0 ? (
                        <FlatList
                            data={activeGroups}
                            renderItem={renderActiveGroups}
                        ></FlatList>
                    ) : (
                        <Text style={styles.noActiveGroupsText}>
                            {" "}
                            No active groups found
                        </Text>
                    )}
                </View>
            )}
        </View>
    );
};

export default ActiveSessions;
