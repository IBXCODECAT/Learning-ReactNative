import { CATEGORIES } from "../../Data/Dummy";

function CategoriesScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Categories Screen</Text>
      <Button
        title="Go to Products"
        onPress={() => navigation.navigate('Products')}
      />
    </SafeAreaView>
  );
}

export default CategoriesScreen;