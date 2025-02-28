import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

// Exclude the user's number from the random number generation
// This is used to prevent the phone from winning the game the first round
function generateRandomNumber(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    }
    else {
        return rndNum;
    }
}

let minBounds = 0;
let maxBounds = 100;

function GameScreen({userChoice}) {
    const initialGuess = generateRandomNumber(minBounds, maxBounds, userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function nextGuessHandler(isGreater /*boolean*/) {
        
        if (
            (isGreater === false && currentGuess < userChoice) ||
            (isGreater === true && currentGuess > userChoice)
        ) {
            Alert.alert("Don't lie!", "You know this is wrong...", [{text: 'Sorry!', style: 'cancel'}]);
            return;
        }
        
        if(isGreater === true) {
            minBounds = currentGuess + 1; // Min boundry is inclusive, so we add 1 to the current guess
        } else {
            maxBounds = currentGuess; // Max boundry is exclusive, so we set it to the current guess
        }

        // Generate a new random number between the min and max bounds
        const newGuess = generateRandomNumber(minBounds, maxBounds, currentGuess);
        setCurrentGuess(newGuess);
    }

    return (
        <View style={styles.screen}>
            <Title>Oponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, false)}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, true)}>+</PrimaryButton>
                </View>
            </View>
        </View>
    )
 }

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        paddingTop: 48,
    },
    
});