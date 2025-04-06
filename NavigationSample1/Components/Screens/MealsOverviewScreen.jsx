import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../Data/Dummy";

function MealsOverviewScreen() {
    return (
        <View style={styles.contianer}>
            <Text>
                Meals Overview Screen
            </Text>
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