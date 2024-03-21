import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    Modal,
    FlatList,
} from "react-native";
import React, { useState } from "react";
import styles from "../../styles/GroupInnit";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from "@rneui/themed";
import { icons } from "../../utils/constants";

const GroupInnit = () => {
    const navigation = useNavigation();
    const [groupName, setGroupName] = useState("");
    const [profileIconId, setProfileIconId] = useState(null);
    const [isProfileIconModalVisible, setProfileIconModalVisible] =
        useState(false);
    const [selectedIcon, setSelectedIcon] = useState(null);

    // Function to handle icon selection
    const handleIconSelect = (icon) => {
        setSelectedIcon(icon.id);
    };

    // Function to handle cancel button press
    const handleCancelPress = () => {
        setProfileIconModalVisible(false);
    };

    // Function to handle select button press
    const handleSelectPress = () => {
        if (selectedIcon) {
            console.log(`Selected Icon: ${selectedIcon.source}`);
            setProfileIconModalVisible(false);
        }
    };

    const renderIconItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.imageContainer,
                item?.id === selectedIcon && styles.selectedIcon,
            ]}
            onPress={() => handleIconSelect(item)}
        >
            <Image source={item.source} style={styles.image} />
        </TouchableOpacity>
    );

    function handleProfileIconPressed() {
        setProfileIconModalVisible(true);
    }

    function handleNextButtonPressed() {
        if (groupName != "" && selectedIcon) {
            navigation.navigate("AddUsers", {
                groupIcon: selectedIcon,
                groupName: groupName,
            });
        } else {
            alert("Enter a group name and select a profile icon");
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <KeyboardAwareScrollView>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={isProfileIconModalVisible}
                        onRequestClose={() => {
                            setProfileIconModalVisible(
                                !isProfileIconModalVisible
                            );
                        }}
                    >
                        <SafeAreaView style={styles.container}>
                            <Text style={styles.headingForProfileIcon}>
                                Pick a profile icon for your group
                            </Text>

                            <View style={styles.iconGrid}>
                                <FlatList
                                    data={icons}
                                    renderItem={renderIconItem}
                                    keyExtractor={(item) => item.id}
                                    numColumns={2}
                                />
                            </View>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    onPress={handleCancelPress}
                                    style={styles.cancelButton}
                                >
                                    <Text style={styles.buttonText}>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={handleSelectPress}
                                    style={styles.selectButton}
                                >
                                    <Text style={styles.buttonText}>
                                        Select
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </SafeAreaView>
                    </Modal>
                    <Text style={styles.headingForGroupName}>
                        Set the group name and choose a profile icon
                    </Text>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={handleProfileIconPressed}>
                            <View style={styles.profileCircle}>
                                {selectedIcon ? (
                                    <Image
                                        style={[
                                            styles.profileIcon,
                                            { borderRadius: 100 },
                                        ]}
                                        source={
                                            icons.find(
                                                (icon) =>
                                                    icon.id === selectedIcon
                                            ).source
                                        }
                                    />
                                ) : (
                                    <View style={styles.circleBorder}>
                                        <Entypo
                                            name="plus"
                                            size={20}
                                            style={styles.plusIcon}
                                        />
                                    </View>
                                )}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textInputView}>
                        <Text style={styles.groupNameLabel}>GROUP NAME</Text>
                        <TextInput
                            placeholder="Enter text here"
                            style={styles.textInput}
                            value={groupName}
                            onChangeText={(text) => {
                                setGroupName(text);
                            }}
                        />
                        <Divider width={1} />
                    </View>
                </KeyboardAwareScrollView>
                <TouchableOpacity onPress={handleNextButtonPressed}>
                    <MaterialCommunityIcons
                        name="arrow-right-circle"
                        size={80}
                        color="#F27575"
                        style={styles.nextButton}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default GroupInnit;
