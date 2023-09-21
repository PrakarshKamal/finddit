import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabNavigator from "./TabNavigator";
import RootNavigator from "./RootNavigator"
import LoginScreen from "./screens/LoginScreen";
import { AuthProvider } from "./hooks/useAuth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      <StatusBar style="auto" />
      <RootNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
