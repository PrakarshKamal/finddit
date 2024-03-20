import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles/ProfileIcon";
import { Icon } from "@rneui/base";
import { avatars } from "../utils/constants";

const ProfileIcon = ({ user, removeUser }) => {
    function removeUserOnPress() {
        removeUser(user.email);
    }
    return (
        <View style={styles.profileContainer}>
            <TouchableOpacity onPress={removeUserOnPress}>
                <View style={styles.cancelIcon}>
                    <Icon name="cancel" size={36} color="gray" />
                </View>
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <Image
                    source={
                        avatars.find((avatar) => avatar.id === user.iconID)
                            ? avatars.find(
                                  (avatar) => avatar.id === user.iconID
                              ).source
                            : avatars[0].source
                    }
                    style={styles.avatarIcon}
                />
            </View>
            <Text style={styles.userName}>
                {user.firstName} {user.lastName}
            </Text>
        </View>
    );
};

export default ProfileIcon;
