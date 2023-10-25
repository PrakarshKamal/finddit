import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    searchBar: {
      display : 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      backgroundColor: '#f0f0f0', // Background color of the search bar
      borderRadius: 10,
      paddingHorizontal: 10,
      marginHorizontal: 40,
      marginVertical : 30,
      marginTop: 10,
      alignContent:'center',
      borderWidth:1,
    },
    searchIcon: {
      marginRight: 10,
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center'
    },
    input: {
      flex: 1,
      height: 40,
      color: '#333', // Text color
    },
  });


  export default styles