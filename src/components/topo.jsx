import {
    StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity
  } from 'react-native';
  import Ionicons from '@expo/vector-icons/Ionicons';

function Topo() {
    return (
        <View style={styles.topo}>
            <Image
                style={styles.topoImg}
                source={require('../assets/topoIcon.png')}
            />
            <View>
                <Text
                    style={styles.topoTitle}>
                    Orga<Text style={{ color: '#000' }}>Finan
                    </Text>
                </Text>
                <Text style={styles.topoTxt}>Seu app de organização financeira</Text>
            </View>

        </View>
    )
}

export { Topo }

const styles = StyleSheet.create({
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
      topoTitle: {
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
})