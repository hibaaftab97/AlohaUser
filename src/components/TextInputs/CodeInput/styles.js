import {StyleSheet} from 'react-native';
import { Fonts } from '../../../assets/fonts';
import {vh, vw} from '../../../units/index';
// import {Fonts} from '../../../assets/fonts';
import theme from '../../../utils/theme';

export default style = StyleSheet.create({
  textInputView: {
    width: 15 * vw,
    height: 7 * vh,
    borderColor: theme.whiteBackground,
    borderWidth: 0.5 * vw,
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: 3 * vw,
    marginTop: 1* vh,
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
  },
  customStyle: {
    width: 15 * vw,
    height: 7 * vh,
    borderColor: theme.whiteBackground,
    borderWidth: 0.5 * vw,
    flexDirection: 'row',
    alignItems:'center',
    borderRadius: 1 * vw,
    marginTop: 1 * vh,
  },

  textInputStyle: {
    // marginLeft: 2 * vw,
    color: theme.whiteBackground,
    fontFamily:Fonts.Poppins_Regular,
    fontSize:2*vh,
    textAlign:'center',
    width: 14 * vw,
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
