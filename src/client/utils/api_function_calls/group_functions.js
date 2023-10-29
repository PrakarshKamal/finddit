import {NGROK_URL} from '../constants';
import axios from 'axios';

async function createNewGroup(groupName, groupIconID, groupAdminEmail, groupMembersEmails, votingDeadline, isActive, adminPreferences){
    return await axios.post(`${NGROK_URL}/groups`, {groupName, groupIconID, groupAdminEmail, groupMembersEmails, votingDeadline, isActive, adminPreferences});
}

module.exports = {createNewGroup};