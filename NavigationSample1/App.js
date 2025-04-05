import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './Components/Screens/CategoriesScreen';

export default function App() {
  return (
    <View>

      <CategoriesScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
