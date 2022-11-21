import React, { useEffect, useState, useContext } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import { Button, Provider } from 'react-native-paper';
import styles from './styles';
import TopBar from '../../components/TopBar/TopBar';
import { getPayments } from '../../services/payment/paymentService';

import { UserContext } from '../../contexts/UserContext'; 

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
    const [payments, setPayments] = useState([]);
    const {user} = useContext(UserContext);
    const goBack = () => {
        navigation.goBack();
    }

    useEffect(/*async*/ () => {
        try{
            //let res = await getPayments(user.name);
            let res = getPayments(user.id);
            if(res){
                setPayments(res);
            }
            else{
                throw new Error("No se pudieron recuperar los pagos");
            }
        }
        catch(err){
            console.log("Error al intentar recuperar información de pagos para el usuario:")
            console.log(err);
        }
    },[]);


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