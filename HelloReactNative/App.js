import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      // This key genreator is not good for production code, but it's fine for this example.
      // It is possible to have duplicates.
      {text: enteredGoalText, key: Math.random().toString()},
    ]);
    console.log("Goals Added: " + enteredGoalText);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          onChangeText={goalInputHandler}
          placeholder='your goal' 
          style={styles.textInput}
          />
        <Button onPress={addGoalHandler} title='Add Goal' />
      </View>
      <View style={styles.goalsContainer}>
        
        {/* A flatlist is a list that only renders the items that are currently visible on the 
        screen. The rest are lazy-loaded based on how clos you are in the scroll view
        */}
        
        <FlatList 
        data={courseGoals}
        renderItem={itemData => {
          return (
            <GoalItem text={itemData.item.text}/>
          );
        }}
        keyExtractor={(item, index) => {
          return item.key;
        }} 
        alwaysBounceVertical={false}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  }
});
