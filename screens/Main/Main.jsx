import React, { useState } from 'react';
import { Text, View, FlatList, SafeAreaView, ScrollView} from 'react-native';
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

const pedidos = [pedido, {...pedido, name: "Starbucks"}, {...pedido, name: "Wendys"}, {...pedido, name: "Williamsburg"}, {...pedido, name: "Tao Tao"}]

const renderOffer = (item) => {
  return (
    <View key={item.name} style={styles.listElement} >
      <Order style={{flex: 1}} order={item}/>
    </View>
  );
}

/*
<FlatList
              data={orders}
              renderItem={renderOffer}
              keyExtractor={order => order.name}
              contentContainerStyle={styles.orderList}
            />
*/

export default function Main() {
  const [orders, setOrders] = useState([])

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