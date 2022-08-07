import { useDrawerProgress } from '@react-navigation/drawer';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Icons } from '../../../assets/images';
import { vw, vh } from '../../../units';
import TextWrapper from '../../TextWrapper';

import styles from './styles';

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
    icon: Icons.drawer8,
  },
  orderStack: {
    label: 'Order Summary',
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

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const DrawerButton = props => {
  // const progress = useDrawerProgress();
  // const translateX = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [-40 * vw * (props.index + 1), 0],
  // });
  // const animatedStyles = {
  //   transform: [{translateX}],
  // };
  const routeConfigs = drawerRoutes[props.routeName];

  return (
    <TouchableOpacity
      onPress={() => props.onPress(props.routeName)}
      style={[styles.container]}>
      <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'space-between' }}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image style={styles.icon} source={routeConfigs.icon} />
          <TextWrapper style={styles.label}>{routeConfigs.label}</TextWrapper>
        </View>
        <Image style={styles.righticon} source={Icons.rightArrow} />

      </View>



    </TouchableOpacity>
  );
};

export default DrawerButton;
