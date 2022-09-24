import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      alignSelf: 'stretch',
      height: 55,
      flexDirection: 'row', // row
      alignItems: 'center',
      justifyContent: 'space-between', // center, space-around
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: 'rgb(208, 9, 9)',
      shadowColor: "black",
      shadowOffset: {
        width: 1.00,
        height: 7.50
      },
      shadowOpacity: 0.12,
      shadowRadius: 6
    },
    textItem: {
      fontSize: 15,
      
      fontWeight: '500',
      color: 'white'
    },
    centerItem: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white'
    }
});

export default styles;