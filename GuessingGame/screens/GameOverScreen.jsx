import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../Constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContianer}>
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
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContianer: {
        width: 300,
        height: 300,
        borderRadius: 150,
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