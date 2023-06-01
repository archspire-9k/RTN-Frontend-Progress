
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';
import React, { createContext, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
// import { Loading, MainScreen } from './src/screens';
import MainScreen from './src/screens/MainScreen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from './src/stores/rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

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
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}></PersistGate>
      <AppNavigator />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  submitButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
