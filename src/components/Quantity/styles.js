import {StyleSheet} from 'react-native';
// import {Fonts} from '../../../assets/fonts/index';
import theme from '../../utils/theme';
import {vw, vh} from '../../units/index';
import { Fonts } from '../../assets/fonts';

export default style = StyleSheet.create({
  title:{
    color:'#1E2022',
    fontFamily:Fonts.Poppins_Regular,
    fontSize:2*vh
  },
  plus:{
    width:8*vw,
    height:8*vw,
    resizeMode:'contain'
  },
  box: {
    // width: 80 * vw,
    backgroundColor: theme.whiteBackground,
    paddingHorizontal: 4 * vw,
    marginTop:3*vh,
    marginLeft:4*vw,
    // paddingVertical: 2 * vh,
    alignItems:'center',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    borderRadius:1.5*vh,
    shadowRadius: 4 * vw,
    elevation: 4,
  },
  quantitytext:{
    color:theme.primary,
    fontFamily:Fonts.Poppins_Medium,
    fontSize:2.3*vh
  },
  img:{
    width:35*vw,
    height:15*vh,
    resizeMode:'contain'
  },
});
