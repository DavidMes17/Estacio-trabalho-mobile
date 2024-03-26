import {
    StyleSheet, View, Text
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function Outro({ navigation }) {
    return (<>
        <View>
            <Text>
                Outro
            </Text>
        </View>
    </>)
}