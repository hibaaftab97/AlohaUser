import * as React from 'react';
import {Easing} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import ViewProfileScreen from '../screens/General/ViewProfileScreen';
import EditProfileScreen from '../screens/General/EditProfileScreen';


function ProfileStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="ViewProfileScreen"
        component={ViewProfileScreen}
      /> 
      <Stack.Screen
        options={{headerShown: false}}
        name="EditProfileScreen"
        component={EditProfileScreen}
      />   
         
    </Stack.Navigator>
  );
}

export default ProfileStack;
