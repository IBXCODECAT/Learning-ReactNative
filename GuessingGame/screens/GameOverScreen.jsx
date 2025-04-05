import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../Constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import { DIMEN_TURNARY_THRESHOLD, WINDOW_DIMEN } from "../Constants/Dimensions";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    
    const {width, height} = useWindowDimensions();

    let imageSize = 300;

    if(width < DIMEN_TURNARY_THRESHOLD) {
        // If the width of the screen is less than the threshold, use a smaller image
        imageSize = 150;
    }

    if(height < DIMEN_TURNARY_THRESHOLD) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2, // Make it circular
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>Game Over!</Title>
                <View style={[styles.imageContianer, imageStyle]}>
                    <Image 
                        style={styles.imageStyle}
                        source={require('./../assets/images/success.png')}
                    />
                </View>
                <Text style={styles.summaryText}>You're phone needed
                    <Text style={styles.highlightText}> {roundsNumber} </Text>
                    rounds to guess the number 
                    <Text style={styles.highlightText}> {userNumber}</Text>
                .</Text>
                <PrimaryButton onPress={onStartNewGame} >Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1, // Make sure the scroll view takes the full height of the screen
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContianer: {
        // width: WINDOW_DIMEN.width < DIMEN_TURNARY_THRESHOLD ? 150 : 300,
        // height: WINDOW_DIMEN.width < DIMEN_TURNARY_THRESHOLD ? 150 : 300,
        // borderRadius: WINDOW_DIMEN.width < DIMEN_TURNARY_THRESHOLD ? 75 : 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    imageStyle: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlightText: {
        color: Colors.primary500,
        fontWeight: 'bold',
    }
});