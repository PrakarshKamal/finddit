import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    headingForProfileIcon: {
        color: "black",
        fontSize: 22,
        textAlign: "center",
        marginTop: 40,
        marginBottom: 30,
    },
    profileCircle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 6,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        borderColor: "rgba(242, 117, 117, 0.35)",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },
    circleBorder: {
        top: 10,
        right: 10,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "lightgray",
        position: "absolute",
        borderColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
    },
    plusIcon: {
        position: "absolute",
        color: "black",
    },
    textInputView: {
        flex: 1,
        flexDirection: "column",
    },
    groupNameLabel: {
        fontSize: 20,
        marginBottom: 10,
    },
    textInputView: {
        marginTop: 20,
        flex: 1,
        flexDirection: "column",
        width: Dimensions.get("window").width - 50,
    },
    textInput: {
        height: 40,
        fontSize: 20,
    },
    nextButton: {
        position: "relative",
        left: 110,
        bottom: 20,
    },
    headingForGroupName: {
        fontSize: 22,
        textAlign: "center",
        marginBottom: 20,
    },
    iconGrid: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        marginHorizontal: 6,
        marginVertical: 4,
        borderWidth: 2,
        borderColor: "transparent",
        padding: 5,
        borderRadius: 20,
    },
    image: {
        width: 110,
        height: 110,
    },
    profileIcon: {
        width: "100%",
        height: "100%",
    },
    iconText: {
        fontSize: 16,
    },
    selectedIcon: {
        borderRadius: 20,
        borderColor: "#f27575",
        borderWidth: 3,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 20,
    },
    selectButton: {
        backgroundColor: "#f27575",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginLeft: 40,
        marginBottom: 20,
    },
    cancelButton: {
        backgroundColor: "gray",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default styles;
