import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity } from 'react-native'
import { Surface, Text } from 'react-native-paper'
import styles from './styles';

const CurrentOrder = ({delivery}) => {
    const navigation = useNavigation();

    const renderLocation = (delivery) => {
        if(delivery.orderStatus == "RETIRAR"){
            return <Text style={{...styles.address,fontSize: 15}}>Retira en: {delivery.franchise_address}</Text>;
        }
        else{
            return <Text style={{...styles.address,fontSize: 15}}>Entrega en: {delivery.client_address}</Text>;
        }
    }

    return (
        <TouchableOpacity style={{width: "100%"}} onPress={() => navigation.navigate("CurrentOrderDetails")}>
            <Surface style={styles.surface} elevation={4}>
                {delivery && delivery.name? 
                    <View style={styles.cardLayout}>
                        <View style={styles.cardData}>
                            <Text style={styles.franchise}>Empresa: {delivery.name}</Text>
                            <Text style={{...styles.franchise,fontSize: 16, marginVertical: 4, fontWeight: '600'}}>Estado: {delivery.orderStatus ? delivery.orderStatus : "ENTREGADO"}</Text>
                            {renderLocation(delivery)}
                        </View>
                        <View style={styles.cardDetails}>
                            <Text style={{...styles.details,fontWeight: '600', fontSize: 16, margin: '5%'}}>{delivery.orderType ? delivery.orderType.toUpperCase() : "PEDIDO"}</Text>
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

export default CurrentOrder;