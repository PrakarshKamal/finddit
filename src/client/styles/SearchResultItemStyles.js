import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "stretch",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    rowContainer: {
        width: 300,
        flexDirection: "row",
        alignItems: "center",
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
    },
    avatarIcon: {
        width: 60,
        height: 60,
        borderRadius: 25,
        marginRight: 10,
        marginTop: 10,
    },
    firstName: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
    },
    lastName: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
    },
    email: {
        fontSize: 16,
        color: "rgba(0, 0, 0, 0.5)",
        marginLeft: 72,
        marginTop: -20,
    },
});
export default styles;
