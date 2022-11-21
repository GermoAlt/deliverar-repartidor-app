import React, { useEffect, useState, useContext } from 'react';
import { Text, View, SafeAreaView, Image, ScrollView} from 'react-native';
import { Provider, Surface } from 'react-native-paper';
import TopBar from '../../components/TopBar/TopBar';
import CurrentOrder from '../../components/CurrentOrder/CurrentOrder';
import { UserContext } from '../../contexts/UserContext';
import styles from './styles';
import { getOrdersForUser } from '../../services/order/orderService';

export default function User() {
  const {user} = useContext(UserContext);
  const [prevOrders, setPrevOrders] = useState([]);

  useEffect(/*async*/ () => {
    try{
      //const ordenesPrevias = await getOrdersForUser(user).json();
      const ordenesPrevias = getOrdersForUser(user.idUser);
      console.log("Prev Orders: ", ordenesPrevias);
      if(ordenesPrevias){
        setPrevOrders(ordenesPrevias);
      }
      else{
        throw new Error("No se obtuvo la respuesta esperada");
      }
    }catch(err){
      console.log("Error al obtener ordenes previas para el usuario");
      console.log(err);
    }
  },[]);

  const renderPrevOrder = (order) => {
    return (
      <View key={[...prevOrders].indexOf(order)} style={styles.listElement} >
        <CurrentOrder key={[...prevOrders].indexOf(order)} style={{flex: 1}} delivery={order}/>
      </View>
    )
  }

  const ShowUserInfo = () => {
    if(user){
      return (
        <View style={styles.userInfoContainer}>
          <Image source={{uri: user.picture}} style={styles.userImage} />
          <Text style={styles.userName}>{user.name}</Text>
        </View>
      );
    }
  }

  return (
    <SafeAreaView style={{flex: 1, flexGrowth:1}} >
      <Provider>
        <TopBar />
        <View style={styles.container}>
          <Surface style={styles.summary} elevation={4} >
            <View style={styles.item}>
              <Text style={{...styles.title, paddingLeft: 6}}>Repartidor:</Text>
            </View>
            <View style={styles.item}>
              {user && <ShowUserInfo />}
            </View>
          </Surface>
          <View style={styles.item} >
            <Text style={{fontSize: 22, fontWeight: '600', margin: 10}}>Últimas entregas:</Text>
          </View>
          <View style={styles.content}>
            <ScrollView style={{marginTop: '-5%', width: prevOrders.length!=0?"95%":"100%"}} contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
            {
              prevOrders && prevOrders.length!=0 ? 
              (
                prevOrders.map(order => renderPrevOrder(order)) 
              ) :
              (<View style={styles.item}>
                <Text style={{fontSize: 14, fontWeight: '500', marginVertical: 10}}>-- Aún no has realizado entregas --</Text>
              </View>)
            }
            </ScrollView>
          </View>
        </View>
      </Provider>
    </SafeAreaView>
  );
}