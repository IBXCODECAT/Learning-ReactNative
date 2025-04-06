import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './Components/Screens/CategoriesScreen';
import MealDetailsScreen from './Components/Screens/MealDetailsScreen';

import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for drawer icon

import { NavigationContainer } from '@react-navigation/native';
import MealsOverviewScreen from './Components/Screens/MealsOverviewScreen';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from './Components/Screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return <Drawer.Navigator
      screenOptions={{
      headerStyle: { backgroundColor: '#351401' }, // Header background color for the drawer navigator
      headerTintColor: 'white', // Header text color
      sceneStyle: {
        backgroundColor: '#3f2f25', // Background color for the drawer's scenes
      },
      drawerContentStyle: {
        backgroundColor: '#3f2f25', // Background color for the drawer itself
      },
      drawerInactiveTintColor: 'white', // Color of the inactive drawer items
      drawerActiveTintColor: '#351401', // Color of the active drawer item
      drawerActiveBackgroundColor: '#e4baa1', // Background color of the active drawer item
    }}>
      <Drawer.Screen 
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Meal Categories", // Title for the drawer item
          drawerIcon: ({color, size}) =>
            (<Ionicons name="list" color={color} size={size}  />),
        }}/>

      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color, size}) =>
            (<Ionicons name="star" color={color} size={size}  />),
        }}/>
    </Drawer.Navigator>;
}

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
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false
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
