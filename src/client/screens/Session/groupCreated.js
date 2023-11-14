import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Swiper from "react-native-deck-swiper";
import cardOverlayLabels from "../../styles/cardOverlayLabels";

const GroupCreated = ({ route, navigation }) => {
    const { groupName, groupId } = route.params;

    return (
        <View>
            <Text style={{ textAlign: "center" }}>
                Group {groupName} created with id {groupId}
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

const styles = StyleSheet.create({
    card: {
        maxHeight: 350,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 8,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
    },
});
