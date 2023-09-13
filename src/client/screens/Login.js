import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig'; // Import the Firebase configuration
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from "@react-navigation/native";

function LoginScreen() {
  const [email, setEmail] = useState(''); //useState<string>('') when changing to ts
  const [password, setPassword] = useState(''); //useState<string>('') when changing to ts
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', response);
      navigation.navigate("App");
    } catch (error) {
      console.log(error);
      //alert('Registration failed: ' + error.message);
    } finally {
        setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', response);
      navigation.navigate("App");
    } catch (error) {
      console.log(error);
      //alert("Registration failed: " + error.message);
    } finally {
        setLoading(false);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: '80%',
      marginVertical: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: 'gray',
    },
  });

  // ... rest of the component ...

  return (
    <View style={styles.container}>
        <KeyboardAvoidingView behavior = "padding">
            <Text>Login</Text>
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
            <Button title="Login" onPress={signIn} />
            <Button title="Create Account" onPress={signUp} />
        </KeyboardAvoidingView>
    </View>
  );
}

// ... rest of the component ...

export default LoginScreen;
