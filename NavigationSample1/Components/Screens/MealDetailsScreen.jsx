import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../Data/Dummy";
import MealDetails from "../MealDetails";
import Subtitle from "../MealDetail/Subtitle";
import List from "../MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../IconButton";


function MealDetailsScreen({route, navigation}) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId); // Find the meal by id from the dummy data

    function headerButtonPressedHandler() {
        console.log('Header button pressed!');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                    icon="star"
                    color="white" // Color of the icon
                    onPress={headerButtonPressedHandler}/>
            }
        });
    }, [navigation, headerButtonPressedHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image 
                source={{uri: selectedMeal.imageUrl}}
                style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration} 
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability}
                textStyle={styles.detailTextOverride}/>

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />            
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 30, // Allows us to buffer the scrolling
    },
    image: {
        width: '100%', // Make the image take the full width of the screen
        height: 350, // Fixed height for the image
    },
    title: {
        fontWeight: 'bold', // Make the title bold
        fontSize: 24, // Font size for the title
        margin: 8,
        textAlign: 'center', // Center align the title
        color: 'white'
    },
    detailTextOverride: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center', // Center align the outer container for the list
    },
    listContainer: {
        width: '80%', // Make the list take 80% of the width of the screen
    },
});