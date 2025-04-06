import { useNavigation } from "@react-navigation/native";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";

function MealItem({id, title, imageUrl, duration, complexity, affordability}) {
    
    const navigation = useNavigation();
    
    function selectMealItemHandler() {
        navigation.navigate('MealDetails', {
            mealId: id,
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{color: "#ccc" }} // Android ripple effect
                style={({pressed}) => pressed ? styles.btnPressed : null} // For iOS feedback
                onPress={selectMealItemHandler} /* When the meal item is pressed, navigate to MealDetails */
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>

                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8, // Rounded corners for the meal item container
        overflow: 'hidden', // Ensures that the image does not overflow the rounded corners
        backgroundColor: 'white', // Background color for the meal item container

        elevation: 4, // For Android shadow
        shadowColor: 'black', // For iOS shadow
        shadowOpacity: 0.35, // For iOS shadow
        shadowOffset: { width: 0, height: 2 }, // For iOS shadow offset
        shadowRadius: 16, // For iOS shadow radius
        overflow: Platform.OS === "android" ? 'hidden' : 'visible', // For Android to clip the shadow properly, on iOS it will be visible
    },
    btnPressed: {
        opacity: 0.5, // This is used to show feedback when the button is pressed on iOS
    },
    innerContainer: {
        borderRadius: 8, // To match the mealItem borderRadius
        overflow: 'hidden', // Ensures that the content does not overflow the rounded corners of the meal item
    },
    image: {
        width: '100%', // Make sure the image takes the full width of the container
        height: 200, // Set a fixed height for the image
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row', // Align the details in a row
        alignItems: 'center', // Center align the items vertically
        justifyContent: 'center', // Center align the items horizontally
        padding: 8, // Padding around the details text
    },
    detailItem: {
        marginHorizontal: 4, // Space between each detail item
        fontSize: 14, // Font size for the details text
    }
});