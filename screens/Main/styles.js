import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
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
      backgroundColor: 'rgba(208,9,9,0.09)',
    },
    item: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  
export default styles;