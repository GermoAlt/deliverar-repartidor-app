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
          <Text>Este es el repartidor: {user.usuario}</Text>
        </View>
        <View style={styles.item}>
          <Button title="Atrás" onPress={() => navigation.navigate("Home")} />
        </View>
      </View>
    </SafeAreaView>
  );
}