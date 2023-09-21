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
} from "react-native";
import { FIREBASE_AUTH } from "../FirebaseConfig"; // Import the Firebase configuration
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/loginStyles";
import { Divider } from "@rneui/themed";

function LoginScreen() {
  const [email, setEmail] = useState(""); //useState<string>('') when changing to ts
  const [password, setPassword] = useState(""); //useState<string>('') when changing to ts
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", response);
      navigation.navigate("App");
    } catch (error) {
      console.log(error);
      //alert('Registration failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // ... rest of the component ...

  return (
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

        <Pressable style={styles.logInGoogleButton} onPress={null}>
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
  );
}

// ... rest of the component ...

export default LoginScreen;
