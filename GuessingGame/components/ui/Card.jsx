import { StyleSheet,  View } from "react-native";
import Colors from "../../Constants/Colors";

function Card({children}) {
    return (
        <View style={styles.card}>{children}</View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,

        // Android Shadow
        elevation: 4,

        // iOS Shadow
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
});