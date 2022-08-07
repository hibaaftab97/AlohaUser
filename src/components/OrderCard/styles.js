import {StyleSheet} from 'react-native';
// import {Fonts} from '../../../assets/fonts/index';
import theme from '../../utils/theme';
import {vw, vh} from '../../units/index';
import { Fonts } from '../../assets/fonts';

export default style = StyleSheet.create({
  title:{
    color:theme.black,
    fontFamily:Fonts.Poppins_Medium,
    fontSize:2.3*vh
  },
  box: {
    width: 90 * vw,
    backgroundColor: theme.whiteBackground,
    paddingHorizontal: 4 * vw,
    marginTop:3*vh,
    marginLeft:4*vw,
    paddingVertical: 1 * vh,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    borderRadius:1.5*vh,
    shadowRadius: 4 * vw,
    elevation: 4,
  },
  img:{
    width:35*vw,
    height:15*vh,
    resizeMode:'contain'
  },
});
