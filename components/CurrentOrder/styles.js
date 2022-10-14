import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    detailsCard: {
      flex: 1,
      padding: "5%",
    },
    surface: {
      margin: 8,
      padding: 6,
      height: "90%",
      width: "95%",
      backgroundColor: 'rgba(208,9,9,0.85)',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardLayout: {
      flexDirection: 'row',
      flex: 1
    },
    cardData: {
      flex: 2.5,
      padding: 5,
      justifyContent: 'space-around'
    },
    franchise: {
      color: "white",
      fontSize: 20,
      fontWeight: 'bold'
    },
    address: {
      color: "white",
      fontSize: 16,
      fontWeight: '500'
    },
    cardDetails: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    details: {
      textAlign: 'center',
      color: "white",
      fontSize: 13
    }
  });
  
export default styles;