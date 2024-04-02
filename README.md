# Finddit



## Getting started

Finddit is a React Native developed app using the expo development package. To get the app up and running, the user needs to start the `client`, `backend` and `ngrok`.

### General Instructions

- An Android/IOS device with the [Expo Go](https://apps.apple.com/us/app/expo-go/id982107779) app installed.
- Ensure the device is connected to the same internet as the laptop.
- A machine with the cloned Finddit repository.
- Install project dependencies using `npm i` command.

### Client 

To run the client, run the following command from `src/client` dir

`expo start`

The user will see a QR code which can be scanned by the users device to launch the app inside of the Expo Go app.

### Backend 

To run the backend, run the following command from the `src/backend` dir

`npm run start`


### Ngrok

Since our services are run locally, to create a bridge between the frontend and the backend, we expose the localhost backend through a NGROK tunnel.

To use NGROK, install [NGROK](https://ngrok.com/) on the machine and run the following command (ensure this is run after the backend is running): 

`ngrok http 3000`

The URL returned by this command needs to be updated under `src/client/constants.js`


## Final

You're all set to use the app. Hope you Finddit!

![](https://lh3.google.com/u/0/d/1sY9ylzR5fziGLH-W-g15jxCZHnPlz9we=w2940-h1606-iv2)





