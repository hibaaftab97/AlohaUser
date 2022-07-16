import React from 'react';
import {ImageBackground, StyleSheet, View,Image} from 'react-native';
import theme from '../../utils/theme';
import {vh, vw} from '../../units';
import { Icons } from '../../assets/images';

const MainContainer = props => {
  return (
    <ImageBackground
      {...props}
      style={[styles.container, props.style]}
      source={props.source ? props.source :require('../../assets/images/BG.png')}
    >
      <Image  source={Icons.logo}
      style={styles.logoImg}
      resizeMode='contain'/>
      {/* <Image  source={require('../../assets/images/randomImg.png')}/> */}
      {props.children}
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.whiteBackground,
    width:100*vw,
    alignItems:'center',
    flex: 1,
  },
  logoImg:{
    resizeMode: 'contain',
    height: 50 * vh,
    width: 50 * vw,
  }
});
export default MainContainer;
