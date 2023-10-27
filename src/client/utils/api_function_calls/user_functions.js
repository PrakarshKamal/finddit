import {NGROK_URL} from '../constants';
import axios from 'axios';

async function sendSignUpRequest (firstName, lastName, email, iconID) {
    await axios.post(`${NGROK_URL}/users`, {email, firstName, lastName, iconID});
}

async function findUserByEmailOrName(emailOrName) {
    try {
      const response = await axios.get(`${NGROK_URL}/users/email-or-name/${emailOrName}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error
    }
  }
  

async function saveGoogleInfo (firstName, lastName, email, iconID) {
    try {
        const response = await axios.get(`${NGROK_URL}/users/email-or-name/${email}`)
        
        // Check if the response data contains user information
        if (response.data) {
            console.log("User exists");
        } else {
            sendSignUpRequest(firstName, lastName, email, iconID);
        }
    } catch (error) {
        console.error("An error occurred:", error);
        
    }
}

module.exports = {sendSignUpRequest, findUserByEmailOrName, saveGoogleInfo};