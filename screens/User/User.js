import { useContext, useLayoutEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { UserContext } from '../../contexts/UserContext';
import styles from './styles';

export default function Home({navigation}) {
  const {user} = useContext(UserContext);

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    })
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>Este es el repartidor: {user.usuario}</Text>
      </View>
      <View style={styles.item}>
        <Button title="Atrás" onPress={() => navigation.navigate("Home")} />
      </View>
    </View>
  );
}