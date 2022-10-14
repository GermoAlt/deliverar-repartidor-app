import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import { Button, Provider } from 'react-native-paper';
import styles from './styles';
import TopBar from '../../components/TopBar/TopBar';

const initPayments = [
    {
        mes: "Octubre",
        ingreso: 24500
    },
    {
        mes: "Septiembre",
        ingreso: 18000
    },
    {
        mes: "Agosto",
        ingreso: 21350
    },
]

const PaymentHeader = () => {
    return (
        <View style={{...styles.payment, backgroundColor: '#EDEDED'}}>
            <View style={styles.paymentTextLayer}>
                <Text style={styles.paymentHeader}>
                    Mes
                </Text>
            </View>
            <View style={styles.paymentTextLayer}>
                <Text style={styles.paymentHeader}>
                    Monto total
                </Text>
            </View>
        </View>
    );
}

const SinglePayment = ({payment}) => {
    return (
        <View style={styles.payment}>
            <View style={styles.paymentTextLayer}>
                <Text style={styles.paymentText}>
                    {payment.mes}
                </Text>
            </View>
            <View style={styles.paymentTextLayer}>
                <Text style={styles.paymentText}>
                    ${payment.ingreso}
                </Text>
            </View>
        </View>
    );
}

const Payments = ({navigation}) => {
    const [payments, setPayments] = useState([...initPayments]);
    const goBack = () => {
        navigation.goBack();
    }


    return (
        <SafeAreaView style={{flex: 1, flexGrow:1}} >
            <Provider>
                <TopBar />
                <View style={styles.container}>
                    <View style={styles.titleView}>
                        <TouchableOpacity style={{flex: 1}} onPress={() => goBack()}>
                            <Button color="grey" icon="chevron-left" />
                        </TouchableOpacity>
                        <Text style={styles.title}>Mis Ingresos</Text>
                    </View>
                    <View style={styles.content}>
                        {
                            payments && payments.length !== 0 ? 
                            ( 
                                <View style={{width: '100%'}}>
                                    <PaymentHeader />
                                    <ScrollView style={{width: "95%"}} contentContainerStyle={{flexGrow: 1}}>
                                        {payments.map(income => <SinglePayment payment={income} key={income.mes} />)}
                                    </ScrollView> 
                                </View>) : 
                            ( <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                                <Text style={styles.noIncomes}>-- Aún no tienes ingresos --</Text>
                            </View> )
                        }
                    </View>
                </View>
            </Provider>
        </SafeAreaView>
    );
}

export default Payments;