import { View, Text, StyleSheet } from "react-native";

export default function Urgencia({ navigation }) {
    return (<View style={{ flex: 2 }}>
        <View style={styles.urgencia}>
            <Text style={styles.urgenciaTitle}>Relatório de urgências</Text>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    urgencia: {
        backgroundColor: '#4FA8FF',
        paddingVertical: 4,
        marginTop: 16,
        alignItems: 'center',
        borderRadius: 40,
    },
    urgenciaTitle: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#fff',
    },
})