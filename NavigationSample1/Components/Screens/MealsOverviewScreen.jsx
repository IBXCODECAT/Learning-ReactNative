import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../../Data/Dummy";
import MealItem from "../MealItem";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({route, navigation}) {
    
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        // Filter the meals based on the category id passed from the previous screen
        return mealItem.categoryIds.indexOf(catId) >= 0; // returns true if the mealItem belongs to the categoryId
    });
    
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId
        ).title;
        
        navigation.setOptions({
            title: categoryTitle,
        });
    
    }, [catId, navigation]);

    function renderMealItem(itemData) {

        const item = itemData.item; // Get the actual meal item from the FlatList
        const mealItemProps = {
            id: item.id, // id is a string in the dummy data
            title: item.title, 
            imageUrl: item.imageUrl, // imageUrl is a string in the dummy data
            affordability: item.affordability, // affordability is a string in the dummy data
            duration: item.duration, // duration is a number in the dummy data
            complexity: item.complexity // complexity is a string in the dummy data
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