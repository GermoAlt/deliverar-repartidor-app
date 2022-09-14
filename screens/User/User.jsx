import { useContext } from 'react';
import { Button, Text, View, SafeAreaView, Image} from 'react-native';
import { UserContext } from '../../contexts/UserContext';
import styles from './styles';

export default function Home({navigation}) {
  const {user} = useContext(UserContext);

  const ShowUserInfo = () => {
    if(user){
      return (
        <View style={styles.userInfoContainer}>
          <Text style={styles.userTitle}>Welcome</Text>
          <Image source={{uri: user.picture}} style={styles.userImage} />
          <Text style={styles.userMore}>{user.name}</Text>
        </View>
      );
    }
  }

  return (
    <SafeAreaView style={{flex: 1, flexGrowth:1}} >
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>Este es el repartidor:</Text>
        </View>
        <View style={styles.item}>
          {user && <ShowUserInfo />}
        </View>
        <View style={styles.item}>
          <Button title="Atrás" onPress={() => navigation.navigate("Home")} />
        </View>
      </View>
    </SafeAreaView>
  );
}