import { StyleSheet, Dimensions, Platform } from "react-native";

const screenHeight = Dimensions.get("window").height;
const bottomTabHeight = 50;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 40,
    },
    groupIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#f27575",
        alignSelf: "left",
    },
    groupName: {
        marginLeft: 5,
        textAlign: "center",
        alignSelf: "center",
        fontSize: 30,
        fontWeight: "bold",
    },
    card: {
        maxHeight:
            Platform.OS === "ios"
                ? screenHeight - bottomTabHeight - 165
                : screenHeight * 0.8,
        marginTop: -50,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: "#f27575",
        borderWidth: 2,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
    },
});

export default styles;
