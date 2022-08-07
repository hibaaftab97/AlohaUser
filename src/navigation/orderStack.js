import * as React from 'react';
import {Easing} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import OrdersScreen from '../screens/General/OrdersScreen';
import OrderSummaryScreen from '../screens/General/OrderSummaryScreen';



function orderStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="OrdersScreen"
        component={OrdersScreen}
      /> 

<Stack.Screen
        options={{headerShown: false}}
        name="OrderSummaryScreen"
        component={OrderSummaryScreen}
      /> 
       
         
    </Stack.Navigator>
  );
}

export default orderStack;
