import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './Components/Screens/CategoriesScreen';
import MealDetailsScreen from './Components/Screens/MealDetailsScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './Components/Screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light"/>

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' }, // Default header background color for all screens in the stack
            headerTintColor: 'white', // Default header text color
            contentStyle: {
              backgroundColor: '#3f2f25', // Default background color for the screen content
            }, // Sets the default options for all screens in the stack navigator
          }}
        >
          <Stack.Screen 
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "Meal Categories", // Title for the header
            }}/>
          <Stack.Screen 
            name="MealsOverview"
            component={MealsOverviewScreen}/>

          <Stack.Screen 
            name="MealDetails"
            component={MealDetailsScreen}
            options={{
              title: 'Meal Details'
            }}

          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
