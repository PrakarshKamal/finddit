import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Switch,
    SafeAreaView,
    Modal,
    Image,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/GroupPreferencesStyles";
import Slider from "@react-native-community/slider";
import useAuth from "../hooks/useAuth";
import {
    createNewGroup,
    getCardDataFromGroup,
    userCheckIn,
} from "../utils/api_function_calls/group_functions";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "@rneui/themed";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import MapView, { Circle, Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { getEmbedUrlFromPhotoRef } from "../utils/api_function_calls/photo_functions";
import { ActivityIndicator } from "react-native";
import { icons } from "../utils/constants";
import { fetchImageUrl } from "../utils/functions";
import { getPlaceAddressFromLatLong } from "../utils/api_function_calls/group_functions";

const UserPreferences = ({ route, navigation }) => {
    const {
        groupID,
        groupName,
        groupIconID,
        groupMembersEmails,
        latitude,
        longitude,
    } = route.params;

    console.log("heee ", route.params);
    const loggedInUser = useAuth();
    const loggedInUserEmail = loggedInUser?.user?.email;
    const [radius, setRadius] = useState(1); // Default radius value set to 1 KM
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [openNow, setOpenNow] = useState(true);
    const [groupDeadLine, setGroupDeadLine] = useState(24);
    const [isActive, setIsActive] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [locationSelected, setLocationSelected] = useState(false);
    const [locationToShow, setLocationToShow] = useState("Loading");
    const mapRef = useRef(null);

    const handleRadiusChange = (value) => {
        setRadius(value);
    };
    // const fetchImageUrl = async (cardData) => {
    //     const cards = [];

    //     const promises = cardData.data.map(async (item) => {
    //         try {
    //             let ref = item.photos[0].photo_reference;
    //             let imageUrl = await getEmbedUrlFromPhotoRef(ref, 1000);
    //             let card = {
    //                 ...item,
    //                 image: imageUrl,
    //             };
    //             cards.push(card);
    //         } catch (error) {
    //             console.error(`Error processing item: ${error.message}`);
    //         }
    //     });

    //     await Promise.all(promises);

    //     return cards;
    // };

    console.log(getPlaceAddressFromLatLong(43.6426, -79.3871));
    const handlePriceRangeSelect = (priceRange) => {
        setSelectedPriceRange(priceRange);
    };

    const handleCheckinButtonPressed = async () => {
        if (!radius || !selectedPriceRange) {
            alert("please enter valid fields");
            return;
        }
        const userPreferences = {
            radius: radius * 10000,
            maxPrice: selectedPriceRange,
            minPrice: 1,
        };
        if (isLoading) {
            return;
        }
        setIsLoading(true);
        try {
            userCheckIn(groupID, loggedInUserEmail, userPreferences).then(
                (res) => {
                    if (res !== 201) alert("Something went wrong");
                }
            );
            if (true) {
                const cardData = await getCardDataFromGroup(groupID);
                let cards = await fetchImageUrl(cardData);
                if (cards.length === 0) {
                    alert("No restaurants found");
                    return;
                }
                const group = {
                    groupName: groupName,
                    groupId: groupID,
                    cardData: cards,
                    groupIcon: groupIconID,
                    loggedInUser: loggedInUserEmail,
                };
                navigation.navigate("GroupCreated", group);
            } else {
                alert("something went wrong");
            }
        } catch (err) {
            throw err;
        } finally {
            setIsLoading(false);
        }
    };
    const fetchLocationString = async () => {
        if (latitude && longitude) {
            setIsLoading(true);
            const locationToShow = await getPlaceAddressFromLatLong(
                latitude,
                longitude
            );
            setLocationToShow(locationToShow);
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchLocationString();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator></ActivityIndicator>
            ) : (
                <View style={styles.container}>
                    <Text style={styles.setPreferencesText}>
                        Set preferences for this group
                    </Text>
                    <Image
                        source={
                            icons.find((icon) => icon.id === groupIconID)
                                ? icons.find((icon) => icon.id === groupIconID)
                                      .source
                                : icons[0].source
                        }
                        style={styles.groupIcon}
                    ></Image>
                    <Text style={styles.groupName}>{groupName}</Text>
                    <Text style={styles.locationSetForGroupText}>
                        Location set for this group:
                    </Text>
                    <Text
                        style={styles.locationTextForUser}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {locationToShow.includes(",")
                            ? locationToShow
                                  .substring(locationToShow.indexOf(",") + 1)
                                  .trim()
                            : ""}
                    </Text>
                    <Divider width={1} />

                    <View style={styles.radiusContainer}>
                        <Text style={styles.radiusLabel}>
                            Willing to travel (KM): {radius}
                        </Text>
                        <Slider
                            style={styles.slider}
                            minimumValue={1}
                            maximumValue={20}
                            thumbTintColor={"#f27575"}
                            minimumTrackTintColor={"#f27575"}
                            step={1}
                            value={radius}
                            onValueChange={handleRadiusChange}
                        />
                    </View>

                    <Divider width={1} />

                    <View>
                        <Text style={styles.priceLabel}>
                            Choose a price range
                        </Text>
                        <View style={styles.priceRangeContainer}>
                            <TouchableOpacity
                                style={[
                                    styles.priceRangeButton,
                                    selectedPriceRange === 1 &&
                                        styles.selectedPriceRange,
                                ]}
                                onPress={() => handlePriceRangeSelect(1)}
                            >
                                <FontAwesome
                                    name="dollar"
                                    size={16}
                                    color="black"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.priceRangeButton,
                                    selectedPriceRange === 2 &&
                                        styles.selectedPriceRange,
                                ]}
                                onPress={() => handlePriceRangeSelect(2)}
                            >
                                <View style={{ flexDirection: "row" }}>
                                    <FontAwesome
                                        name="dollar"
                                        size={16}
                                        color="black"
                                    />
                                    <FontAwesome
                                        name="dollar"
                                        size={16}
                                        color="black"
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.priceRangeButton,
                                    selectedPriceRange === 3 &&
                                        styles.selectedPriceRange,
                                ]}
                                onPress={() => handlePriceRangeSelect(3)}
                            >
                                <View style={{ flexDirection: "row" }}>
                                    <FontAwesome
                                        name="dollar"
                                        size={16}
                                        color="black"
                                    />
                                    <FontAwesome
                                        name="dollar"
                                        size={16}
                                        color="black"
                                    />
                                    <FontAwesome
                                        name="dollar"
                                        size={16}
                                        color="black"
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.priceRangeButton,
                                    selectedPriceRange === 4 &&
                                        styles.selectedPriceRange,
                                ]}
                                onPress={() => handlePriceRangeSelect(4)}
                            >
                                <View style={{ flexDirection: "row" }}>
                                    <FontAwesome
                                        name="dollar"
                                        size={16}
                                        color="black"
                                    />
                                    <FontAwesome
                                        name="dollar"
                                        size={16}
                                        color="black"
                                    />
                                    <FontAwesome
                                        name="dollar"
                                        size={16}
                                        color="black"
                                    />
                                    <FontAwesome
                                        name="dollar"
                                        size={16}
                                        color="black"
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Divider width={1} />

                    <TouchableOpacity
                        style={styles.checkInButton}
                        onPress={handleCheckinButtonPressed}
                    >
                        <Text style={styles.checkInButtonText}>Check In</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default UserPreferences;
