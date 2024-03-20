import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    leaderboardTitleText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 5,
    },
    crownIcon: {
        flex: 1,
        alignItems: "center",
        marginTop: -5,
    },
    podiumContainer: {
        position: "absolute",
        bottom: 20,
        alignItems: "center",
    },
    podiumCircleTop: {
        width: 140,
        height: 140,
        borderRadius: 100,
        borderWidth: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        borderColor: "rgba(242, 117, 117, 0.35)",
        position: "absolute",
    },
    podiumCircleImageTop: {
        top: 9.5,
        width: 120,
        height: 120,
        borderRadius: 100,
    },
    podiumCircleLower: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 25,
        borderColor: "rgba(242, 117, 117, 0.35)",
        position: "absolute",
    },
    podiumCircleImageLower: {
        top: 9.5,
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    podiumNumber: {
        position: "absolute",
        bottom: -20,
        alignSelf: "center",
    },
    leaderboardItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 50,
        backgroundColor: "rgba(242, 117, 117, 0.5)",
        borderRadius: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    leaderboardTextContainer: {
        flex: 1,
        marginLeft: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    leaderboardNumber: {
        marginRight: 5,
    },
    leaderboardItemText: {
        fontWeight: 500,
        fontSize: 18,
    },
});

export default styles;
