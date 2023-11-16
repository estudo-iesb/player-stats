import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false); // Novo estado para controlar a exibição do erro
  const navigation = useNavigation();

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  const handleLoginPress = async () => {
    const loginSuccess = await handleLogin(username, password);

    if (!loginSuccess) {
      // Exibir a mensagem de erro
      setShowError(true);
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

      {/* Botão de registro */}
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
    backgroundColor: 'green', // Cor do botão de registro
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  registerLink: {
    fontSize: 20,
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
