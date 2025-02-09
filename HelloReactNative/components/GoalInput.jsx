import { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

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
                <TextInput 
                    onChangeText={goalInputHandler}
                    placeholder='your goal' 
                    style={styles.textInput}
                    value={enteredGoalText}
                    />
                <View style={styles.modalButtonContainer}>
                    <View style={styles.buttonContainerView}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.buttonContainerView}>
                        <Button title='Cancel' onPress={props.onCancel} />
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
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
        textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
    },
    modalButtonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    buttonContainerView: {
        width: 100,
        marginHorizontal: 16,
    }
});