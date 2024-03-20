import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles/CardItemStyles";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const CardItem = ({ itemData }) => {
    // @kanwar need to add restuarnt id here so that we can add store swipes and shit directly to the restuartnat id
    const {
        name,
        rating,
        vicinity,
        place_opening_hours,
        price_level,
        image,
        tag,
    } = itemData;

    const costDict = {
        1: "💵",
        2: "💵💵",
        3: "💵💵💵",
        4: "💵💵💵💵",
    };

    const renderVegNonVegTags = () => {
        return (
            <>
                <View style={[styles.tag, { backgroundColor: "green" }]}>
                    <Text style={styles.tagText}>Veg</Text>
                </View>
                <View style={[styles.tag, { backgroundColor: "red" }]}>
                    <Text style={styles.tagText}>Non-Veg</Text>
                </View>
            </>
        );
    };

    const renderThirdTag = (randomTag) => {
        let backgroundColor;
        switch (randomTag) {
            case "Vegan":
                backgroundColor = "#ff74d4";
                break;
            case "GF":
                backgroundColor = "#ff9500";
                break;

            case "Hot Pick":
                backgroundColor = "#ff3b30";
                break;
            case "Trending":
                backgroundColor = "#ff9500";
                break;
        }
        return (
            <View style={[styles.tag, { backgroundColor }]}>
                <Text style={styles.tagText}>{randomTag}</Text>
            </View>
        );
    };

    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.name}
                >
                    {name}
                </Text>
                <Text style={styles.location}>{vicinity}</Text>
                <Text style={styles.operationalHours}>
                    {place_opening_hours.open_now}
                </Text>
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>{rating}</Text>
                    <Entypo name="star" size={30} color="#fdd663" />
                </View>
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>{costDict[price_level]}</Text>
                </View>
                <View style={styles.tagContainer}>
                    {renderVegNonVegTags()}
                    {renderThirdTag(tag)}
                </View>
            </View>
        </View>
    );
};

export default CardItem;
