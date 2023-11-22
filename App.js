// Importe outras bibliotecas e componentes conforme necessário

import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './src/screens/Login/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NewNoticeStack from './src/screens/noticia/NewNoticeStack';
import JogadorStack from './src/screens/jogador/JogadorStack';
import LigaStack from './src/screens/Ligas/LigaStack';
import PaisStack from './src/screens/Paises/PaisStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/screens/Login/Register';

import MyTheme from './src/theme/MyThema';
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {

  const RenderLogoutScreen = () => <LogoutScreen />;


  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (username, password) => {
    try {
      // Recupera os dados do usuário do armazenamento local
      const storedUsers = await AsyncStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      // Verifica se os dados coincidem
      const userMatch = users.find(user => user.username === username && user.password === password);

      if (userMatch) {
        // Login bem-sucedido
        setLoggedIn(true);
        return true;
      } else {
        // Credenciais inválidas
        console.log('Credenciais inválidas. Verifique seu nome de usuário e senha.');
        return false;
      }
    } catch (error) {
      console.error('Erro ao realizar o login:', error);
      return false;
    }
  };

  const handleLogout = () => {
    // Lógica para realizar o logout, se necessário
    setLoggedIn(false);
  };

  return (
    <PaperProvider theme={MyTheme} >
      <NavigationContainer>
        {loggedIn ? (
          <Tab.Navigator
            activeTintColor="white" // Define a cor do texto e ícones ativos
            inactiveTintColor="white" // Define a cor do texto e ícones inativos
          >
            {/* Suas abas aqui */}
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
            {/* Botão de Logout */}
            <Tab.Screen
              name="Logout"
              component={RenderLogoutScreen} // Use o componente com a primeira letra em maiúscula
              listeners={({ navigation }) => ({
                tabPress: (e) => {
                  e.preventDefault();
                  handleLogout();
                },
              })}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="power" size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              options={{
                headerShown: false,
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
