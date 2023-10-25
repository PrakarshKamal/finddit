import {NGROK_URL} from '../constants';
import axios from 'axios';

async function createNewGroup(groupName, groupIconID, groupAdminEmail, groupMembersEmails, votingDeadline, isActive, adminPreferences){
    await axios.post(`${NGROK_URL}/groups`, {groupName, groupIconID, groupAdminEmail, groupMembersEmails, votingDeadline, isActive, adminPreferences});
}