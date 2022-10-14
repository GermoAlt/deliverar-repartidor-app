import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      display: 'flex',
      flexDirection: 'column'
    },
    titleView: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    title: {
      flex: 8,
      fontSize: 22,
      fontWeight: '600'
    },
    content: {
      flex: 7,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      margin: 2
    },
    payment: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      display: 'flex',
      marign: 6,
      marginVertical: 3,
      height: 60,
      backgroundColor: 'rgba(208,171,171,0.10)'
    },
    paymentTextLayer: {
      width: '40%',
      alignItems: 'center'
    },
    paymentText: {
      fontSize: 16
    },
    paymentHeader: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    noIncomes: {
      fontSize: 15,
      fontWeight: '500',
      marginVertical: 6,
      textAlign: 'center'
    },
  });
  
export default styles;