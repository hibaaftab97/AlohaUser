import * as React from 'react';
import {Easing} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import ServicesScreen from '../screens/General/ServicesScreen';
import ServiceDetailScreen from '../screens/General/ServiceDetailScreen';
import BookNowScreen from '../screens/General/BookNowScreen';


function ServicesStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="ServicesScreen"
        component={ServicesScreen}
      /> 
        <Stack.Screen
        options={{headerShown: false}}
        name="ServiceDetailScreen"
        component={ServiceDetailScreen}
      /> 
        <Stack.Screen
        options={{headerShown: false}}
        name="BookNowScreen"
        component={BookNowScreen}
      /> 
         
    </Stack.Navigator>
  );
}

export default ServicesStack;
