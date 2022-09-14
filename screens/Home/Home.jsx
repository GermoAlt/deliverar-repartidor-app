import { useContext } from 'react';
import { Button, Text, View, SafeAreaView} from 'react-native';
import { UserContext } from '../../contexts/UserContext';
import styles from './styles';

export default function Home({navigation}) {
  const {user} = useContext(UserContext);

  return (
    <SafeAreaView style={{flex: 1, flexGrowth:1}} >
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>Bienvenido a Deliverar</Text>
        </View>
        <View style={styles.item}>
          <Button title="Ver Repartidor" onPress={() => navigation.navigate("User")} />
        </View>
      </View>
    </SafeAreaView>
  );
}