import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';
import Constants from 'expo-constants';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const navigation = useNavigation();

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  const handleLoginPress = async () => {
    const loginSuccess = await handleLogin(username, password);
  
    if (!loginSuccess) {
      setShowError(true);
    }
  };

  const handleBiometricLogin = async () => {
    try {
      const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
      const areEnrolled = await LocalAuthentication.isEnrolledAsync();
  
      if (isBiometricAvailable && areEnrolled) {
        const result = await LocalAuthentication.authenticateAsync({
          promptMessage: 'Autenticar usando biometria',
        });
  
        if (result.success) {
          console.log('Autenticação por biometria bem-sucedida');
    
          const storedUsers = await AsyncStorage.getItem('users');
          const users = storedUsers ? JSON.parse(storedUsers) : [];
    
          // Obtém o usuário correspondente à biometria
          const biometricUser = users.find((user) => user.deviceName === Constants.deviceName);
    
          if (biometricUser) {
            const loginSuccess = await handleLogin(biometricUser.username, biometricUser.password);
    
            if (!loginSuccess) {
              setShowError(true);
            }
          } else {
            console.log('Usuário associado à biometria não encontrado.');
          }
        } else {
          console.log('Falha na autenticação por biometria');
        }
      } else {
        console.log('Biometria não disponível ou não cadastrada');
      }
    } catch (error) {
      console.error('Erro ao autenticar por biometria:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {showError && (
        <Text style={styles.errorText}>Credenciais inválidas. Verifique seu nome de usuário e senha.</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleBiometricLogin}>
        <Text style={styles.buttonText}>Login por Biometria</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton} onPress={navigateToRegister}>
        <Text style={styles.buttonText}>Registre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  registerButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
