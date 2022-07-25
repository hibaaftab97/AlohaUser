import * as React from 'react';
import {Easing} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../screens/General/ProfileScreen';
import EditProfileScreen from '../screens/General/EditProfileScreen';
import HelpScreen from '../screens/General/HelpScreen';
import ConactUsScreen from '../screens/General/ContactUsScreen';


function HelpStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="ProfileScreen"
        component={ProfileScreen}
      />  */}
      <Stack.Screen
        options={{headerShown: false}}
        name="HelpScreen"
        component={HelpScreen}
      />   
         <Stack.Screen
          options={{headerShown: false}}
          name="ConactUsScreen"
          component={ConactUsScreen}
        /> 
    </Stack.Navigator>
  );
}

export default HelpStack;
