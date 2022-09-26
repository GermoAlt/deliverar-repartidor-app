import React, { useEffect, useContext } from 'react';
import { Button, Text, View, SafeAreaView, Image} from 'react-native';
import { Provider, Surface } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import TopBar from '../../components/TopBar/TopBar';
import { UserContext } from '../../contexts/UserContext';
import styles from './styles';

export default function User({navigation}) {
  const {user} = useContext(UserContext);

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
              <Text style={styles.title}>Repartidor:</Text>
            </View>
            <View style={styles.item}>
              {user && <ShowUserInfo />}
            </View>
          </Surface>
          <View style={styles.item} >
              <Text style={{fontSize: 22, fontWeight: '600', margin: 10}}>Entregas anteriores:</Text>
            </View>
          <View style={styles.content}>
            <View style={styles.item}>
              <Text style={{fontSize: 14, fontWeight: '500', marginVertical: 10}}>-- Aún no has realizado entregas --</Text>
            </View>
          </View>
        </View>
      </Provider>
    </SafeAreaView>
  );
}