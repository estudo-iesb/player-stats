// Importações necessárias
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LogoutScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Lógica para realizar o logout, se necessário
    // ...

    // Define o estado de logado como falso
    setLoggedIn(false);

    // Navega de volta para a tela de login
    navigation.navigate('login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Conteúdo da tela de Logout, se necessário */}

      {/* Botão de Saída */}
      <TouchableOpacity onPress={handleLogout} style={{ marginTop: 20, padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
        <Text style={{ color: 'white' }}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogoutScreen;

