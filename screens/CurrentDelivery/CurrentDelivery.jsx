import React from 'react';
import { Text, View} from 'react-native';
import CurrentOrder from '../../components/CurrentOrder/CurrentOrder';
import styles from './styles';

const renderDelivery = (item) => {
  return (
    <View key={item.orderId} style={styles.listElement} >
      <CurrentOrder style={{flex: 1}} delivery={item}/>
    </View>
  );
}

const CurrentDelivery = ({delivery}) => {
    return (
      <View style={styles.container}>
        <View style={styles.titleView}>
            <Text style={styles.title}>Entrega En Curso</Text>
        </View>
        <View style={{width: "100%"}} >
            {delivery ?
                renderDelivery(delivery)
                : 
                ( <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                    <Text style={styles.noOrders}>-- Error al obtener datos del envío en curso --</Text>
                </View> )
            }
        </View>
      </View>
    );
}

export default CurrentDelivery;