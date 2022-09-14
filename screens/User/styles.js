import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column'
    },
    item: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    userInfoContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    userTitle: {
      fontSize: 35,
      fontWeight: 'bold',
      marginBottom: 20
    },
    userImage: {
      width: 100,
      heigth: 100,
      borderRadius: 50
    },
    userName: {
      fontSize: 20,
      fontWeight: 'bold'
    }
  });
  
export default styles;