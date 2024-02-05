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

async function checkUserCheckedIn(groupID, userEmail) {
    await axios.get(
        `${NGROK_URL}/groups/check-if-user-checked-in/${groupID}/${userEmail}`
    );
}

async function userCheckIn(groupID, memberEmail, memberPreferences) {
    await axios.post(`${NGROK_URL}/groups/group-member-checkin-to-group`, {
        groupID,
        memberEmail,
        memberPreferences,
    });
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

module.exports = {
    createNewGroup,
    getCardDataFromGroup,
    getActiveGroupsForUser,
};
