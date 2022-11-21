import React, { useContext, useState, useEffect } from 'react';
import { Text, View, SafeAreaView, ScrollView} from 'react-native';
import { Provider } from 'react-native-paper';
import styles from './styles';
import TopBar from '../../components/TopBar/TopBar';
import Order from '../../components/Order/Order';
import CurrentDelivery from '../CurrentDelivery/CurrentDelivery';

import { DeliveryContext } from '../../contexts/DeliveryContext';

import { getOrders } from '../../services/order/orderService';


const renderOffer = (item) => {
  return (
    <View key={item.name} style={styles.listElement} >
      <Order style={{flex: 1}} order={item}/>
    </View>
  );
}

export default function Main() {
  const {currentDelivery} = useContext(DeliveryContext);
  const [orders, setOrders] = useState([])

  useEffect(/*async*/ () => {
    try{
      //const pedidos = await getOrders().json();
      const pedidos = getOrders();
      console.log("Orders retrieved!")
      if(pedidos){
        setOrders(pedidos)
      }
      else{
        throw new Error("Ocurrio un error al buscar las ordenes disponibles");
      }
    }catch(err){
      console.log("Error al obtener ordenes");
      console.log(err);
    }
  })

  return (
    <SafeAreaView style={{flex: 1, flexGrow: 1}} >
      <Provider>
        <TopBar/>
        <View style={styles.container}>
          {
            currentDelivery && currentDelivery.status !== "Entregado" ? 
            (<CurrentDelivery delivery={currentDelivery}/>) :
            <></>
          }
          <View style={styles.titleView}>
            <Text style={styles.title}>Entregas Cercanas</Text>
          </View>
          <ScrollView style={{width: orders.length==0?"95%":"100%"}} contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
            { orders && orders.length!==0 ? ( orders.filter(order => currentDelivery ? order.name !== currentDelivery.name : true).map(order => renderOffer(order)) ) 
            : 
              ( <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                  <Text style={styles.noOrders}>-- Aún no tenés entregas asignadas --</Text>
              </View> )
            }
          </ScrollView>
        </View>
      </Provider>
    </SafeAreaView>
  );
}