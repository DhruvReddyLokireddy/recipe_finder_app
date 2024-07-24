import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      onLogin();
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.background}>
      <Animatable.View animation="fadeInUp" duration={1500} style={styles.container}>
        <Text style={styles.title}>Recipe Finder</Text>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(text) => {
            setUsername(text);
            setErrorMessage('');
          }}
          placeholder="Enter your username"
          placeholderTextColor="#ccc"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setErrorMessage('');
          }}
          placeholder="Enter your password"
          placeholderTextColor="#ccc"
          secureTextEntry
        />
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        <Animatable.View animation="bounceIn" duration={1500}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Animatable.View>
      </Animatable.View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#344955',
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
    color: '#344955',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    fontSize: 16,
    color: '#000',
    width: '100%',
  },
  error: {
    color: 'red',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#f9aa33',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Login;