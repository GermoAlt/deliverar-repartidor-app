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
        <Text>Bienvenidode a Deliverar</Text>
      </View>
      <View style={styles.item}>
        <Button title="Ver Repartidor" onPress={() => navigation.navigate("User")} />
      </View>
    </View>
  );
}