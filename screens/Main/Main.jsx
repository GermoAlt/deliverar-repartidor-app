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
    <View key={item.orderId} style={styles.listElement} >
      <Order style={{flex: 1}} order={item}/>
    </View>
  );
}

export default function Main() {
  const {currentDelivery} = useContext(DeliveryContext);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      try{
        setLoading(true)
        console.log("Retrieving orders...")
        const res = await getOrders();
        const pedidos = await res.json();
        console.log("Orders retrieved!")
        if(pedidos && pedidos.data){
          console.log("Pedidos: ", pedidos.data);
          setOrders(pedidos.data);
          setLoading(false);
        }
        else{
          setLoading(false);
          throw new Error("Ocurrio un error al buscar las ordenes disponibles");
        }
      }catch(err){
        console.log("Error al obtener ordenes");
        console.log(err);
      }
    }
    fetchOrders();
  },[]);

  return (
    <SafeAreaView style={{flex: 1, flexGrow: 1}} >
      <Provider>
        <TopBar/>
        <View style={styles.container}>
          {
            currentDelivery && currentDelivery.orderStatus !== "ENTREGADO" ? 
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
                  <Text style={styles.noOrders}>{loading? "Cargando..." : "-- Aún no tenés entregas asignadas --"}</Text>
              </View> )
            }
          </ScrollView>
        </View>
      </Provider>
    </SafeAreaView>
  );
}