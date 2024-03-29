{/*
  #674FFF
  #4FA8FF
  #B0A4FF
  #766BBF
  #AAA26D
  #2DED5C
  #FFE84F
  #EDC12D
  #D94A3B
*/}
import { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  StyleSheet, Text, TouchableOpacity, View, ImageBackground
} from 'react-native';
import * as localAuthentication from 'expo-local-authentication'
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
        <Stack.Screen name='auth' component={Biometria} options={{ headerShown: false }} />
        <Stack.Screen name='index' component={Index} options={{ headerShown: false }} />
        <Stack.Screen name='COBRANÇA' component={Cobranca} />
        <Stack.Screen name='IMPREVISTO' component={Imprevisto} />
        <Stack.Screen name='SALÁRIO' component={Salario} />
        <Stack.Screen name='OUTRO' component={Outro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Biometria({ navigation }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  async function Autenticacao() {
    const compativel = await localAuthentication.hasHardwareAsync()
    console.log('compatível com biometria: ' + compativel)

    const tiposAutenticacao = await localAuthentication.supportedAuthenticationTypesAsync()
    console.log('tipos de biometria disponíveis: ' + tiposAutenticacao)

  }
  async function PedirBiometria() {
    const temBiometria = await localAuthentication.isEnrolledAsync()
    console.log('biometria cadastrada: ' + temBiometria)
    if (!temBiometria) {
      return Alert.alert('Aviso', 'Não há biometria cadastrada')
      navigation.replace('index')
    }

    const auth = await localAuthentication.authenticateAsync({
      promptMessage: 'Biometria',
      fallbackLabel: 'Erro na biometria'
    })

    if (auth.success) {
      setIsAuthenticated(true)
      navigation.replace('index')
    } else {
      Alert.alert('Erro', 'Ocorreu um erro na biometria, tente novamente ou reinicie o app!')
    }

  }

  return (<>
    <ImageBackground source={require('./src/assets/backgroundImage.jpg')} style={styles.biometriaCtn}>
      <Text style={styles.biometriaTxt}>Acesse o melhor App de organização financeira com segurança</Text>
    </ImageBackground>

    <View style={styles.container}>
    <TouchableOpacity style={styles.biometriaBtn} onPress={PedirBiometria}>
        <Text style={{ fontSize: 35, color: '#fff', fontWeight: 'bold' }}>
          Acessar com Biometria
        </Text>
      </TouchableOpacity>
    </View>
  </>);
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
  biometriaCtn:{
    flex: 9,
    paddingTop: 25,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  biometriaBtn: {
    flex: 1,
    backgroundColor: '#674FFF',
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  biometriaTxt:{
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});
