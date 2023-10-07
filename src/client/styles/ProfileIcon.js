import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    imageContainer: {
      width: 50, // Adjust the container width as needed
      height: 50, // Adjust the container height as needed
      borderRadius: 50, // Make it circular by setting half of the width and height as border radius
      overflow: 'hidden', // Ensure the image is clipped to the container
      marginBottom: 10, // Spacing between image and user name
    },
    userImage: {
      width: '50%',
      height: '50%',
      resizeMode: 'cover',
      borderRadius: 50, // Scale and crop the image to fit the container
    },
    userName: {
      fontSize: 18, // Adjust the font size as needed
      fontWeight: 'bold',
    },
  });

  export default styles