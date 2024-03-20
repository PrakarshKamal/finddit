import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from "../styles/SearchResultItemStyles";
import { avatars } from "../utils/constants";

const SearchResultItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <View style={styles.textContainer}>
                    <Image
                        source={
                            avatars.find((avatar) => avatar.id === item.iconID)
                                ? avatars.find(
                                      (avatar) => avatar.id === item.iconID
                                  ).source
                                : avatars[0].source
                        }
                        style={styles.avatarIcon}
                    />
                    <Text style={styles.firstName}>{item.firstName} </Text>
                    <Text style={styles.lastName}>{item.lastName}</Text>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.email}>{item.email}</Text>
            </View>
        </View>
    );
};

export default SearchResultItem;
