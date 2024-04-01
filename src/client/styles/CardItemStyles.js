import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 10,
        margin: 7,
    },
    image: {
        marginTop: 5,
        width: Dimensions.get("window").width - 60,
        height: Dimensions.get("window").height / 2.3,
        borderRadius: 10,
    },
    infoContainer: {
        padding: 10,
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    location: {
        marginTop: 3,
        fontSize: 20,
        color: "gray",
        marginBottom: -8,
    },
    operationalHours: {
        fontSize: 16,
        color: "gray",
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
    },
    rating: {
        fontSize: 28,
        color: "orange",
        marginRight: 5,
    },
    tagContainer: {
        flexDirection: "row",
        marginTop: 5,
    },
    vegTag: {
        minWidth: 60,
        minHeight: 30,
        textAlign: "center",
        borderRadius: 20,
        marginRight: 10,
        alignItems: "center", // Add this line
        justifyContent: "center", // Add this line
    },
    nonVegTag: {
        minWidth: 100,
        minHeight: 30,
        textAlign: "center",
        borderRadius: 20,
        marginRight: 10,
        alignItems: "center", // Add this line
        justifyContent: "center", // Add this line
    },
    thirdTag: {
        flexDirection: "row", // Add this line
        alignItems: "center", // Add this line
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 10,
    },
    fireTag: {
        marginLeft: -5,
        marginRight: 5,
    },
    boltTag: {
        marginLeft: -5,
        marginRight: 5,
    },
    tagText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
});

export default styles;
