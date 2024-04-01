import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
    },

    groupName: {
        display: "flex",
        flex: 1,
        alignContent: "center",
        alignItems: "center",
    },

    nextButton: {
        position: "relative",
        left: 110,
        bottom: 40,
    },

    iconGrid: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;
