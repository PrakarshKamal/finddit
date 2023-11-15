import { View, Text, Image } from "react-native";
import React from "react";
import Swiper from "react-native-deck-swiper";
import cardOverlayLabels from "../../styles/cardOverlayLabels";
import styles from "../../styles/groupCreatedStyles";
import { icons } from "../../utils/constants";

const GroupCreated = ({ route, navigation }) => {
    const { groupName, groupId, groupIcon } = route.params;

    return (
        <View>
            <Image
                source={icons.find((icon) => icon.id === groupIcon).source}
                style={{ width: 50, height: 50 }}
            ></Image>
            <Text style={{ textAlign: "center" }}>
                Group {groupName} created
            </Text>
            <View>
                <Swiper
                    cards={["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"]}
                    renderCard={(card) => (
                        <View style={styles.card}>
                            <Text>{card}</Text>
                        </View>
                    )}
                    onSwiped={(cardIndex) => {
                        console.log(cardIndex);
                    }}
                    cardIndex={0}
                    stackSeparation={15}
                    disableBottomSwipe={true}
                    onSwipedLeft={(cardIndex) => console.log("Swiped left")}
                    onSwipedRight={(cardIndex) => console.log("Swiped right")}
                    onSwipedTop={(cardIndex) => console.log("Swiped top")}
                    onSwipedAll={() => console.log("Swiped all")}
                    stackSize={5}
                    animateCardOpacity={true}
                    backgroundColor={"#4FD0E9"}
                    overlayLabels={cardOverlayLabels}
                ></Swiper>
            </View>
        </View>
    );
};

export default GroupCreated;
