{/*
  #674FFF
  #4FA8FF
  #766BBF
  #6B6780
  #AAA26D
  #FFE84F
*/}
import {
  StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {

  return (
    <View style={styles.container}>

      <Topo />
      <Botoes />

    </View>
  );
}

function Topo() {
  return (
    <View style={styles.topo}>
      <Image
        style={styles.topoImg}
        source={require('./assets/src/assets/topoIcon.png')}
      />
      <View>
        <Text
          style={styles.title}>
          Orga<Text style={{ color: '#000' }}>Finan
          </Text>
        </Text>
        <Text style={styles.topoTxt}>Seu app de organização financeira</Text>
      </View>

    </View>
  )
}
function Botoes() {
  return (
    <View style={styles.botao}>
      <View style={styles.botaoChildren}>
        <TouchableOpacity style={styles.inputBtn}>
          <Ionicons style={styles.icon} name="newspaper-outline"></Ionicons>
        </TouchableOpacity>
        <Text>COBRANÇA</Text>
      </View>

      <View style={styles.botaoChildren}>
        <TouchableOpacity style={styles.inputBtn}>
          <Ionicons style={styles.icon} name="document-text-outline"></Ionicons>
        </TouchableOpacity>
        <Text>IMPREVISTO</Text>
      </View>

      <View style={styles.botaoChildren}>
        <TouchableOpacity style={styles.inputBtn}>
          <Ionicons style={styles.icon} name="wallet-outline"></Ionicons>
        </TouchableOpacity>
        <Text>SALÁRIO</Text>
      </View>

      <View style={styles.botaoChildren}>
        <TouchableOpacity style={styles.inputBtn}>
          <Ionicons style={styles.icon} name="ellipsis-horizontal-circle-outline"></Ionicons>
        </TouchableOpacity>
        <Text>OUTRO</Text>
      </View>
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
  topo: {
    backgroundColor: '#674FFF',
    padding: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: '10%',
    borderRadius: 40,
  },
  topoImg: {
    width: 90,
    height: 80,
    objectFit: 'contain',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
  topoTxt: {
    fontSize: 20,
    width: 200,
    color: '#fff',
    textAlign: 'center',
  },
  botao: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 16,
  },
  botaoChildren: {
    alignItems: 'center',
  },
  inputBtn: {
    width: 80,
    height: 80,
    backgroundColor: '#766BBF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: 32,
    margin: 16,
  },
  relatorio: {
    backgroundColor: '#4FA8FF',
    paddingVertical: 4,
    marginTop: 16,
    alignItems: 'center',
    borderRadius: 40,
  },
});
