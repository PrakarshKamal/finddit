import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Swiper from "react-native-deck-swiper";
import cardOverlayLabels from "../../styles/cardOverlayLabels";
import styles from "../../styles/groupCreatedStyles";
import CardItem from "../../components/CardItem";
import { icons } from "../../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    swipeOnRestaurant,
    userFinishedVoting,
    userUsedSuperDislike,
    checkIfUserUsedSuperDislike,
} from "../../utils/api_function_calls/group_functions";

const GroupCreated = ({ route, navigation }) => {
    const { groupName, groupId, groupIcon, cardData, loggedInUser } =
        route.params;
    const [superDislikeUsed, setSuperDislikeUsed] = useState(false);
    const renderCardItem = (item) => {
        return (
            <View style={styles.card}>
                <CardItem itemData={item}></CardItem>
            </View>
        );
    };
    const registerVoteLocally = async (groupID, restaurantID) => {
        try {
            console.log(restaurantID);

            let previousVotes = await AsyncStorage.getItem("@" + groupID);
            previousVotes = previousVotes
                ? JSON.parse(previousVotes)
                : { groupID: groupID, votes: [] };

            console.log(previousVotes);

            previousVotes.votes.push(restaurantID);

            console.log(previousVotes.votes);

            await AsyncStorage.setItem(
                "@" + groupID,
                JSON.stringify(previousVotes)
            );
        } catch (e) {
            console.error(e);
        }
    };

    const onRightSwipe = async (index) => {
        const card = cardData[index];
        const restaurantID = card["place_id"];
        await registerVoteLocally(groupId, restaurantID);
        await swipeOnRestaurant(groupId, restaurantID, "right");
    };
    const onLeftSwipe = async (index) => {
        const card = cardData[index];
        const restaurantID = card["place_id"];
        await registerVoteLocally(groupId, restaurantID);
        await swipeOnRestaurant(groupId, restaurantID, "left");
    };
    const onUpSwipe = async (index) => {
        const card = cardData[index];
        const restaurantID = card["place_id"];
        await registerVoteLocally(groupId, restaurantID);
        await swipeOnRestaurant(groupId, restaurantID, "down");
        window.alert("You have used your 1 super dislike");
        setSuperDislikeUsed(true);
        await userUsedSuperDislike(groupId, loggedInUser);
    };

    const onSwipeAllCards = async () => {
        await userFinishedVoting(groupId, loggedInUser);
        navigation.navigate("LeaderBoard", { groupID: groupId });
    };

    useEffect(() => {
        const checkIfUserUsedSuperDislikeFunction = async () => {
            const superDislikeUsed = await checkIfUserUsedSuperDislike(
                groupId,
                loggedInUser
            );
            setSuperDislikeUsed(superDislikeUsed);
        };
        checkIfUserUsedSuperDislikeFunction();
    }, []);

    return (
        <View>
            <View style={styles.container}>
                <Image
                    source={icons.find((icon) => icon.id === groupIcon).source}
                    style={styles.groupIcon}
                ></Image>
                <Text style={styles.groupName}>{groupName}</Text>
            </View>
            <View>
                <Swiper
                    cards={cardData}
                    renderCard={renderCardItem}
                    onSwiped={(cardIndex) => {
                        console.log(cardIndex);
                    }}
                    cardIndex={0}
                    stackSeparation={15}
                    disableBottomSwipe={true}
                    disableTopSwipe={superDislikeUsed}
                    onSwipedLeft={(cardIndex) => onLeftSwipe(cardIndex)}
                    onSwipedRight={(cardIndex) => onRightSwipe(cardIndex)}
                    onSwipedTop={(cardIndex) => onUpSwipe(cardIndex)}
                    onSwipedAll={() => onSwipeAllCards()}
                    stackSize={5}
                    animateCardOpacity={true}
                    overlayLabels={cardOverlayLabels}
                ></Swiper>
            </View>
        </View>
    );
};

export default GroupCreated;
