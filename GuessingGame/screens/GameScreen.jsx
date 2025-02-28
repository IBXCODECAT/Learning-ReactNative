import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import { Ionicons } from "@expo/vector-icons";

import GuessLogItem from "../components/game/GuessLogItem";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import Heading from "../components/ui/Heading";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../Constants/Colors";

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

let minBounds = 1;
let maxBounds = 100;

function GameScreen({userChoice, onGameOver}) {
    // Use 1 and 100 because this is being executed every time the game screen is rendered
    const initialGuess = generateRandomNumber(1, 100, userChoice);

    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if(currentGuess === userChoice) {
            onGameOver(guessRounds.length);
            Alert.alert('You won!', 'The phone guessed your number!', [{text: 'OK', style: 'cancel'}]);
        }
    }, [currentGuess, userChoice, onGameOver]);

    // Set the min and max bounds when the component is first rendered
    useEffect(() => {
        minBounds = 1;
        maxBounds = 100;
    }, []);

    function nextGuessHandler(isGreater /*boolean*/) {
        
        if (
            (isGreater === false && currentGuess < userChoice) ||
            (isGreater === true && currentGuess > userChoice)
        ) {
            Alert.alert("Don't lie!", "You know this is wrong...", [{text: 'I\'m Sorry!', style: 'cancel'}]);
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

        setGuessRounds(prevGuessRounds => [newGuess, ...prevGuessRounds]);
    }

    const guessRoundsListlength = guessRounds.length;

    return (
        <View style={styles.screen}>
            <Title>Oponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <Heading style={styles.instructionText}>Higher or Lower?</Heading>
                <View style={styles.btnMultiContainer}>
                    <View style={styles.btnContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, false)}>
                            <Ionicons name="arrow-down-sharp" size={24} color={Colors.white}/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.btnContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, true)}>
                            <Ionicons name="arrow-up-sharp" size={24} color={Colors.white}/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.lstContainer}>
                {/* guess round can be used as key since it is garanteed to occur once */}
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => (
                        <GuessLogItem
                            roundNumber={guessRoundsListlength - itemData.index}
                            guess={itemData.item}
                        />
                    )}
                    keyExtractor={(item) =>  item}  
                />
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

    instructionText: {
        marginbottom: 12,
    },

    btnMultiContainer: {
        flexDirection: 'row',
    },

    btnContainer: {
        flex: 1,
    },

    lstContainer: {
        flex: 1,
        padding: 16
    }
});