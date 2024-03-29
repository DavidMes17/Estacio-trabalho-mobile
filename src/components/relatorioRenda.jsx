import {
    StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity
} from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { Text as TextSvg } from 'react-native-svg';
import Svg from 'react-native-svg';
import Ionicons from '@expo/vector-icons/Ionicons';

function RelatorioRenda() {
    const despesas = [500, 500, 80, 0.5];

    
    
    let data = [1080.50, 270.13]
    corLucro = ''
    if (data[1] > 0) {
        corLucro = '#2DED5C'
    }
    else {
        data[1] = data[1] * (-1)
        corLucro = '#D94A3B'
    }
    const cores = ['#FFE84F', corLucro]
    const pieData = data.map((value, index) => ({
        value,
        svg: {
            fill: cores[index]
        },
        key: `pie-${index}`,
    }));

    const lucroStr = data[1].toFixed(2).toString().replace(/\./g, ',')
    const despesaStr = data[0].toFixed(2).toString().replace(/\./g, ',')

    return (
        <>
            <View style={styles.relatorio}>
                <Text style={styles.relatorioTitle}>Relatório de renda</Text>
            </View>

            <View style={styles.retorno}>
                <View style={styles.relatorioGrafico}>
                    <PieChart
                        style={{ height: 225, padding: 8 }}
                        data={pieData}
                        colors={cores}></PieChart>
                </View>
                <View style={styles.relatorioRetorno}>
                    <Text style={styles.relatorioTitleRetorno}>retorno do capital</Text>
                    <Text style={[styles.relatorioTxt, { color: corLucro }]}>R$ {lucroStr}</Text>
                    <Text style={styles.relatorioTitleRetorno}>retorno dos pagamentos</Text>
                    <Text style={[styles.relatorioTxt, styles.pagamento]}>R$ {despesaStr}</Text>
                    <Text style={styles.relatorioTitleRetorno}>retorno das despesas</Text>
                    <Text style={[styles.relatorioTxt, styles.despesa]}>{despesas.length}</Text>
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
    relatorioTitleRetorno: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 15,
    },
    relatorioTxt: {
        fontSize: 35,
        fontWeight: 700,
    },
    pagamento: {
        color: '#FFE84F'
    },
    despesa: {
        color: '#EDC12D'
    },
})