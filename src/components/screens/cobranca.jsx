import {
    StyleSheet, View, Text
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function Cobranca({ navigation }) {
    return (<>
        <View>
            <Text>
                Cobrança
            </Text>
        </View>
    </>)
}