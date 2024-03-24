{/*
  #674FFF
  #4FA8FF
  #766BBF
  #6B6780
  #AAA26D
  #FFE84F
*/}
import {
  StyleSheet, View
} from 'react-native';
import { Topo } from './src/components/topo';
import { Botoes } from './src/components/botoes';
import { Relatorio } from './src/components/relatorio';

export default function App() {

  return (
    <View style={styles.container}>

      <Topo />
      <Botoes />
      <Relatorio />

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
