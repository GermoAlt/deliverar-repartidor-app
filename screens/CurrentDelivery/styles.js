import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      backgroundColor: 'rgba(208,9,9,0.05)'
    },
    currentDelivery: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: "2.5%",
      width: '95%',
      borderWidth: 2,
      borderColor: 'rgb(208, 9, 9)',
      borderRadius: 17.5,
      backgroundColor: 'rgba(208,171,171,0.06)',
    },
    item: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleView: {
      margin: 15
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    orderList: {
      alignItems: 'center'
    },
    listElement: {
      display: 'flex',
      flexDirection: 'row',
      marginVertical: 6,
      height: 120
    },
    noOrders: {
      fontSize: 14,
      marginVertical: 6,
      textAlign: 'center'
    }
  });
  
export default styles;