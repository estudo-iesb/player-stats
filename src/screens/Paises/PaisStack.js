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
                <Stack.Screen 
                name="pais" 
                component={Pais} 
                options={{ 
                    title: 'Países',
                    headerStyle: {
                        backgroundColor: '#004080', 
                      },
                      headerTitleStyle: {
                        color: 'white', 
                      },
                    }} />
                <Stack.Screen 
                name="liga" 
                component={Liga} 
                options={{ 
                    title: 'Ligas',
                    headerStyle: {
                        backgroundColor: '#004080', 
                      },
                      headerTitleStyle: {
                        color: 'white', 
                      },
                    }} />
                <Stack.Screen 
                name="liga-temporadas" 
                component={LigaTemporadas} 
                options={{ 
                    title: 'Temporadas',
                    headerStyle: {
                        backgroundColor: '#004080', 
                      },
                      headerTitleStyle: {
                        color: 'white', 
                      },
                    }} />
                <Stack.Screen 
                name="liga-equipes" 
                component={LigaEquipes} 
                options={{ 
                    title: 'Equipes',
                    headerStyle: {
                        backgroundColor: '#004080', 
                      },
                      headerTitleStyle: {
                        color: 'white', 
                      },
                    }} />
            </Stack.Navigator>
        </>
    )
}

export default PaisStack