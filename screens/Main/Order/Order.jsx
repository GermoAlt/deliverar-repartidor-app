import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../../components/CustomButton/CustomButton';
import styles from './styles';

const Order = () => {

    return (
        <View style={styles.detailsCard}>
                <Text style={{textAlign: 'center'}}>No has aceptado entregas aún!</Text>
                <CustomButton title="Ver entregas" onPress={() => console.log("Buscando entregas...")} />
        </View>
    )
}

export default Order;