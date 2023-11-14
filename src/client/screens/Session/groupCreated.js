import { View, Text } from "react-native";
import React from "react";
import Swiper from "react-native-deck-swiper";
import cardOverlayLabels from "../../styles/cardOverlayLabels";
import styles from "../../styles/groupCreatedStyles";
import CardItem from "../../components/CardItem";

const GroupCreated = ({ route, navigation }) => {
    const {groupName , groupId, cardData } = route.params

    const renderCardItem = (item) => {
        return (
            <View style={styles.card}>
            <CardItem itemData={item}></CardItem>
            </View>
        )
    }


    return (
        <View>
            <Text style={{ textAlign: "center" }}>
                Group {groupName} created with id {groupId}
            </Text>
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
