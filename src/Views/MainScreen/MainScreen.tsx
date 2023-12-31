import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../../Screens/SignUpScreen/SignUp';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import LogIn from '../../components/Login/Login';


export type RootStackParamList = {
  Home: undefined;
  SignUp:undefined;
  Login:undefined;
};

const MainScreen: React.FC = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
    <Stack.Navigator >
    <Stack.Screen name="Home"  options={{headerShown: false}} component={HomeScreen} />
    <Stack.Screen name="SignUp"  options={{headerShown: false}} component={SignUp} />
    <Stack.Screen name="Login"   options={{headerShown: false}} component={LogIn} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default MainScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});