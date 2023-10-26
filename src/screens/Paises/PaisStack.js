import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Text } from 'react-native-paper'
import Pais from './Pais';



const Stack = createNativeStackNavigator();

const PaisStack = () => {

    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="pais" component={Pais} options={{ title: 'Países' }} />
            </Stack.Navigator>
        </>
    )
}

export default PaisStack