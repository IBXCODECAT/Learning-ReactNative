import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode='cover' 
        style={styles.rootScreen} 
        imageStyle={{opacity: 0.15}}>
        <StartGameScreen />
      </ImageBackground>
      <StatusBar style="auto"></StatusBar>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  }
});
