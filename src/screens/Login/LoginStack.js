import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Text } from 'react-native'
import Login from './Login';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} options={{ title: 'Login' }} />
            </Stack.Navigator>
        </>
    )
}

export default LoginStack