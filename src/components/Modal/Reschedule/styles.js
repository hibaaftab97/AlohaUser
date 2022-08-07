import {StyleSheet} from 'react-native';

import {vh, vw} from '../../../units/index';

import {Fonts} from '../../../assets/fonts/index';
import theme from '../../../utils/theme';

export default StyleSheet.create({
  blurViewStyle: {
    height: 100 * vh,
    width: 100 * vw,
    position: 'absolute',
    backgroundColor: '#707070',
    opacity: 0.7,
  },

  crossIconStyle: {
    resizeMode: 'contain',
    height: 5 * vw,
    width: 5 * vw,
  },
  res:{
    fontFamily: Fonts.Poppins_Bold,
    fontSize: 2.5 * vh,
    color:'white',
    textAlign: 'center',
  },
  alertMainView: {
    backgroundColor: '#ffffff',
    width: 80 * vw,
    alignItems:'center',
    alignSelf: 'center',
    marginTop: 20 * vh,
    // padding: 3 * vw,
    height: 45 * vh,
    // backgroundColor: 'red',
  },
  submitButtonStyle: {
    width: 40 * vw,
    marginTop: 1 * vh,
    backgroundColor:'white',
    borderColor:theme.primary,
    borderWidth:0.3*vh,
    marginBottom:4*vh
  },
  acceptButton: {
    width: 40 * vw,
    marginTop: 3 * vh,
    marginBottom:1*vh
  },
  crossIconView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  checkIconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkIconStyle: {
    resizeMode: 'contain',
    height: 14 * vh,
    width: 14 * vw,
  },

  customAlertHeadingTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: 2.5 * vh,
    textAlign: 'center',
    marginBottom: 2 * vh,
  },

  customAlertDescriptionTextStyle: {
    color: '#666666',
    fontFamily: Fonts.SFR,
    fontSize: 2 * vh,
    color: theme.defaultAuthDescriptionColor,
  },

  submitButtonView: {
    width: 50 * vw,
    height: 7 * vh,
    marginTop: 2 * vh,
    backgroundColor: theme.defaultForgotPasswordColor,
  },

  textStyle: {
    fontSize: 2.2 * vh,
  },

  barViewStyle: {
    backgroundColor: theme.primary,
    height: 10 * vh,
    width: 80 * vw,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
