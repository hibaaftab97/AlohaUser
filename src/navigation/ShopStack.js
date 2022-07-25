import * as React from 'react';
import {Easing} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import ShopsScreen from '../screens/General/ShopsScreen';
import ServiceDetailScreen from '../screens/General/ServiceDetailScreen';
import BookNowScreen from '../screens/General/BookNowScreen';
import ProductDetailScreen from '../screens/General/ProductDetailScreen';


function ServicesStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="ShopsScreen"
        component={ShopsScreen}
      /> 
       <Stack.Screen
        options={{headerShown: false}}
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      /> 
         
    </Stack.Navigator>
  );
}

export default ServicesStack;
