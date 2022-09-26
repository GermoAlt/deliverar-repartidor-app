import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'rgba(208,9,9,0.05)'
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
    orderDetails: {
        flex: 6,
        width: '100%',
    },
    orderDetailsContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 8
    },
    detailRow: {
        flex: 1,
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 12,
        marginVertical: 4,
        width: '95%',
    },
    orderDetailRow: {
        flex: 6,
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginHorizontal: 12,
        marginVertical: 4,
        width: '100%',
    },
    textDetailTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    textDetail: {
        fontSize: 16,
        fontWeight: '500'
    },
    orderElements: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    orderElement: {
        flex: 1,
        marginLeft: 8
    },
    buttonLayer: {
        flex: 2,
        width: '85%',
    },
    noOrders: {
        fontSize: 14,
        marginVertical: 6,
        textAlign: 'center'
    }

  });
  
export default styles;