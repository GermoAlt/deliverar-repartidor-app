import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { UserContext } from '../../contexts/UserContext';
import styles from './styles';


const TopBar = ({navigations}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log("Menu!")}>
        <Text style={styles.textItem}>Menu</Text>
      </TouchableOpacity>
      <Text style={[styles.centerItem]}>Deliverar</Text>
      <TouchableOpacity onPress={() => navigations.goToProfile()}>
        <Text style={styles.textItem}>Perfil</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TopBar;