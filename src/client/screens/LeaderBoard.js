import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import styles from "../styles/leaderboardStyles";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import {
    getGoogleMapsLinkForPlaceID,
    getLeaderboard,
    getRestaurantDataFromPlaceID,
} from "../utils/api_function_calls/leaderboard_functions";
import { getEmbedUrlFromPhotoRef } from "../utils/api_function_calls/photo_functions";

const LeaderBoard = ({ route }) => {
    const { groupID } = route.params;
    const [leaderboard, setleaderboard] = useState([]);
    const [leaderboardData, setleaderboardData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [top1Image, setTop1Image] = useState(null);
    const [top2Image, setTop2Image] = useState(null);
    const [top3Image, setTop3Image] = useState(null);
    const fetchLeaderBoard = async () => {
        setIsLoading(true);
        const LeaderBoardIds = await getLeaderboard(groupID);
        setleaderboard(LeaderBoardIds);
        if (LeaderBoard.length >= 1) {
            await fetchRestaurantData(LeaderBoardIds);
        }
        setIsLoading(false);
        console.log(LeaderBoard);
    };
    const fetchImageUrl = async (item) => {
        let ref = item.photos[0].photo_reference;
        console.log("ref", ref);
        let imageUrl = await getEmbedUrlFromPhotoRef(ref, 1000);
        console.log("imageUrl1", imageUrl);
        return imageUrl;
    };
    async function fetchRestaurantData(restaurantIDs) {
        try {
            console.log(restaurantIDs);
            const promises = restaurantIDs.map((restID) =>
                getRestaurantDataFromPlaceID(groupID, restID)
            );
            const restaurantData = await Promise.all(promises);
            setleaderboardData(restaurantData.slice(0, 8));
            let temp = [];
            let imageFetchList = [];
            const imgUrl1 = await fetchImageUrl(restaurantData[0]);
            setTop1Image({ uri: imgUrl1 });
            const imgUrl2 = await fetchImageUrl(restaurantData[1]);
            setTop2Image({ uri: imgUrl2 });
            const imgUrl3 = await fetchImageUrl(restaurantData[2]);
            setTop3Image({ uri: imgUrl3 });
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
    }
    useEffect(() => {
        fetchLeaderBoard();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <View style={styles.container}>
                    <Text style={styles.leaderboardTitleText}>
                        Generating leaderboard
                    </Text>
                </View>
            ) : (
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
                                        style={[
                                            styles.podiumCircleTop,
                                            { bottom: 105 },
                                        ]}
                                    >
                                        <Image
                                            source={top1Image}
                                            style={styles.podiumCircleImageTop}
                                        ></Image>
                                        <MaterialCommunityIcons
                                            name={`numeric-1-box`}
                                            size={36}
                                            color="rgba(0, 0, 1, 0.4)"
                                            style={styles.podiumNumber}
                                        />
                                        <Text
                                            style={{
                                                top: 30,
                                                fontSize: 16,
                                                fontWeight: 500,
                                            }}
                                        >
                                            {leaderboardData[0]?.name}
                                        </Text>
                                    </View>

                                    <View
                                        style={[
                                            styles.podiumCircleLower,
                                            { left: -180, bottom: -8 },
                                        ]}
                                    >
                                        <Image
                                            source={top2Image}
                                            style={
                                                styles.podiumCircleImageLower
                                            }
                                        />
                                        <MaterialCommunityIcons
                                            name={`numeric-2-box`}
                                            size={36}
                                            color="rgba(0, 0, 1, 0.4)"
                                            style={styles.podiumNumber}
                                        />
                                        <Text
                                            style={{
                                                top: 30,
                                                fontSize: 16,
                                                fontWeight: 500,
                                            }}
                                        >
                                            {leaderboardData[1]?.name}
                                        </Text>
                                    </View>

                                    <View
                                        style={[
                                            styles.podiumCircleLower,
                                            { right: -180, bottom: -8 },
                                        ]}
                                    >
                                        <Image
                                            source={top3Image}
                                            style={
                                                styles.podiumCircleImageLower
                                            }
                                        />
                                        <MaterialCommunityIcons
                                            name={`numeric-3-box`}
                                            size={36}
                                            color="rgba(0, 0, 1, 0.4)"
                                            style={styles.podiumNumber}
                                        />
                                        <Text
                                            style={{
                                                top: 30,
                                                fontSize: 16,
                                                fontWeight: 500,
                                            }}
                                        >
                                            {leaderboardData[2]?.name}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View>
                                {leaderboardData
                                    .slice(3, 8)
                                    .map((item, index) => (
                                        <TouchableOpacity
                                            onPress={async () => {
                                                const url =
                                                    await getGoogleMapsLinkForPlaceID(
                                                        item.place_id
                                                    );
                                                console.log(url);
                                                Linking.openURL(url);
                                            }}
                                        >
                                            <View
                                                key={index}
                                                style={styles.leaderboardItem}
                                            >
                                                <View
                                                    style={
                                                        styles.leaderboardTextContainer
                                                    }
                                                >
                                                    <View
                                                        style={
                                                            styles.leaderboardNumber
                                                        }
                                                    >
                                                        <MaterialCommunityIcons
                                                            name={`numeric-${
                                                                index + 4
                                                            }-box-outline`}
                                                            size={36}
                                                            color="rgba(0, 0, 1, 0.6)"
                                                        />
                                                    </View>
                                                    <Text
                                                        style={
                                                            styles.leaderboardItemText
                                                        }
                                                    >
                                                        {item?.name}
                                                    </Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                            </View>
                        </View>
                    )}
                </View>
            )}
        </View>
    );
};

export default LeaderBoard;
