import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getLeaderboard } from "../utils/api_function_calls/leaderboard_functions";

const LeaderBoard = ({ route }) => {
    const { groupID } = route.params;
    const [leaderboard, setleaderboard] = useState([]);
    const fetchLeaderBoard = async () => {
        const LeaderBoard = await getLeaderboard(groupID);
        setleaderboard(LeaderBoard);
        console.log(LeaderBoard);
    };
    useEffect(() => {
        fetchLeaderBoard();
    }, []);

    return (
        <View>
            <Text
                style={{
                    marginTop: 100,
                    textAlign: "center",
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "gray",
                }}
            >
                Leader board will be displayed here
            </Text>
        </View>
    );
};

export default LeaderBoard;
