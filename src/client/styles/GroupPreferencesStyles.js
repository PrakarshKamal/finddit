import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    groupName: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign:'center'
    },
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 8,
    },
    input: {
      fontSize: 16,
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 8,
    },
    slider: {
      width: '100%',
    },
    priceRangeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    priceRangeButton: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      borderRadius: 50,
      alignItems: 'center',
      margin:2
    },
    selectedPriceRange: {
      backgroundColor: "#f27575", 
    },
    priceRangeText: {
      fontSize: 16,
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
    toggleButtonContainer: {
      flexDirection: 'column',
    },
    
  });

  export default styles