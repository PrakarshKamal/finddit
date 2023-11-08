import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        maxHeight: 350,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: "#f27575",
        borderWidth: 1,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
    },
});

export default styles;
