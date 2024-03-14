import axios from "axios";
import { NGROK_URL } from "../constants";

export async function getLeaderboard(groupID) {
    const ret = await axios.get(`${NGROK_URL}/leaderboard/${groupID}`);
    return ret.data;
}

export async function getRestaurantDataFromPlaceID(groupID, placeID) {
    return await axios.get(
        `${NGROK_URL}/leaderboard/get-place-info/${groupID}/${placeID}`
    );
}

module.exports = {
    getLeaderboard,
    getRestaurantDataFromPlaceID,
};
