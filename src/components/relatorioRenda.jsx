import {
    StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity
} from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { Text as TextSvg } from 'react-native-svg';
import Svg from 'react-native-svg';
import Ionicons from '@expo/vector-icons/Ionicons';

function RelatorioRenda() {
    const data = [1080.5 - 270.13, 270.13]
    const cores = ['#FFE84F', '#2DED5C']
    const pieData = data.map((value, index) => ({
        value,
        svg: {
            fill: cores[index]
        },
        key: `pie-${index}`,
    }));



    return (
        <>
            <View style={styles.relatorio}>
                <Text style={styles.relatorioTitle}>Relatório de renda</Text>
            </View>

            <View style={styles.retorno}>
                <View style={styles.relatorioGrafico}>
                    <PieChart
                        style={{ height: 225 }}
                        data={pieData}
                        colors={cores}></PieChart>
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
    relatorioTxt: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 15,
    },
})