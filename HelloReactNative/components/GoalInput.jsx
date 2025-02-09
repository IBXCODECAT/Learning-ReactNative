import { useState } from 'react';
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';

function GoalInput(props) {
    
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image 
                    style={styles.image} 
                    source={require('./../assets/images/goal.png')}/>
                <TextInput 
                    onChangeText={goalInputHandler}
                    placeholder='your goal' 
                    style={styles.textInput}
                    value={enteredGoalText}
                    />
                <View style={styles.modalButtonContainer}>
                    <View style={styles.buttonContainerView}>
                        <Button 
                        title='Cancel' 
                        color={'#f31282'}
                        onPress={props.onCancel} />
                    </View>
                    <View style={styles.buttonContainerView}>
                        <Button 
                        title="Add Goal" 
                        color='#5e0acc'
                        onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    modalButtonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    buttonContainerView: {
        width: 100,
        marginHorizontal: 16,
    },
});