import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      display: 'flex',
      flexDirection: 'column'
    },
    summary: {
      flex: 2,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 12.5,
      padding: 6,
      borderWidth: 2,
      borderColor: 'rgba(208, 109, 109, 0.85)',
      borderRadius: 8,
      backgroundColor: 'rgba(245,234,244,0.85)',
      shadowColor: "black",
      shadowOffset: {
        width: 15.00,
        height: 7.50
      },
      shadowOpacity: 0.22,
      shadowRadius: 6
    },
    content: {
      flex: 4,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },
    item: {
      width: '100%',
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      display: 'flex',
      marign: 6
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'rgba(0,0,0,0.8)'
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
      width: 90,
      height: 90,
      borderRadius: 50,
      marginTop: "5%",
    },
    userName: {
      fontSize: 22,
      margin: 10,
      fontWeight: 'bold',
      color: 'rgba(0,0,0,0.8)'
    }
  });
  
export default styles;