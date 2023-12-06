import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/Screens/SignUpScreen/SignUp';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  SignUp:undefined;
};

const App: React.FC = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
    <Stack.Navigator >
    <Stack.Screen name="Home"  options={{headerShown: false}} component={HomeScreen} />
    <Stack.Screen name="SignUp"  options={{headerShown: false}} component={SignUp} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});