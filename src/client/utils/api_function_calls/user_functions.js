import {NGROK_URL} from '../constants';
import axios from 'axios';

async function sendSignUpRequest (firstName, lastName, email, iconID) {
    await axios.post(`${NGROK_URL}/users`, {email, firstName, lastName, iconID});
}

async function findUserByEmailOrName (emailOrName){
    const response =  await axios.get(`${NGROK_URL}/users/email-or-name/${emailOrName}`)
        console.log(response.data)
        return response.data
}

module.exports = {sendSignUpRequest, findUserByEmailOrName};