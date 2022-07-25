import {StyleSheet} from 'react-native';
import { Fonts } from '../../../assets/fonts';
import {vh, vw} from '../../../units/index';
// import {Fonts} from '../../../assets/fonts';
import theme from '../../../utils/theme';

export default style = StyleSheet.create({
  textInputView: {
    width: 80 * vw,
    height: 7 * vh,
    borderColor:theme.whiteBackground,
    borderWidth: 0.5 * vw,
    // flexDirection: 'row',
    alignItems: 'center',

    borderRadius: 1 * vw,
    marginTop: 2 * vh,
  },
  label:{

    color: '#1E2022',
    fontSize:1.7*vh,
    marginTop:2*vh,
    fontFamily:Fonts.Poppins_Medium,
    width: 66 * vw,
  },
  rightIconContainer: {
    height: vh * 5,
    width: vw * 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    height: vh * 5,
    width: vw * 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: vw * 5,
    width: vw * 5,
    tintColor:theme.whiteBackground
  },
  customStyle: {
    width: 80 * vw,
    height: 6 * vh,
    borderColor: theme.primary,
    borderWidth: 0.5 * vw,
    // flexDirection: 'row',
    // alignItems:'center',
    borderRadius: 2 * vw,
    marginTop: 1 * vh,
  },

  textInputStyle: {
    // marginLeft: 2 * vw,
    color: theme.black,
    fontFamily:Fonts.Poppins_Regular,
    width: 70 * vw,
  },

  emailStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  emailIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4 * vw,
  },
});
