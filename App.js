{/*
  #674FFF
  #4FA8FF
  #B0A4FF
  #766BBF
  #AAA26D
  #FFE84F
  #D94A3B
*/}
import {
  StyleSheet, View
} from 'react-native';
import { Topo } from './src/components/topo';
import { Botoes } from './src/components/botoes';
import { RelatorioRenda } from './src/components/relatorioRenda';

import Cobranca from './src/components/screens/cobranca';
import Imprevisto from './src/components/screens/imprevisto';
import Salario from './src/components/screens/salario';
import Outro from './src/components/screens/outro';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#674FFF' }, headerTintColor: '#fff' }} >
        <Stack.Screen name='index' component={Index} options={{ headerShown: false }} />
        <Stack.Screen name='COBRANÇA' component={Cobranca} />
        <Stack.Screen name='IMPREVISTO' component={Imprevisto} />
        <Stack.Screen name='SALÁRIO' component={Salario} />
        <Stack.Screen name='OUTRO' component={Outro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Index({ navigation }) {
  return (
    <View style={styles.container}>
      <Topo />
      <Botoes navigation={navigation} />
      <RelatorioRenda />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: 25,
    paddingHorizontal: 12,
  },
});
