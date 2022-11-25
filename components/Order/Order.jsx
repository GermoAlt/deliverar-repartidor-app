import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity } from 'react-native'
import { Surface, Text } from 'react-native-paper'
import styles from './styles';

const Order = ({order}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{width: "100%"}} onPress={() => navigation.navigate("OrderDetails", { "order" : order })}>
            <Surface style={styles.surface} elevation={4}>
                {order && order.name? 
                    <View style={styles.cardLayout}>
                        <View style={styles.cardData}>
                            <Text style={styles.franchise}>Empresa: {order.name}</Text>
                            <Text style={styles.address}>Dirección: {order.franchise_address}</Text>
                        </View>
                        <View style={styles.cardDetails}>
                            <Text style={{...styles.details,fontWeight: '600', fontSize: 16, margin: '5%'}}>{order.orderType ? order.orderType.toUpperCase() : "PEDIDO"}</Text>
                            <Text style={styles.details}>Pulsa para ver los detalles</Text>
                        </View>
                    </View>
                    : 
                    (<Text>Error al obtener datos del envío</Text>)
                }
            </Surface>
        </TouchableOpacity>
    )
}

export default Order;