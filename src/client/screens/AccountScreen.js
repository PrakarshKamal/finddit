import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { Button } from "react-native";
import useAuth from "../hooks/useAuth";
import styles from "../styles/accountScreenStyles";

const AccountScreen = () => {
    const { signOutUser } = useAuth();
    const loggedInUser = useAuth();
    const loggedInUserEmail = loggedInUser?.user?.email;
    return (
        <View style={styles.container}>
            <Text style={styles.accountEmailText}>
                Welcome {loggedInUserEmail}!
            </Text>
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
