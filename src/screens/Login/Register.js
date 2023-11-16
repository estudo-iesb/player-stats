import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameExists, setUsernameExists] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    checkUsernameExists();
    checkPasswordsMatch();
  }, [username, password, confirmPassword]);

  const checkUsernameExists = async () => {
    try {
      const storedUsers = await AsyncStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      const usernameExists = users.some((user) => user.username === username);

      setUsernameExists(usernameExists);
    } catch (error) {
      console.error('Erro ao verificar o nome de usuário:', error);
    }
  };

  const checkPasswordsMatch = () => {
    if (password === confirmPassword) {
      setPasswordsMatch(true);
      setErrorMessage(''); // Senhas coincidem, então limpa a mensagem de erro
    } else {
      setPasswordsMatch(false);
      setErrorMessage('As senhas não coincidem. Verifique e tente novamente.');
    }
  };

  const handleRegister = async () => {
    if (passwordsMatch) {
      try {
        const storedUsers = await AsyncStorage.getItem('users');
        const users = storedUsers ? JSON.parse(storedUsers) : [];

        const usernameExists = users.some((user) => user.username === username);

        if (usernameExists) {
          setUsernameExists(true);
          return;
        }

        users.push({ username, password });
        await AsyncStorage.setItem('users', JSON.stringify(users));

        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('password', password);

        console.log('Cadastro salvo com sucesso!');

        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
          setUsernameExists(false);
          navigation.navigate('Login');
        }, 3000);
      } catch (error) {
        console.error('Erro ao salvar o cadastro:', error);
      }
    } else {
      console.log('Senhas não coincidem. Verifique e tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      {showSuccessMessage && (
        <View style={styles.successMessage}>
          <Text style={styles.successMessageText}>Cadastro Realizado!</Text>
        </View>
      )}

      {usernameExists && (
        <Text style={styles.errorText}>Nome de usuário já existe. Escolha outro nome de usuário.</Text>
      )}

      {errorMessage !== '' && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        onChangeText={(text) => setUsername(text)}
        onBlur={checkUsernameExists}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry={true}
        onChangeText={(text) => setConfirmPassword(text)}
      />

      <TouchableOpacity
        style={[styles.button, (passwordsMatch && !usernameExists) ? styles.buttonEnabled : styles.buttonDisabled]}
        onPress={handleRegister}
        disabled={!passwordsMatch || usernameExists}
      >
        <Text style={styles.buttonText}>Salvar Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Voltar para o Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonEnabled: {
    backgroundColor: 'blue',
  },
  buttonDisabled: {
    backgroundColor: 'gray',
  },
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
  buttonText: {
    color: 'white',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  successMessage: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  successMessageText: {
    color: 'white',
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  loginLink: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Register;
