import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandlerViaModal() {
    setModalIsVisible(true);
  }

  function endAddGoalHandlerViaModal() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      // This key genreator is not good for production code, but it's fine for this example.
      // It is possible to have duplicates.
      {text: enteredGoalText, key: Math.random().toString()},
    ]);

    // Manually close the modal via direct call to the handler function
    endAddGoalHandlerViaModal();

    console.log("Goals Added: " + enteredGoalText);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== id);
    })
    console.log("Goal Deleted: " + id);
  }

  return (
    <View style={styles.appContainer}>
      <Button 
        title="Add New Goal"
        color="5e0acc"
        onPress={startAddGoalHandlerViaModal} />
      <GoalInput 
        visible={modalIsVisible} 
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandlerViaModal} />
      <View style={styles.goalsContainer}>
        
        {/* A flatlist is a list that only renders the items that are currently visible on the 
        screen. The rest are lazy-loaded based on how clos you are in the scroll view
        */}
        
        <FlatList 
        data={courseGoals}
        renderItem={itemData => {
          return (
            <GoalItem 
              text={itemData.item.text} 
              id={itemData.item.key}
              onDeleteItem={deleteGoalHandler}/>
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
  goalsContainer: {
    flex: 5,
  }
});
