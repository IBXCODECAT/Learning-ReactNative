import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

import Colors from "../Constants/Colors";

function StartGameScreen({onStartGame}) { 

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(inputText) {
        setEnteredNumber(inputText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Please enter a valid integer between 1 and 99',
                [{text: 'I Understand', style: 'destructive', onPress: resetInputHandler}]
            );

            // Start the game with the chosen number
            return;
        }

        onStartGame(chosenNumber);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
                />
            <View style={styles.btnMultiContainer}>
                <View style={styles.btnContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
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

    numberInput: {
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
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