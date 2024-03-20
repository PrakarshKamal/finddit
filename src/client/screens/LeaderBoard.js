import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/leaderboardStyles";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import {
    getLeaderboard,
    getRestaurantDataFromPlaceID,
} from "../utils/api_function_calls/leaderboard_functions";
import { fetchImageUrl } from "../utils/functions";

const LeaderBoard = ({ route }) => {
    const { groupID } = route.params;
    const [leaderboard, setleaderboard] = useState([]);
    const [leaderboardData, setleaderboardData] = useState([]);
    const [modalRestaurant, setModalRestaurant] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const fetchLeaderBoard = async () => {
        const LeaderBoardIds = await getLeaderboard(groupID);
        setleaderboard(LeaderBoardIds);
        if (LeaderBoard.length >= 1) {
            await fetchRestaurantData(LeaderBoardIds);
        }
        console.log(LeaderBoard);
    };
    async function fetchRestaurantData(restaurantIDs) {
        try {
            console.log(restaurantIDs);
            const promises = restaurantIDs.map((restID) =>
                getRestaurantDataFromPlaceID(groupID, restID)
            );

            const restaurantData = await Promise.all(promises);
            let temp = [];
            let imageFetchList = [];
            let restWithImages = await fetchImageUrl({ data: restaurantData });
            restWithImages.forEach((rest, index) => {
                temp.push({
                    position: index + 1,
                    name: rest.name,
                    id: rest.place_id,
                    image: rest.image,
                    ...rest,
                });
                console.log(rest.image);
            });
            setleaderboardData(temp.slice(0, 8));
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
    }
    useEffect(() => {
        fetchLeaderBoard();
    }, []);

    return (
        <View style={styles.container}>
            {leaderboard.length == 0 ? (
                <View style={styles.container}>
                    <Text style={styles.leaderboardTitleText}>
                        Leader board will be displayed here
                    </Text>
                </View>
            ) : (
                <View style={styles.container}>
                    <View>
                        <Text style={styles.leaderboardTitleText}>
                            LEADERBOARD
                        </Text>
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
                            <View
                                style={[styles.podiumCircle, { bottom: 100 }]}
                            >
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
                            <TouchableOpacity>
                                <View
                                    key={index}
                                    style={styles.leaderboardItem}
                                >
                                    <View
                                        style={styles.leaderboardTextContainer}
                                    >
                                        <View style={styles.leaderboardNumber}>
                                            <MaterialCommunityIcons
                                                name={`numeric-${
                                                    item.position + 3
                                                }-box-outline`}
                                                size={36}
                                                color="rgba(0, 0, 1, 0.6)"
                                            />
                                        </View>
                                        <Text
                                            style={styles.leaderboardItemText}
                                        >
                                            {item.restaurantName}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            )}
        </View>
    );
};

export default LeaderBoard;
