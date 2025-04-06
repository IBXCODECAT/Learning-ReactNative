import { Image, Text, View } from "react-native";
import { MEALS } from "../../Data/Dummy";
import MealDetails from "../MealDetails";

function MealDetailsScreen({route}) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId); // Find the meal by id from the dummy data

    return (
        <View>
            <Image source={{uri: selectedMeal.imageUrl}}/>
            <Text>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration} 
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability}/>

            <Text>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => <Text key={ingredient}>{ingredient}</Text>)}
            <Text>Steps</Text>
            {selectedMeal.steps.map(step => <Text key={step}>{step}</Text>)}
}
        </View>
    );
}

export default MealDetailsScreen;