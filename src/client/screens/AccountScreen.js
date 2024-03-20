import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import useAuth from "../hooks/useAuth";
import styles from "../styles/accountScreenStyles";
import {
    fetchUserDataFromEmail,
    findUserByEmailOrName,
} from "../utils/api_function_calls/user_functions";

const AccountScreen = () => {
    const { signOutUser } = useAuth();
    const loggedInUser = useAuth();
    const loggedInUserEmail = loggedInUser?.user?.email;
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [profileIconID, setProfileIconID] = useState(null);
    const fetchUserData = async (email) => {
        setIsLoading(true);
        const resp = await fetchUserDataFromEmail(email);
        setLastName(resp.lastName);
        setFirstName(resp.firstName);
        setProfileIconID(resp.iconID);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchUserData(loggedInUserEmail);
    }, []);
    return (
        <View style={styles.container}>
            <Text>icon id = {profileIconID}</Text>
            <Text style={styles.accountEmailText}>
                Welcome {firstName} {lastName}
            </Text>
            <Text>{loggedInUserEmail}</Text>
            <TouchableOpacity
                style={styles.signOutButton}
                onPress={signOutUser}
            >
                <Text style={styles.signOutButtonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AccountScreen;
