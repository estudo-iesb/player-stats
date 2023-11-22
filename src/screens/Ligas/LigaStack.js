import React from 'react'
import Liga from './Liga'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LigaTemporadas from './LigaTemporadas';
import LigaEquipes from './LigaEquipes';


const Stack = createNativeStackNavigator();

const LigaStack = props => {
    return (
        <>
            <Stack.Navigator>
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

LigaStack.propTypes = {}

export default LigaStack