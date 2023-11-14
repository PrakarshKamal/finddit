import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        flex :1 ,
      backgroundColor: 'white',
      borderRadius: 10,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3,
    },
    image: {
      width: '100%',
      height: 150,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    infoContainer: {
      padding: 10,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    location: {
      fontSize: 16,
      color: 'gray',
    },
    operationalHours: {
      fontSize: 16,
      color: 'gray',
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    rating: {
      fontSize: 16,
      color: 'orange',
      marginRight: 5,
    },
  });
  
  export default styles
