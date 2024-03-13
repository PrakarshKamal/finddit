import axios from "axios";

async function getLeaderboard(groupID) {
    return await axios.get(`${NGROK_URL}/leaderboard/${groupID}`);
}

async function getRestaurantDataFromPlaceID(groupID, placeID) {
    return await axios.get(`${NGROK_URL}/leaderboard/get-place-info/${groupID}/${placeID}`);
}
