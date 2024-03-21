import { NGROK_URL } from "../constants";
import axios from "axios";

async function createNewGroup(
    groupName,
    groupIconID,
    groupAdminEmail,
    groupMembersEmails,
    votingDeadline,
    isActive,
    adminPreferences
) {
    return await axios.post(`${NGROK_URL}/groups`, {
        groupName,
        groupIconID,
        groupAdminEmail,
        groupMembersEmails,
        votingDeadline,
        isActive,
        adminPreferences,
    });
}

async function getActiveGroupsForUser(userEmail) {
    return await axios.get(`${NGROK_URL}/groups/active-groups/${userEmail}`);
}

async function getInactiveGroupsForUser(userEmail) {
    await axios.get(`${NGROK_URL}/groups/inactive-groups/${userEmail}`);
}

export async function checkUserCheckedIn(groupID, userEmail) {
    const resp = await axios.get(
        `${NGROK_URL}/groups/check-if-user-checked-in/${groupID}/${userEmail}`
    );
    if (resp.data) {
        return resp.data;
    } else {
        return false;
    }
}

export async function userCheckIn(groupID, memberEmail, memberPreferences) {
    const resp = await axios.post(
        `${NGROK_URL}/groups/group-member-checkin-to-group`,
        {
            groupID,
            memberEmail,
            memberPreferences,
        }
    );
    return resp.status;
}
async function getUserDataForGroup(groupID, userEmail) {
    await axios.get(
        `${NGROK_URL}/groups/member-data-from-group/${groupID}/${userEmail}`
    );
}

async function getCheckedInUsersForGroup(groupID) {
    await axios.get(`${NGROK_URL}/groups/checked-in-members/${groupID}`);
}

async function userUsedSuperDislike(groupID, userEmail) {
    await axios.post(
        `${NGROK_URL}/groups/user-used-superdislike/${groupID}/${userEmail}`
    );
}

async function checkIfUserUsedSuperDislike(groupID, userEmail) {
    await axios.get(
        `${NGROK_URL}/groups/check-if-user-used-superdislike/${groupID}/${userEmail}`
    );
}

async function getCardDataFromGroup(groupID) {
    return await axios.get(`${NGROK_URL}/groups/group-card-data/${groupID}`);
}

async function getGroupMetadata(groupID) {
    await axios.get(`${NGROK_URL}/groups/group-metadata/${groupID}`);
}

export async function swipeOnRestaurant(groupID, restaurantID, swipeDirection) {
    await axios.post(
        `${NGROK_URL}/groups/swipe-on-restaurant/${groupID}/${restaurantID}/${swipeDirection}`
    );
    //right, left, up
}

export async function userFinishedVoting(groupID, userEmail) {
    await axios.post(
        `${NGROK_URL}/groups/user-finished-voting/${groupID}/${userEmail}`
    );
}

export async function checkIfUserFinishedVoting(groupID, userEmail) {
    const resp = await axios.get(
        `${NGROK_URL}/groups/check-if-user-finished-voting/${groupID}/${userEmail}`
    );
    return resp.data;
}

export async function getPlaceAddressFromLatLong(lat, long) {
    const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&location_type=ROOFTOP&result_type=street_address&key=AIzaSyA5sUNngPmqBGtRaYu2B9RZU6yshKW4StA`
    );
    return res.data.results[0]["formatted_address"];
}
module.exports = {
    createNewGroup,
    getCardDataFromGroup,
    getActiveGroupsForUser,
    userCheckIn,
    checkUserCheckedIn,
    swipeOnRestaurant,
    userFinishedVoting,
    checkIfUserFinishedVoting,
    getPlaceAddressFromLatLong,
};
