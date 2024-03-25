import {
    StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


function RelatorioRenda() {
    return (
        <>
            <View style={styles.relatorio}>
                <Text style={styles.relatorioTitle}>Relatório de renda</Text>
            </View>

            <View style={styles.retorno}>
                <View style={styles.relatorioGrafico}>
                    <Image source={require('../assets/grafico.png')} style={{ width: 225, height: 225 }} />
                </View>
                <View style={styles.relatorioRetorno}>
                    <Text style={styles.relatorioTxt}>retorno do capital</Text>
                    <Text style={styles.relatorioTxt}>retorno dos pagamentos</Text>
                    <Text style={styles.relatorioTxt}>retorno das despesas</Text>
                </View>
            </View>
        </>
    )
}

export { RelatorioRenda }

const styles = StyleSheet.create({
    relatorio: {
        backgroundColor: '#4FA8FF',
        paddingVertical: 4,
        marginTop: 16,
        alignItems: 'center',
        borderRadius: 40,
    },
    relatorioTitle: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#fff',
    },
    retorno: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    relatorioGrafico: {
        flex: 1,
        height: 225,
        marginTop: 16,
        marginRight: 16,
        borderRadius: 10,
        backgroundColor: '#766BBF',
    },
    relatorioRetorno: {
        backgroundColor: '#B0A4FF',
        flex: .8,
        marginTop: 16,
        borderRadius: 10,
        height: 225,
        alignItems: 'center',
        paddingVertical: 8,
    },
    relatorioTxt:{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 15,
    },
})