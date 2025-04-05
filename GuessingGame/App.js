import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';

import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

import Colors from './Constants/Colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();

  // Game starts over because the game technically has not started yet
  const [isGameOver, setIsGameOver] = useState(true);

  const [guessRounds, setGuessRounds] = useState(0);

  function startGameHandler(selectedNumber) {
    setUserNumber(selectedNumber);
    setIsGameOver(false);
  }
  
  function gameOverHandler({numRounds}) {
    setIsGameOver(true);
    setGuessRounds(numRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
    //setIsGameOver(true);
  }

  // If no user number is selected, show the start game screen
  // Otherwise, show the game screen with the selected number
  let screenToRender = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber) {
    screenToRender = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  }

  if(isGameOver && userNumber) {
    screenToRender = <GameOverScreen
      userNumber={userNumber}
      roundsNumber={guessRounds}
      onStartNewGame={startNewGameHandler}
    />;
  }

  return (
    <>
      <StatusBar style="light"></StatusBar>
      <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
        <ImageBackground 
          source={require('./assets/images/background.png')} 
          resizeMode='cover' 
          style={styles.rootScreen} 
          imageStyle={styles.backgroundImage}>
          <SafeAreaView style={styles.rootScreen}>{screenToRender}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
    
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});
