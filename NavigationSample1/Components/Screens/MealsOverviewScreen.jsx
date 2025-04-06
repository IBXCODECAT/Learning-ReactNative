import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../Data/Dummy";
import MealItem from "../MealItem";

function MealsOverviewScreen({route}) {
    
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        // Filter the meals based on the category id passed from the previous screen
        return mealItem.categoryIds.indexOf(catId) >= 0; // returns true if the mealItem belongs to the categoryId
    });
    
    function renderMealItem(itemData) {

        const mealItemProps = {
            title: itemData.item.title, 
            imageUrl: itemData.item.imageUrl, // imageUrl is a string in the dummy data
            affordability: itemData.item.affordability, // affordability is a string in the dummy data
            duration: itemData.item.duration, // duration is a number in the dummy data
            complexity: itemData.item.complexity // complexity is a string in the dummy data
        }

        // Distribute Props
        return <MealItem {...mealItemProps}/>;
    }

    return (
        <View style={styles.contianer}>
            <FlatList 
                data={displayedMeals}
                keyExtractor={(item) => item.id} // Unique key for each item in the list
                renderItem={renderMealItem}/>
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        padding: 16, // for padding around the text
    }
});