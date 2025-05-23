import { StyleSheet, Text, View } from "react-native";

function MealDetails({duration, complexity, affordability, style, textStyle }) {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
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