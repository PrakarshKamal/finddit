import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: "center",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
    },
    loadingText: {
        marginTop: 150,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: "gray",
    },
    activeContainer: {
        borderColor: "#29bf12",
        borderWidth: 5,
    },
    expiredContainer: {
        borderColor: "#a5a5a5",
        borderWidth: 5,
    },
    iconContainer: {
        marginLeft: -10,
        width: 110,
        height: 110,
    },
    groupIcon: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    leftContainer: {
        flex: 1,
    },
    groupName: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12,
    },
    createdBy: {
        fontSize: 16,
        color: "gray",
    },
    expiresIn: {
        fontSize: 16,
        color: "gray",
    },
});

export default styles;
