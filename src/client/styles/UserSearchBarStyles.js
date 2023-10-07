import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    searchBar: {
      display : flex,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f0f0f0', // Background color of the search bar
      borderRadius: 5,
      paddingHorizontal: 10,
      marginTop: 10,
    },
    searchIcon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      height: 40,
      color: '#333', // Text color
    },
  });


  export default styles