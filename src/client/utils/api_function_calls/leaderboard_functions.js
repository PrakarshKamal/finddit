import axios from "axios";
import { NGROK_URL } from "../constants";

export async function getLeaderboard(groupID) {
    const ret = await axios.get(`${NGROK_URL}/leaderboard/${groupID}`);
    return ret.data;
}

export async function getRestaurantDataFromPlaceID(groupID, placeID) {
    const ret = await axios.get(
        `${NGROK_URL}/leaderboard/get-place-info/${groupID}/${placeID}`
    );
    return ret.data;
}

const PLACE_DETAILS_URL =
    "https://maps.googleapis.com/maps/api/place/details/json?fields=url";
const API_KEY = process.env.GCP_KEY;

export async function getGoogleMapsLinkForPlaceID(placeID) {
    const res = await axios.get(
        `${PLACE_DETAILS_URL}&place_id=${placeID}&key=AIzaSyA5sUNngPmqBGtRaYu2B9RZU6yshKW4StA` // same API key as photo_functions.js
    );
    return res.data.result.url;
}

module.exports = {
    getLeaderboard,
    getRestaurantDataFromPlaceID,
    getGoogleMapsLinkForPlaceID,
};
