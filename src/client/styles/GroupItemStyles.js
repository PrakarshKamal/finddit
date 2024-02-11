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
    activeContainer: {
        borderColor: "#50C878",
        borderWidth: 3,
    },
    expiredContainer: {
        borderColor: "#636363",
        borderWidth: 3,
    },
    iconContainer: {
        width: 130,
        height: 130,
    },
    groupIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    leftContainer: {
        flex: 1,
    },
    groupName: {
        fontSize: 20,
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
