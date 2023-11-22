import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import JogadorSearch from '../jogador/JogadorSearch';
import JogadorProfile from './JogadorProfile';

const Stack = createNativeStackNavigator();

const JogadorStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen 
                name="JogadorSearch" 
                component={JogadorSearch} 
                options={{ 
                    title: 'Pesquisar Jogador',
                    headerStyle: {
                        backgroundColor: '#004080', 
                      },
                      headerTitleStyle: {
                        color: 'white', 
                      },
                    }} />
                <Stack.Screen 
                name='JogadorProfile' 
                component={JogadorProfile} 
                options={{
                    title: 'Perfil jogador',
                    headerStyle: {
                        backgroundColor: '#004080', 
                      },
                      headerTitleStyle: {
                        color: 'white', 
                      },
                    }}/>
            </Stack.Navigator>
        </>
    )
}

export default JogadorStack