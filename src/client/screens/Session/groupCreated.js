import { View, Text, Image } from "react-native";
import React from "react";
import Swiper from "react-native-deck-swiper";
import cardOverlayLabels from "../../styles/cardOverlayLabels";
import styles from "../../styles/groupCreatedStyles";
import CardItem from "../../components/CardItem";
import { icons } from "../../utils/constants";

const GroupCreated = ({ route, navigation }) => {
    const { groupName, groupId, groupIcon, cardData } = route.params;
    const renderCardItem = (item) => {
        return (
            <View style={styles.card}>
                <CardItem itemData={item}></CardItem>
            </View>
        );
    };

    return (
        <View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 20,
                }}
            >
                <Image
                    source={icons.find((icon) => icon.id === groupIcon).source}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        borderWidth: 2,
                        borderColor: "#f27575",
                        alignSelf: "left",
                    }}
                ></Image>
                <Text
                    style={{
                        marginLeft: 5,
                        textAlign: "center",
                        alignSelf: "center",
                        fontSize: 30,
                        fontWeight: "bold",
                    }}
                >
                    {groupName}
                </Text>
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
                    onSwipedLeft={(cardIndex) => console.log("Swiped left")}
                    onSwipedRight={(cardIndex) => console.log("Swiped right")}
                    onSwipedTop={(cardIndex) => console.log("Swiped top")}
                    onSwipedAll={() => navigation.navigate("LeaderBoard")}
                    stackSize={5}
                    animateCardOpacity={true}
                    overlayLabels={cardOverlayLabels}
                ></Swiper>
            </View>
        </View>
    );
};

export default GroupCreated;
