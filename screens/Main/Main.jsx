import React, { useState } from 'react';
import { Text, View, ScrollView, SafeAreaView} from 'react-native';
import { Provider } from 'react-native-paper';
import styles from './styles';
import TopBar from '../../components/TopBar/TopBar';
import Order from './Order/Order';

const pedido = {
  name: "McDonalds",
  franchise_address: "Cabildo 830",
  meals: [
    {
      meal_id: 1,
      name: "Big Mac",
      photo_url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:1-3-product-tile-desktop?wid=830&hei=516&dpr=off",
      price: 670,
      ingredients: [
        {
          ingredient_id: 1010,
          name: "Cheese",
        },
        {
          ingredient_id: 2019,
          name: "Meat",
        },
      ] 
    }
  ]
};

export default function Main() {
  const [orders, setOrders] = useState([pedido])

  return (
    <SafeAreaView style={{flex: 1, flexGrowth:1}} >
      <Provider>
        <TopBar/>
        <View style={styles.container}>
          <View style={styles.titleView}>
            <Text style={styles.title}>Entregas Asignadas</Text>
          </View>
          <ScrollView style={styles.orderList} contentContainerStyle={{flexGrow: 1}}>
            {orders.map(order => <Order order={order}/>)}
          </ScrollView>
        </View>
      </Provider>
    </SafeAreaView>
  );
}