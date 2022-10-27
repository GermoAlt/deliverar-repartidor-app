import React, { useEffect, useContext } from 'react';
import { Button, Text, View, SafeAreaView, Image, ScrollView} from 'react-native';
import { Provider, Surface } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import TopBar from '../../components/TopBar/TopBar';
import CurrentOrder from '../../components/CurrentOrder/CurrentOrder';
import { UserContext } from '../../contexts/UserContext';
import styles from './styles';
import { DeliveryContext } from '../../contexts/DeliveryContext';

export default function User({navigation}) {
  const {user} = useContext(UserContext);
  const {currentDelivery} = useContext(DeliveryContext);

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
            <ScrollView style={{marginTop: '-5%', width: currentDelivery?"95%":"100%"}} contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
            {
              currentDelivery ? 
              (<View style={styles.listElement} >
                <CurrentOrder style={{flex: 1}} delivery={currentDelivery}/>
              </View>) :
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