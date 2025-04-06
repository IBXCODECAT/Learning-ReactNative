import { FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from "../../Data/Dummy";
import CategoryGridTile from '../CategoryGridTile';



// Navigation prop provided by the stack navigator will be available in the screen component
function CategoriesScreen({navigation}) {
  function renderCategoryItem(itemData) {
    function pressedHandler() {
      navigation.navigate('MealsOverview');
    }
  
    return (
          <CategoryGridTile
              title={itemData.item.title}
              color={itemData.item.color}
              onPressed={pressedHandler}/>
      )
  }

  return (
    <FlatList 
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2} // This will create a grid layout with 2 columns
    />
  );
}

export default CategoriesScreen;

