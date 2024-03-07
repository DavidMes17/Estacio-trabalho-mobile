import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, Text, View, SafeAreaView, Image, Button, Alert 
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  function alertTest(){
    Alert.alert('Teste', 'funcionando')
  }
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.menu}>
        <Ionicons
        style={{ marginLeft: 8 }}
        name="person-circle-sharp"
        onPress={ alertTest }
        size={70}/>
        <Text
        style={styles.paragraphMenu}
        >Bem Vindo!!!
        </Text>
      </View>

      <View>
        <Text
        style={styles.paragraphMenu}
        >Hello World!!!
        </Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  menu: {
    backgroundColor: '#9400d3',
    padding: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: '10%',
    marginTop: 25,
    marginLeft: 15,
    marginRight: 10,
    borderRadius: 40,
  },
  paragraphMenu: {
    margin: 24,
    fontSize: 38,
    fontWeight: 'bold',
  },
});
