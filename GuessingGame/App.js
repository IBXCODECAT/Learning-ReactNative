import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground, StyleSheet } from 'react-native';

import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();

  function startGameHandler(selectedNumber) {
    setUserNumber(selectedNumber);
  }

  // If no user number is selected, show the start game screen
  // Otherwise, show the game screen with the selected number
  let screen = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber) {
    screen = <GameScreen userChoice={userNumber} />;
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode='cover' 
        style={styles.rootScreen} 
        imageStyle={styles.backgroundImage}>
        
        {screen /* Render the screen based on the user number */}
      </ImageBackground>
      <StatusBar style="auto"></StatusBar>
    </LinearGradient>
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
