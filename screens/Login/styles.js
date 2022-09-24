import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexGrowth: 1,
    },
    formView: {
      flex: 2,
      padding: 32,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkbox: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
    },
    registerView: {
      flexDirection: 'column',
      marginTop: 20,
    },
    textInput: {
      marginVertical: 5,
      width: '100%',
    },
    item: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    socialLogin: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      alignSelf: 'stretch'
    },  
    title: {
      fontSize: 28,
      fontWeight: 'bold'
    }
  });
  
export default styles;