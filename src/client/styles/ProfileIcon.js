import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    userName: {
        fontSize: 18, // Adjust the font size as needed
    },
    iconContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#fbe1e5",
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    cancelIcon: {
        top: 0,
        left: 32,
        borderRadius: 15,
        position: "absolute",
        borderColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;
