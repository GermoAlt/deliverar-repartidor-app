import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      display: 'flex',
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
      fontSize: 20,
      fontWeight: 'bold'
    },
    orderList: {
      display: 'flex',
      width: "100%"
    }
  });
  
export default styles;