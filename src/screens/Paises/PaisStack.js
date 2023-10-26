import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Text } from 'react-native-paper'
import Pais from './Pais';
import Liga from '../Ligas/Liga';
import LigaTemporadas from '../Ligas/LigaTemporadas';
import LigaEquipes from '../Ligas/LigaEquipes';



const Stack = createNativeStackNavigator();

const PaisStack = () => {

    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="pais" component={Pais} options={{ title: 'Países' }} />
                <Stack.Screen name="liga" component={Liga} options={{ title: 'Ligas' }} />
                <Stack.Screen name="liga-temporadas" component={LigaTemporadas} options={{ title: 'Temporadas' }} />
                <Stack.Screen name="liga-equipes" component={LigaEquipes} options={{ title: 'Equipes' }} />
            </Stack.Navigator>
        </>
    )
}

export default PaisStack