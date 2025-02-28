import { StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";

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

function GameScreen({userChoice}) {
    const initialGuess = generateRandomNumber(1, 100, userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return (
        <View style={styles.screen}>
            <Title>Oponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                
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