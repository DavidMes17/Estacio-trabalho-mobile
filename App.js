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

export default function App() {

  return (
    <View style={styles.container}>

      <Topo />
      <Botoes />
      <RelatorioRenda />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: 25,
    paddingHorizontal: 12,
  },
});
