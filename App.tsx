import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import MainScreen from './src/Views/MainScreen/MainScreen';


const App: React.FC = () => {
  return (
    <Provider store={store}>
    <MainScreen/>
  </Provider>
  );
}

export default App;
