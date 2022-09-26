import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView} from 'react-native';
import { Provider } from 'react-native-paper';
import styles from './styles';
import TopBar from '../../components/TopBar/TopBar';
import Order from '../Order/Order';
import { pedido } from './testOrder';

const pedidos = [pedido, {...pedido, name: "Starbucks"}, {...pedido, name: "Wendys"}]

const renderOffer = (item) => {
  return (
    <View key={item.name} style={styles.listElement} >
      <Order style={{flex: 1}} order={item}/>
    </View>
  );
}

export default function Main() {
  const [orders, setOrders] = useState(pedidos)

  return (
    <SafeAreaView style={{flex: 1, flexGrow:1}} >
      <Provider>
        <TopBar/>
        <View style={styles.container}>
          <View style={styles.titleView}>
            <Text style={styles.title}>Entregas Asignadas</Text>
          </View>
          <ScrollView style={{width: orders.length==0?"95%":"100%"}} contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
            { orders && orders.length!==0 ? ( orders.map(order => renderOffer(order)) ) 
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