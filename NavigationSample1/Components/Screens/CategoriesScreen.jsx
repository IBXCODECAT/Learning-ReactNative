import { FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from "../../Data/Dummy";
import CategoryGridTile from '../CategoryGridTile';

function renderCategoryItem(itemData) {
    return (
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}/>
    )
}

function CategoriesScreen() {
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

