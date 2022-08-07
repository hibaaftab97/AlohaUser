import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../../components/DrawerComponents/DrawerContent';
import ProfileScreen from '../../screens/General/ProfileScreen';
import AppointmentStack from '../AppointmentStack';

import HomeScreen from '../../screens/General/HomeScreen';
import PaymentStack from '../PaymentStack';
import ProfileStack from '../ProfileStack';

import { vh, vw } from '../../units';
import ServicesStack from '../ServicesStack';
import ShopStack from '../ShopStack';
import HelpStack from '../HelpStack';
import orderStack from '../orderStack';


const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {

  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}
      screenOptions={{
        headerShown: false,
        overlayColor: 'transparent',
        drawerStyle: {
          width: 100 * vw,
          shadowOffset: {
            width: 5,
            height: 5,
          },
          shadowOpacity: 0.5,
          borderRadius: 1.5 * vh,
          shadowRadius: 4 * vw,
          elevation: 10,
        },
        sceneContainerStyle: { backgroundColor: 'black' },
      }}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="ServicesStack" component={ServicesStack} />
      <Drawer.Screen name="ShopStack" component={ShopStack} />


      <Drawer.Screen name="AppointmentStack" component={AppointmentStack} />
      <Drawer.Screen name="PaymentStack" component={PaymentStack} />
      <Drawer.Screen name="orderStack" component={orderStack} />

      <Drawer.Screen name="ProfileStack" component={ProfileStack} />
      <Drawer.Screen name="HelpStack" component={HelpStack} />


    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
