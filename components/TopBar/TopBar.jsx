import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, Menu } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import { CredentialsContext } from '../../contexts/CredentialsContext';
import { UserContext } from '../../contexts/UserContext';
import styles from './styles';
 
const ProfileMenuAnchor = (openMenu) => {
  return(
    <TouchableOpacity  onPress={() => openMenu()}>
      <Button color='white' icon="account-circle" />
    </TouchableOpacity>
  );
}

const TopBar = () => {

  const navigation = useNavigation();

  let {setUser} = useContext(UserContext);
  let {setCredentials} = useContext(CredentialsContext);

  const [profileVisible, setProfileVisible] = useState(false);
  const openProfileMenu = () => setProfileVisible(true);
  const closeProfileMenu = () => setProfileVisible(false);
  const goToProfile = () => navigation.navigate("User");


  const logOut = () => {
    setCredentials(null);
    setUser({});
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Button color='white' icon="menu" />
        </TouchableOpacity>
        <Text style={[styles.centerItem]}>Deliverar</Text>
        <Menu
          visible={profileVisible}
          onDismiss={closeProfileMenu}
          anchor={ProfileMenuAnchor(openProfileMenu)}>
          <Menu.Item onPress={() => goToProfile()} title="Mi perfil" />
          <Menu.Item onPress={() => logOut()} title="Cerrar Sesión" />
        </Menu>
    </View>
  )
}

export default TopBar;