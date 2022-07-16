import {StyleSheet} from 'react-native';
// import {Fonts} from '../../../assets/fonts/index';
import theme from '../../../utils/theme';
import {vw, vh} from '../../../units/index';
import { Fonts } from '../../../assets/fonts';

export default style = StyleSheet.create({
  touchableButtonStyle: {
    // width: 90 * vw,
    backgroundColor: theme.primary,
    borderRadius: 4 * vh,
    
    height: 7 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  titleTextStyle: {
    fontFamily: Fonts.Poppins_Bold,
    color: theme.whiteBackground,
    fontSize: 2 * vh,
  },
});
