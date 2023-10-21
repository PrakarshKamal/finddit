import {NGROK_URL} from '../constants';
import axios from 'axios';

async function sendSignUpRequest (firstName, lastName, email, iconID) {
    await axios.post(`${NGROK_URL}/users`, {email, firstName, lastName, iconID});
}

async function findUserByEmailOrName (emailOrName){
    await axios.get(`${NGROK_URL}/users/email-or-name/${emailOrName}`)
    .then(function (response) {
        console.log(response.data);
    })
}

module.exports = {sendSignUpRequest, findUserByEmailOrName};