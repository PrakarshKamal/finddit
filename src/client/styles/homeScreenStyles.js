import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: 200, // Button width
      height: 200, // Button height
      borderWidth : 2 ,
      borderColor: "#f27575",
      borderRadius: 10, // Button border radius
      marginBottom: 20, // Spacing between buttons
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'black', // Text color
      fontSize: 18, // Text font size
      fontWeight: 'bold', // Text font weight
    },
  });

  export default styles