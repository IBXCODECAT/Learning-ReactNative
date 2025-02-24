import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() { 
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCorrect={false}
                />
            <View style={styles.btnMultiContainer}>
                <View style={styles.btnContainer}><PrimaryButton>Reset</PrimaryButton></View>
                <View style={styles.btnContainer}><PrimaryButton>Confirm</PrimaryButton></View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#4e0329',
        borderRadius: 8,

        // Android Shadow
        elevation: 4,

        // iOS Shadow
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },

    numberInput: {
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    btnMultiContainer: {
        flexDirection: 'row',
    },

    btnContainer: {
        flex: 1,
    }
});