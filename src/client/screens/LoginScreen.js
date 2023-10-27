import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import styles from "../styles/loginStyles";
import { Divider } from "@rneui/themed";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import useAuth from "../hooks/useAuth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FIREBASE_AUTH, FIREBASE_GOOGLE_PROVIDER } from "../FirebaseConfig";

function LoginScreen() {
  const [email, setEmail] = useState(""); //useState<string>('') when changing to ts
  const [password, setPassword] = useState(""); //useState<string>('') when changing to ts
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {signInUser} = useAuth();
  const {signInWithGoogle} = useAuth();

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInUser(email, password);
      console.log("User logged in:", response);
      //navigation.navigate("Signup");
    } catch (error) {
      console.log(error);
      //alert('Registration failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
    <View style={styles.container}>
      <View style={styles.topHeadingContainer}>
        <Text style={styles.titleText}>Login</Text>
      </View>
      <View style={styles.middleContainer}>
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          style={styles.input}
        />
        <Pressable onPress={null}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </Pressable>
        <Pressable style={styles.logInButton} onPress={signIn}>
          <Text style={styles.logInButtonText}>Login</Text>
        </Pressable>

        <Pressable style={styles.logInGoogleButton} onPress={signInWithGoogle}>
          <Image
            style={styles.googleIcon}
            source={require("../assets/google-icon.png")}
          />
          <Text style={styles.logInGoogleText}>Log in with Google</Text>
        </Pressable>
      </View>
      <Text style={styles.noAccountText}>Don't have an account? </Text>
      <Pressable onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </Pressable>
    </View>
    </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}


export default LoginScreen;
