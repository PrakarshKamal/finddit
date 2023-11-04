import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 10,
      margin: 10,
      alignItems: 'center',
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 5,
    },
    iconContainer: {
      marginRight: 10,
    },
    groupIcon: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    textContainer: {
      flex: 1,
    },
    groupName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    createdBy: {
      fontSize: 14,
      color: 'gray',
    },
    expiresIn: {
      fontSize: 14,
      color: 'gray',
    },
  });


export default styles