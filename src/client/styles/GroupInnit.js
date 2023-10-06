import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
    },
    circularImage: {
      width: 200, // Adjust the image width as needed
      height: 200, // Adjust the image height as needed
      borderRadius: 100, // Make it circular by setting half of the width and height as border radius
      marginBottom: 20, // Spacing between image and text input
    },
    textInputView:{
      flex:1,
      flexDirection:'column'

    },
    textInput: {
      width: '100%', // Take up full width
      height: 40, // Adjust the height as needed
      borderWidth: 1,
      borderColor: 'gray',
      paddingHorizontal: 10,
      marginBottom: 20, // Spacing between text input and button
    },
    nextButton: {
      position: 'absolute',
      bottom: 20, // Adjust the distance from the bottom as needed
      right: 40, // Adjust the distance from the right as needed
      backgroundColor: 'blue', // Button background color
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    nextButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default styles