import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/leaderboardStyles";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

const LeaderBoard = () => {
    const leaderboardData = [
        { position: 4, restaurantName: "McDonalds" },
        { position: 5, restaurantName: "Burger King" },
        { position: 6, restaurantName: "Taco Bell" },
        { position: 7, restaurantName: "Subway" },
        { position: 8, restaurantName: "Popeyes" },
    ];
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.leaderboardTitleText}>LEADERBOARD</Text>
            </View>

            <View style={styles.crownIcon}>
                <FontAwesome5
                    name="crown"
                    size={56}
                    color="rgba(255, 199, 0, 1)"
                    style={{
                        textAlign: "center",
                    }}
                />
                <View style={styles.podiumContainer}>
                    <View style={[styles.podiumCircle, { bottom: 100 }]}>
                        <MaterialCommunityIcons
                            name={`numeric-1-box`}
                            size={36}
                            color="rgba(0, 0, 1, 0.4)"
                            style={styles.podiumNumber}
                        />
                    </View>
                    <View
                        style={[
                            styles.podiumCircleLower,
                            { left: -150, bottom: -15 },
                        ]}
                    >
                        <MaterialCommunityIcons
                            name={`numeric-2-box`}
                            size={36}
                            color="rgba(0, 0, 1, 0.4)"
                            style={styles.podiumNumber}
                        />
                    </View>
                    <View
                        style={[
                            styles.podiumCircleLower,
                            { right: -150, bottom: -15 },
                        ]}
                    >
                        <MaterialCommunityIcons
                            name={`numeric-3-box`}
                            size={36}
                            color="rgba(0, 0, 1, 0.4)"
                            style={styles.podiumNumber}
                        />
                    </View>
                </View>
            </View>

            <View>
                {leaderboardData.map((item, index) => (
                    <View key={index} style={styles.leaderboardItem}>
                        <View style={styles.leaderboardTextContainer}>
                            <View style={styles.leaderboardNumber}>
                                <MaterialCommunityIcons
                                    name={`numeric-${item.position}-box-outline`}
                                    size={36}
                                    color="rgba(0, 0, 1, 0.6)"
                                />
                            </View>
                            <Text style={styles.leaderboardItemText}>
                                {item.restaurantName}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default LeaderBoard;
