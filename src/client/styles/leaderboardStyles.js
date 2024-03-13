import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
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
    },
    podiumContainer: {
        position: "absolute",
        bottom: 20,
        alignItems: "center",
    },
    podiumCircle: {
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
    podiumCircleLower: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        borderColor: "rgba(242, 117, 117, 0.35)",
        position: "absolute",
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
