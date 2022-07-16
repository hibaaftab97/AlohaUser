import * as React from 'react';
import {Easing} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/Auth/WelcomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import GetStartedScreen from '../screens/Auth/GetStartedScreen';
import SignupScreen from '../screens/Auth/SignupScreen';

import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';


function AuthStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="WelcomeScreen"
        component={WelcomeScreen}
      /> 
       <Stack.Screen
        options={{headerShown: false}}
        name="GetStartedScreen"
        component={GetStartedScreen}
      /> 
        <Stack.Screen
        options={{headerShown: false}}
        name="SignupScreen"
        component={SignupScreen}
      /> 
      <Stack.Screen
        options={{headerShown: false}}
        name="LoginScreen"
        component={LoginScreen}
      />   
      <Stack.Screen
        options={{headerShown: false}}
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />   
    </Stack.Navigator>
  );
}

export default AuthStack;
