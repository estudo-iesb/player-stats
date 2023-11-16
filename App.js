import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './src/screens/Login/Login'; // Certifique-se de importar corretamente a tela de login
import AsyncStorage from '@react-native-async-storage/async-storage';
import NewNoticeStack from './src/screens/noticia/NewNoticeStack';
import JogadorStack from './src/screens/jogador/JogadorStack';
import LigaStack from './src/screens/Ligas/LigaStack';
import PaisStack from './src/screens/Paises/PaisStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/screens/Login/Register';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (username, password) => {
    try {
      // Recupera os dados do usuário do armazenamento local
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');

      // Verifica se os dados coincidem
      if (username === storedUsername && password === storedPassword) {
        // Login bem-sucedido
        setLoggedIn(true);
      } else {
        // Credenciais inválidas
        console.log('Credenciais inválidas. Verifique seu nome de usuário e senha.');
      }
    } catch (error) {
      console.error('Erro ao realizar o login:', error);
    }
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        {loggedIn ? (
          <Tab.Navigator>
            <Tab.Screen
              name="Notices"
              component={NewNoticeStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="book-open-page-variant" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Jogador"
              component={JogadorStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account-search" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Ligas/Países"
              component={PaisStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="trophy" size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              options={{
                headerShown: false, // Oculta o cabeçalho da tela de login
              }}
            >
              {props => <Login {...props} handleLogin={handleLogin} />}
            </Stack.Screen>
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </PaperProvider>

  );
}
