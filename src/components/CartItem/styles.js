import {StyleSheet} from 'react-native';
// import {Fonts} from '../../../assets/fonts/index';
import theme from '../../utils/theme';
import {vw, vh} from '../../units/index';
import { Fonts } from '../../assets/fonts';

export default style = StyleSheet.create({
  title:{
    color:'#1E2022',
    fontFamily:Fonts.Poppins_Medium,
    width:35*vw,
    fontSize:2.3*vh
  },
  price:{
    color:theme.primary,
    fontFamily:Fonts.Poppins_SB,
    width:30*vw,
    fontSize:2.5*vh
  },
  deleIcon:{
    width:5*vw,
    height:5*vw,
    position:'absolute',
    right:2*vw,
    top:2*vh,
    resizeMode:'contain'
  },
  box: {
    width: 90 * vw,
    backgroundColor: theme.whiteBackground,
    paddingHorizontal: 4 * vw,
    marginTop:3*vh,
    // paddingVertical: 2 * vh,
    // alignItems:'center',
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
