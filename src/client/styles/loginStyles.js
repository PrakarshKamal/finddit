import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   justifyContent: 'flex-start',
    //   alignItems: 'center',
    // },
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 10,
    },
    input: {
      width: '80%',
      marginVertical: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: 'gray',
    },
    titleText: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#f27575'
    },
    topHeadingContainer: {
      marginTop: 50,
      alignItems: 'center',
    },
    middleContainer: {
      marginTop: 100,
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

export default styles;