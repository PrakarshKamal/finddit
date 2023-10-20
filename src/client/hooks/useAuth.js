import { View, Text } from 'react-native'
import  { createContext, useContext, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { FIREBASE_AUTH, FIREBASE_GOOGLE_PROVIDER } from "../FirebaseConfig"; // Import the Firebase configuration
import * as Google from "expo-google-app-auth";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const auth = FIREBASE_AUTH;
const provider = FIREBASE_GOOGLE_PROVIDER
const AuthContext = createContext({});

const config = {
    webClientId: "1086803235540-nn0ttmhmamrc9ur03bqj4jpml556p6db.apps.googleusercontent.com",
    scopes: ["profile", "email"],
    permissions: ["public_profile", "email", "gender", "location"],
}

GoogleSignin.configure({
    webClientId: '1086803235540-nn0ttmhmamrc9ur03bqj4jpml556p6db.apps.googleusercontent.com',
    offlineAccess: true,
  });

export const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const signInUser = async(email , password) => {
        try{
        const response = await signInWithEmailAndPassword(auth, email, password);
        setUser(response.user)
        return response
        }catch(error){
            throw error
        }
    }

    const signUpUser = async(email , password) => {
        try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        setUser(response.user)
        return response
        }catch(error){
            throw error
        }
    }
    const signInWithGoogle = async () => {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
    
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
      // Sign-in the user with the credential
      const user_sign_in = auth().signInWithCredential(googleCredential);
      user_sign_in.then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      })
    }

    const signOutUser = async() => {
        try{
        signOut(auth).then(() => {
            setUser(null)
        })
        }catch(error){
            throw error
        }
    }
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