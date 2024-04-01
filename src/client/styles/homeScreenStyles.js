import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    actionButton: {
        width: 200,
        height: 200,
        borderWidth: 3,
        borderColor: "#f27575",
        borderRadius: 15,
        marginBottom: 30,
        justifyContent: "center",
        alignItems: "center",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        backgroundColor: "white",
    },
    buttonText: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
    },

    createSessionIcon: {
        position: "relative",
        bottom: 0,
        top: 20,
    },

    joinSessionIcon: {
        bottom: 0,
        top: 20,
        right: 5,
    },
});

export default styles;
