import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, Keyboard } from 'react-native';

const App = () => {
  const [escolhaUsuario, setEscolhaUsuario] = useState('');
  const [escolhaApp, setEscolhaApp] = useState('');
  const [resultado, setResultado] = useState('');

  const opcoes = ['Pedra', 'Papel', 'Tesoura'];

  const jogar = (escolha) => {
    const escolhaAleatoria = opcoes[Math.floor(Math.random() * opcoes.length)];
    setEscolhaUsuario(escolha);
    setEscolhaApp(escolhaAleatoria);
    setResultado(calcularResultado(escolha, escolhaAleatoria));
    Keyboard.dismiss(); // Fecha o teclado se aberto
  };

  const calcularResultado = (usuario, app) => {
    if (usuario === app) return 'Empate!';
    if (
      (usuario === 'Pedra' && app === 'Tesoura') ||
      (usuario === 'Tesoura' && app === 'Papel') ||
      (usuario === 'Papel' && app === 'Pedra')
    ) {
      return 'Você ganhou!';
    }
    return 'Você perdeu!';
  };

  const reiniciarJogo = () => {
    setEscolhaUsuario('');
    setEscolhaApp('');
    setResultado('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedra, Papel e Tesoura</Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={() => jogar('Pedra')} style={styles.optionButton}>
          <Image source={require('./assets/pedra.png')} style={styles.image} />
          <Text style={styles.optionText}>Pedra</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => jogar('Papel')} style={styles.optionButton}>
          <Image source={require('./assets/papel.png')} style={styles.image} />
          <Text style={styles.optionText}>Papel</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => jogar('Tesoura')} style={styles.optionButton}>
          <Image source={require('./assets/tesoura.png')} style={styles.image} />
          <Text style={styles.optionText}>Tesoura</Text>
        </TouchableOpacity>
      </View>

      {escolhaUsuario && escolhaApp && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Sua escolha: {escolhaUsuario}</Text>
          <Text style={styles.resultText}>Escolha do App: {escolhaApp}</Text>
          <Text style={styles.resultText}>{resultado}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.restartButton} onPress={reiniciarJogo}>
        <Text style={styles.buttonText}>Jogar Novamente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f7ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#005580',
    marginBottom: 30,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  optionButton: {
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#005580',
  },
  resultContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004d4d',
    marginVertical: 5,
  },
  restartButton: {
    backgroundColor: '#0099cc',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
