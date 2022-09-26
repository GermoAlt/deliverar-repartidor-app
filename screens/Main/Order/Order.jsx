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
        <TouchableOpacity style={{width: "100%"}} onPress={() => console.log(`Pedido de la empresa ${order.name}`)}>
            <Surface style={styles.surface} elevation={4}>
                {order && order.name? 
                    <View style={styles.cardLayout}>
                        <View style={styles.cardData}>
                            <Text style={styles.franchise}>Empresa: {order.name}</Text>
                            <Text style={styles.address}>Dirección: {order.franchise_address}</Text>
                        </View>
                        <View style={styles.cardDetails}>
                            <Text style={styles.details}>Pulsa para ver los detalles</Text>
                        </View>
                    </View>
                    : 
                    (<Text>Error al obtener datos del pedido</Text>)
                }
            </Surface>
        </TouchableOpacity>
    )
}

export default Order;