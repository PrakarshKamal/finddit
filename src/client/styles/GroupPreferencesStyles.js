import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    map: {
        width: "100%",
        height: "100%",
    },
    setPreferencesText: {
        textAlign: "center",
        fontSize: 22,
        marginTop: -15,
        marginBottom: 30,
    },

    locationSetForGroupText: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 10,
    },

    locationTextForUser: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20,
        fontWeight: "bold",
        color: "#3685FC",
    },
    groupName: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 20,
        textAlign: "center",
    },
    groupIcon: {
        alignSelf: "center",
        height: 100,
        width: 100,
        borderColor: "#f27575",
        borderWidth: 3,
        borderRadius: 50,
    },
    locationContainer: {
        marginTop: 20,
        marginBottom: 10,
    },
    locationLabel: {
        fontSize: 18,
        marginBottom: 8,
    },
    radiusContainer: {
        marginTop: 20,
        marginBottom: 15,
    },
    radiusLabel: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        fontSize: 16,
        borderWidth: 1,
        width: Dimensions.get("window").width - 50,
        borderColor: "transparent",
    },
    slider: {
        width: "100%",
    },
    priceRangeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    priceLabel: {
        fontSize: 18,
        marginBottom: 8,
        marginTop: 20,
    },
    priceRangeButton: {
        flex: 1,
        borderColor: "#rgba(242, 117, 117, 0.35)",
        padding: 10,
        borderWidth: 4,
        borderRadius: 100,
        alignItems: "center",
        margin: 2,
    },
    selectedPriceRange: {
        backgroundColor: "#f27575",
    },
    priceRangeText: {
        fontSize: 16,
    },
    checkInButton: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "#f27575",
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 5,
    },
    checkInButtonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    nextButton: {
        position: "absolute",
        bottom: 20,
        right: 40,
        backgroundColor: "#f27575",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    nextButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    toggleButtonContainer: {
        flexDirection: "column",
    },
    openNowSwitchLabel: {
        fontSize: 18,
        marginTop: 16,
    },
    openNowSwitch: {
        marginTop: 16,
    },
    googlePlacesInput: {
        container: {
            flex: 0,
            position: "absolute",
            width: "100%",
            zIndex: 1,
            backgroundColor: "white",
        },
        listView: {
            backgroundColor: "white",
        },
        textInput: {
            fontSize: 16,
            borderWidth: 2,
            borderColor: "gray",
            paddingHorizontal: 10,
            marginTop: 10,
            maxwidth: "50%",
        },
    },
});

export default styles;
