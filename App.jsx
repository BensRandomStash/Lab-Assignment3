/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const Tasks = ({}) => {
  const tasks = React.useState(['Do laundry', 'Go to gym', 'Walk dog'])}

function App() {
  return (
    <SafeAreaView>
      <ToDoList Tasks = {tasks}/>
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
