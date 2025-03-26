import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../Constants/Colors";
import { WINDOW_DIMEN } from "../../Constants/Dimensions";

function NumberContainer({children}) {

    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: WINDOW_DIMEN.width < 380 ? 12 : 24,
        margin: WINDOW_DIMEN.width < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent500,
        fontSize: WINDOW_DIMEN.width < 380 ? 28 : 36,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});