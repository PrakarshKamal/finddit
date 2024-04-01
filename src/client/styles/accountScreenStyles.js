import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    accountDetailsText: {
        fontSize: 30,
        color: "rgba(0, 0, 1, 0.7)",
    },
    userNameText: {
        fontSize: 28,
        fontWeight: 600,
        marginBottom: 20,
    },
    userEmailText: {
        fontSize: 24,
        fontWeight: 600,
        marginBottom: 20,
        color: "#3685FC",
    },

    signOutButton: {
        width: "50%",
        padding: 15,
        borderRadius: 30,
        backgroundColor: "#f27575",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40,
        top: 40,
    },
    signOutButtonText: {
        color: "white",
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
    },
    avatarIcon: {
        width: 300,
        height: 300,
        borderRadius: 50,
        marginBottom: 10,
        marginTop: 10,
    },
});

export default styles;
