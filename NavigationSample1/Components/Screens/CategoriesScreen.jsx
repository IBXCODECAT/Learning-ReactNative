import { FlatList } from 'react-native';
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
    />
  );
}

export default CategoriesScreen;