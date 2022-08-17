import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './MainNavigator';
import { Platform, SafeAreaView } from "react-native";
import SplashScreen from "react-native-splash-screen";
import theme from '../utils/theme';


function Navigation() {
  useEffect(() => {
    SplashScreen.hide();
  });


  return (
    <SafeAreaView style={{ flex: 1,
      backgroundColor: theme.primary,
      paddingTop: Platform.OS === 'android' ? 25 : 0
      }}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default Navigation;
