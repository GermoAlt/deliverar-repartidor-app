import React, { useContext, useState } from 'react';
import { Text, View, SafeAreaView, ScrollView} from 'react-native';
import { Provider } from 'react-native-paper';
import styles from './styles';
import TopBar from '../../components/TopBar/TopBar';
import Order from '../../components/Order/Order';
import CurrentDelivery from '../CurrentDelivery/CurrentDelivery';

import { pedido } from './testOrder';
import { DeliveryContext } from '../../contexts/DeliveryContext';

const pedidos = [pedido, {...pedido, name: "Starbucks", franchise_address: "Santa Fe 2290",}, {...pedido, name: "Wendys", franchise_address: "Montañeses 1765"}]

const renderOffer = (item) => {
  return (
    <View key={item.name} style={styles.listElement} >
      <Order style={{flex: 1}} order={item}/>
    </View>
  );
}

export default function Main() {
  const {currentDelivery} = useContext(DeliveryContext);
  const [orders, setOrders] = useState(pedidos)

  return (
    <SafeAreaView style={{flex: 1, flexGrow:1}} >
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