import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
    },
    
    nextButton: {
      position: 'absolute',
      bottom: 20, 
      right: 40, 
      backgroundColor: "#f27575",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    nextButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    iconGrid: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    
  });
  
  
  export default styles 
