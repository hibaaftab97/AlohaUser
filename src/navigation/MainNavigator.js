import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import DrawerNavigator from './DrawerNavigator';
import ConactUsScreen from '../screens/General/ContactUsScreen';
import CartScreen from '../screens/General/CartScreen';
import DeliveryScreen from '../screens/General/DeliveryScreen';
import PaymentScreen from '../screens/General/PaymentScreen';
import { useSelector } from 'react-redux';


function MainNavigator() {

  const Stack = createStackNavigator();
  const loggedIn = useSelector(state => state.authReducer.loggedin);


  return (
    <Stack.Navigator>

      {!loggedIn ? <Stack.Screen
        options={{ headerShown: false }}
        name="AuthStack"
        component={AuthStack}
      />
        : <Stack.Screen
          options={{ headerShown: false }}
          name="DrawerNavigator"
          component={DrawerNavigator}
        />}
      <Stack.Screen
        options={{ headerShown: false }}
        name="CartScreen"
        component={CartScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="DeliveryScreen"
        component={DeliveryScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="PaymentScreen"
        component={PaymentScreen}
      />


    </Stack.Navigator>
  );
}

export default MainNavigator;
