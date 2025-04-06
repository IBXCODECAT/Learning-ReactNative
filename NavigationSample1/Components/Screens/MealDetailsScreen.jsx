import { Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../Data/Dummy";
import MealDetails from "../MealDetails";

function MealDetailsScreen({route}) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId); // Find the meal by id from the dummy data

    return (
        <View>
            <Image 
                source={{uri: selectedMeal.imageUrl}}
                style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration} 
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability}
                textStyle={styles.detailTextOverride}/>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Ingredients</Text>
            </View>
            {selectedMeal.ingredients.map(ingredient => <Text key={ingredient}>{ingredient}</Text>)}
            
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Steps</Text>
            </View>

            {selectedMeal.steps.map(step => <Text key={step}>{step}</Text>)}
        </View>
    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
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
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold', // Make the subtitle bold,
        textAlign: 'center', // Center align the subtitle
    },
    subtitleContainer: {
        padding: 6,
        borderBottomColor: '#e2b497', // Add a bottom border to the subtitle for better visibility
        borderBottomWidth: 2, // Thickness of the bottom border
        marginVertical: 4, // Use vertical to allow horizontal line to go across entire screen
        marginHorizontal: 16, // Add some horizontal margin to align past the width the edges of the screen
    }
});