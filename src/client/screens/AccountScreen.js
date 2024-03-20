import { View, Text, Pressable, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import useAuth from "../hooks/useAuth";
import styles from "../styles/accountScreenStyles";
import {
    fetchUserDataFromEmail,
    findUserByEmailOrName,
} from "../utils/api_function_calls/user_functions";
import { avatars } from "../utils/constants";

const AccountScreen = () => {
    const { signOutUser } = useAuth();
    const loggedInUser = useAuth();
    const loggedInUserEmail = loggedInUser?.user?.email;
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [avatarIconID, setAvatarIconID] = useState(null);
    const fetchUserData = async (email) => {
        setIsLoading(true);
        const resp = await fetchUserDataFromEmail(email);
        setLastName(resp.lastName);
        setFirstName(resp.firstName);
        setAvatarIconID(resp.iconID);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchUserData(loggedInUserEmail);
    }, []);
    return (
        <View style={{ flex: 1 }}>
            {isLoading ? null : (
                <View style={styles.container}>
                    <Text style={styles.accountDetailsText}>Your account</Text>
                    <Image
                        source={
                            avatars.find((avatar) => avatar.id === avatarIconID)
                                ? avatars.find(
                                      (avatar) => avatar.id === avatarIconID
                                  ).source
                                : avatars[0].source
                        }
                        style={styles.avatarIcon}
                    />
                    <Text style={styles.usertNameText}>
                        {firstName} {lastName}
                    </Text>
                    <Text style={styles.userEmailText}>
                        {loggedInUserEmail}
                    </Text>
                    <TouchableOpacity
                        style={styles.signOutButton}
                        onPress={signOutUser}
                    >
                        <Text style={styles.signOutButtonText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default AccountScreen;
