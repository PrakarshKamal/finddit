import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Switch,
} from "react-native";
import React, { useState } from "react";
import styles from "../../styles/GroupPreferencesStyles";
import Slider from "@react-native-community/slider";
import useAuth from "../../hooks/useAuth";
import {
    createNewGroup,
    getCardDataFromGroup,
} from "../../utils/api_function_calls/group_functions";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";

const GroupPreferences = ({ route, navigation }) => {
    const { groupName, groupIcon, groupMembers } = route.params;
    const [location, setLocation] = useState("");
    const admin = useAuth();
    const [radius, setRadius] = useState(5); // Default radius value
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [openNow, setOpenNow] = useState(true);
    const [groupDeadLine, setGroupDeadLine] = useState(24);
    const [isActive, setIsActive] = useState(true);

    const handleRadiusChange = (value) => {
        setRadius(value);
    };

    const handlePriceRangeSelect = (priceRange) => {
        setSelectedPriceRange(priceRange);
    };
    const handleGenerateButtonPressed = async () => {
        if (!radius || !selectedPriceRange) {
            alert("please enter valid fields");
            return;
        }
        const adminPreferences = {
            latitude: 43.260838906356824,
            longitude: -79.91288781166078,
            radius: radius * 10000,
            keyword: "restaurant",
            maxPrice: selectedPriceRange,
            minPrice: 1,
            openNow: openNow,
        };
        const groupMembersEmails = groupMembers.map((user) => user.email);
        const res = await createNewGroup(
            groupName,
            groupIcon,
            admin.user.email,
            groupMembersEmails,
            groupDeadLine,
            isActive,
            adminPreferences
        );
        if (res.data) {
            const groupId = res.data;
            const cardData = await getCardDataFromGroup(groupId);
            console.log(cardData.data);
            const group = {
                groupName: groupName,
                groupId: groupId,
                cardData: cardData.data,
                groupIcon: groupIcon,
                groupMembers: groupMembers,
                groupAdmin: admin.user.email,
                groupDeadLine: groupDeadLine,
                isActive: isActive,
                adminPreferences: adminPreferences,
            };
            navigation.navigate("GroupCreated", group);
        } else {
            alert("Something went wrong");
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.groupName}>{groupName}</Text>

            <View style={styles.locationContainer}>
                <Text style={styles.locationLabel}>LOCATION</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter location"
                    value={location}
                    onChangeText={(text) => setLocation(text)}
                />
            </View>

            <Divider width={1} />

            <View style={styles.radiusContainer}>
                <Text style={styles.radiusLabel}>RADIUS (KM): {radius}</Text>
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
                <Text style={styles.priceLabel}>PRICE RANGE</Text>
                <View style={styles.priceRangeContainer}>
                    <TouchableOpacity
                        style={[
                            styles.priceRangeButton,
                            selectedPriceRange === 1 &&
                                styles.selectedPriceRange,
                        ]}
                        onPress={() => handlePriceRangeSelect(1)}
                    >
                        <FontAwesome name="dollar" size={16} color="black" />
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

            <View style={styles.toggleButtonContainer}>
                <Text style={styles.openNowSwitchLabel}>OPEN NOW</Text>
                <Switch
                    style={styles.openNowSwitch}
                    trackColor={{ false: "", true: "#f27575" }}
                    value={openNow}
                    onValueChange={() => setOpenNow(!openNow)}
                />
            </View>
            <TouchableOpacity
                style={styles.nextButton}
                onPress={handleGenerateButtonPressed}
            >
                <Text style={styles.nextButtonText}>Generate</Text>
            </TouchableOpacity>
        </View>
    );
};

export default GroupPreferences;
