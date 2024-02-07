import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import styles from "../styles/GroupItemStyles";
import { icons } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";

const GroupItem = ({ group }) => {
    const navigation = useNavigation();
    const {
        groupIconID,
        groupName,
        groupAdminEmail,
        votingDeadline,
        timeStamp,
    } = group.groupMetadata;
    const [remainingTime, setRemainingTime] = useState(null);
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const SessionCreationtime = new Date(
            timeStamp.seconds * 1000 + timeStamp.nanoseconds / 1000000
        );
        const expirationTime = new Date(
            SessionCreationtime.getTime() + votingDeadline * 3600000
        );
        const currentTime = new Date();
        const timeDifference = expirationTime - currentTime;

        if (timeDifference > 0) {
            const hours = Math.floor(timeDifference / 3600000);
            const minutes = Math.floor((timeDifference / 60000) % 60);
            setRemainingTime(`${hours}h ${minutes}m`);
            setIsExpired(false);
        } else {
            // Session has expired
            setRemainingTime("Expired");
            setIsExpired(true);
        }
    }, []);

    const handleJoinSessionButton = () => {
        navigation.navigate("UserPreferences", {
            groupIconID: groupIconID,
            groupName: groupName,
            groupAdminEmail: groupAdminEmail,
            votingDeadline: votingDeadline,
            timeStamp: timeStamp,
        });
    };
    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                onPress={() => handleJoinSessionButton()}
            >
                <View style={styles.textContainer}>
                    <Image
                        source={
                            icons.find((icon) => icon.id === groupIconID)
                                ? icons.find((icon) => icon.id === groupIconID)
                                      .source
                                : icons[0].source
                        }
                        style={{ width: 100, height: 100 }}
                    ></Image>
                    <Text style={styles.groupName}>{groupName}</Text>
                    <Text style={styles.createdBy}>
                        Created by: {groupAdminEmail}
                    </Text>
                    <Text style={styles.expiresIn}>
                        Expires in: {remainingTime}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default GroupItem;
