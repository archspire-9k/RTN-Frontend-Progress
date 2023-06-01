
import React, { createContext, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './src/screens/MainScreen';
import { Provider } from 'react-redux';
import store from './redux/store';


const utils = () => {
  //add the todo from the text input into the list after onPress is called
  const addTodo = () => {

  }

  //edit the todo 
  const editTodo = () => {

  }

  //remove the existing todo element
  const removeTodo = () => {

  }
}

const Stack = createStackNavigator();

export const AppNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;

