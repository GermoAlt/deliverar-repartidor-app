import React from 'react';
import { View, TouchableOpacity } from 'react-native'
import { Surface, Text } from 'react-native-paper'
import CustomButton from '../../../components/CustomButton/CustomButton';
import styles from './styles';

/*
    <View style={styles.detailsCard}>
        <Text style={{textAlign: 'center'}}>No has aceptado entregas aún!</Text>
        <CustomButton title="Ver entregas" onPress={() => console.log("Buscando entregas...")} />
    </View>
*/

const Order = ({order}) => {

    return (
        <TouchableOpacity style={{height: "100%"}} onPress={() => console.log("Order details...")}>
            <Surface style={styles.surface} elevation={3}>
                {order && order.name? 
                    <View>
                        <Text style={{color: "white"}}>{order.name}</Text>
                        <Text style={{color: "white"}}>{order.franchise_address}</Text>
                    </View>
                    : 
                    (<Text>Error al obtener datos del pedido</Text>)
                }
            </Surface>
        </TouchableOpacity>
    )
}

export default Order;