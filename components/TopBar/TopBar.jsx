import React from 'react';
import { View, Text } from 'react-native';


const TopBar = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Left</Text>
      <Text>TopBar</Text>
      <Text>Right</Text>
    </View>
  )
}

export default TopBar;