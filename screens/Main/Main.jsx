import React, { useState, useContext } from 'react';
import { Button, Text, View, SafeAreaView} from 'react-native';
import { Provider } from 'react-native-paper';
import { UserContext } from '../../contexts/UserContext';
import { CredentialsContext } from '../../contexts/CredentialsContext';
import styles from './styles';
import TopBar from '../../components/TopBar/TopBar';
import Order from './Order/Order';

export default function Main() {
  const {user, setUser} = useContext(UserContext);
  const {credentials, setCredentials} = useContext(CredentialsContext);

  return (
    <SafeAreaView style={{flex: 1, flexGrowth:1}} >
      <Provider>
        <TopBar/>
        <View style={styles.container}>
          <View style={styles.currentDelivery}>
            <Order/>
          </View>
        </View>
      </Provider>
    </SafeAreaView>
  );
}