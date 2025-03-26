import { useState } from "react";
import { 
    Alert,
    KeyboardAvoidingView,
    ScrollView, 
    StyleSheet,
    TextInput,
    useWindowDimensions,
    View 
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

import Colors from "../Constants/Colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Heading from "../components/ui/Heading";
import { DIMEN_TURNARY_THRESHOLD_H, DIMEN_TURNARY_THRESHOLD, WINDOW_DIMEN } from "../Constants/Dimensions";

function StartGameScreen({onStartGame}) { 

    const [enteredNumber, setEnteredNumber] = useState('');

    // Monitors for changes in the window dimensions and rotations
    const {width, height} = useWindowDimensions();

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

    const r_marginTop = height < DIMEN_TURNARY_THRESHOLD ? 30 : 100;

    return (
        <ScrollView style={styles.screen}>

            <KeyboardAvoidingView style={styles.screen} behavior="position" keyboardVerticalOffset={30}>
                <View style={[styles.rootContainer, {marginTop: r_marginTop}]}>
                    <Title>Guess my Number</Title>
                    <Card>
                        <Heading>Enter a Number</Heading>
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
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        marginTop: WINDOW_DIMEN.height < DIMEN_TURNARY_THRESHOLD_H ? 30 : 100,
        alignItems: 'center',
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