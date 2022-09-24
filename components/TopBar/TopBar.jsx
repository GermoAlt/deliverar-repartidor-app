import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, Menu } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import { CredentialsContext } from '../../contexts/CredentialsContext';
import { UserContext } from '../../contexts/UserContext';
import styles from './styles';
 
const MainMenuAnchor = (openMenu) => {
  return(
    <TouchableOpacity onPress={() => openMenu()}>
          <Button color='white' icon="menu" />
        </TouchableOpacity>
  );
}

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

  const [mainVisible, setMainVisible] = useState(false);
  const openMainMenu = () => setMainVisible(true);
  const closeMainMenu = () => setMainVisible(false);
  const goHome = () => {
    navigation.navigate("Main");
  };

  const [profileVisible, setProfileVisible] = useState(false);
  const openProfileMenu = () => setProfileVisible(true);
  const closeProfileMenu = () => setProfileVisible(false);
  const goToProfile = () => {
    closeProfileMenu();
    navigation.navigate("User");
  }

  const logOut = () => {
    setCredentials(null);
    setUser({});
  }

  return (
    <View style={styles.container}>
        <Menu
          visible={mainVisible}
          onDismiss={closeMainMenu}
          anchor={MainMenuAnchor(openMainMenu)}>
          <Menu.Item onPress={() => goHome()} title="Inicio" />
        </Menu>
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