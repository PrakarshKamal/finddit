import { View, Text } from 'react-native'
import  { createContext, useContext, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { FIREBASE_AUTH, FIREBASE_GOOGLE_PROVIDER } from "../FirebaseConfig";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import { useEffect } from 'react';

const auth = FIREBASE_AUTH;
const provider = FIREBASE_GOOGLE_PROVIDER
const AuthContext = createContext({});


GoogleSignin.configure({
    webClientId: '1086803235540-nn0ttmhmamrc9ur03bqj4jpml556p6db.apps.googleusercontent.com',
    offlineAccess: true,
    scopes: ["profile", "email"],
    permissions: ["public_profile", "email", "gender", "location"],
  });

export const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const signInUser = async(email , password) => {
        try{
        const response = await signInWithEmailAndPassword(auth, email, password);
        setUser(response.user)

        // save the user to Async storage
        await AsyncStorage.setItem('userData', JSON.stringify(response.user));

        return response
        }catch(error){
            throw error
        }
    }

    const signUpUser = async(email , password) => {
        try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        setUser(response.user)

        // save the user to Async storage
        await AsyncStorage.setItem('userData', JSON.stringify(response.user));

        return response
        }catch(error){
            throw error
        }
    }
    const signInWithGoogle = async () => {
      try {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
    
        // Create a Google credential with the token
        const googleCredential = GoogleAuthProvider.credential(idToken);
        // Sign-in the user with the credential
        const user_sign_in = await signInWithCredential(auth, googleCredential);

        // Save the user data to AsyncStorage
        await AsyncStorage.setItem('userData', JSON.stringify(user_sign_in.user));

        //await storeUserData(user_sign_in.user);
        setUser(user_sign_in.user);

      } catch(error) {
        console.log("Google sign-in error", error);
      }
    }

    // Function to load user data from AsyncStorage
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Error loading user data from AsyncStorage:', error);
      }
    }


    const signOutUser = async() => {
        try{
        await signOut(auth);

          await AsyncStorage.removeItem('userData');

          setUser(null)
        } catch(error){
            throw error
        }
    }

    // Load user data when the app starts
    useEffect(() => {
      loadUserData();
    }, []);

  return (
    <AuthContext.Provider 
    value={{
        user : user ,
        signInUser,
        signUpUser,
        signOutUser,
        signInWithGoogle
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
    return useContext(AuthContext)
}