import React, { useState, useContext } from 'react';
import { Button, Text, View, SafeAreaView} from 'react-native';
import { UserContext } from '../../contexts/UserContext';
import { CredentialsContext } from '../../contexts/CredentialsContext';
import styles from './styles';
import TopBar from '../../components/TopBar/TopBar';
import Order from './Order/Order';

export default function Main({navigation}) {
  const {user, setUser} = useContext(UserContext);
  const {credentials, setCredentials} = useContext(CredentialsContext);

  //const [order, setOrder] = useState(null);

  const handleLogout = () => {
    setCredentials(null);
    setUser(null);
  }

  const navigations = {
    goToProfile : () => navigation.navigate("User"),
  }

  return (
    <SafeAreaView style={{flex: 1, flexGrowth:1}} >
      <TopBar navigations={navigations} />
      <View style={styles.container}>
        <View style={styles.currentDelivery}>
          <Order navigation={navigation}/>
        </View>
        <View style={styles.item}>
          <Button title="Cerrar Sesión" onPress={() => handleLogout()} />
        </View>
      </View>
    </SafeAreaView>
  );
}