import React, { useState } from 'react';
import styles from './styles';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useDrawerProgress, DrawerContentScrollView, } from '@react-navigation/drawer';
import TextWrapper from '../../TextWrapper';
import { Icons } from '../../../assets/images';
import theme from '../../../utils/theme';
import { vh, vw } from '../../../units';
import DrawerButton from '../DrawerButton';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';


const routeOrders = [
  'HomeScreen',
  'ServicesStack',
  'ShopStack',
  'AppointmentStack',
  'PaymentStack',
  'ProfileStack',
  'HelpStack',
];
const drawerRoutes = {
  HomeScreen: {
    label: 'Home',
    icon: Icons.drawer1,
  },
  ServicesStack: {
    label: 'Services',
    icon: Icons.drawer2,
  },
  ShopStack: {
    label: 'Shop',
    icon: Icons.drawer3,
  },
  AppointmentStack: {
    label: 'All Appointments',
    icon: Icons.drawer4,
  },

  PaymentStack: {
    label: 'Payments',
    icon: Icons.drawer5,
  },
  ProfileStack: {
    label: 'Profile',
    icon: Icons.drawer6,
  },
  HelpStack: {
    label: 'Help',
    icon: Icons.drawer7,
  },

};


const DrawerContent = props => {
  const [timeIn, setTimein] = useState(false)
  const navigation = useNavigation();


  const handleOnDrawerItemPress = routeName => {
    if (drawerRoutes[routeName]) {
      if (drawerRoutes[routeName].notRoute != true) {
        return props.navigation.navigate(routeName);
      }
    }
  };



  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ backgroundColor: theme.primary, flex: 1 }}>
      {/* <ImageBackground source={Icons.drawerbg}
        imageStyle={{ width: 80 * vw, height: 50 * vh }}
        resizeMode='cover'
        style={{ width: 80 * vw, height: 20 * vh, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={Icons.logo}
          style={styles.logo} />
      </ImageBackground> */}
<TouchableOpacity onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer())}>
<Image source={Icons.leftArrow} 
      style={styles.arrow}/>
</TouchableOpacity>
   
      <View style={{ alignItems: 'center' }}>
        <Image style={styles.searchIconStyle} source={Icons.profile} />
        <TextWrapper style={styles.title}>John Doe</TextWrapper>

      </View>

      <View style={styles.routeContainer}>
        {routeOrders.map((item, index) => {
          return (
            <DrawerButton
              index={index}
              onPress={handleOnDrawerItemPress}
              routeName={item}
            />
          );
        })}
      </View>


    </DrawerContentScrollView>
  );
};
export default DrawerContent;
