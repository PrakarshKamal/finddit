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
        width: Dimensions.get("window").width - 70,
        height: Dimensions.get("window").height / 2.3,
        borderRadius: 10,
    },
    infoContainer: {
        padding: 10,
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    location: {
        marginTop: 3,
        fontSize: 22,
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
        marginBottom: 10,
    },
    rating: {
        fontSize: 28,
        color: "orange",
        marginRight: 5,
    },
    tagContainer: {
        flexDirection: "row",
        marginTop: 3,
    },
    tag: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 15,
    },
    tagText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
});

export default styles;
