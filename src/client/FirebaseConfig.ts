// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5sUNngPmqBGtRaYu2B9RZU6yshKW4StA",
  authDomain: "finddit-18aa3.firebaseapp.com",
  projectId: "finddit-18aa3",
  storageBucket: "finddit-18aa3.appspot.com",
  messagingSenderId: "1086803235540",
  appId: "1:1086803235540:web:0b033a852363904e6b6141"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_GOOGLE_PROVIDER = new GoogleAuthProvider();

// IOS: 1086803235540-foi437so0m2616jgu30nq0irq4v3h2pd.apps.googleusercontent.com
// android: FF:B1:5E:F5:84:5F:C2:B8:15:AB:52:EA:D9:A7:9A:A6:1F:49:C6:9B
// 1086803235540-d4juseob9paphchgd8go08up0q5t9qqj.apps.googleusercontent.com
