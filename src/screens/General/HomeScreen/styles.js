import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({

  submitButtonStyle: {
    width: 40 * vw,
    marginTop: 3 * vh,
  },
  img:{
    width:35*vw,
    height:15*vh,
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
  scroll: {
    flex: 1,
    alignItems:'center',
backgroundColor:'white'
  },
  content: {
    alignItems: 'center',
    // justifyContent:'flex-end'
    backgroundColor: theme.whiteBackground
  },
  header:{
    color:theme.primary,
    fontFamily:Fonts.Poppins_Bold,
    fontSize:2.3*vh
  },
  view:{
    color:theme.black,
    fontFamily:Fonts.Poppins_Medium,
    fontSize:1.7*vh
  },
  title:{
    color:'#1E2022',
    fontFamily:Fonts.Poppins_Regular,
    fontSize:2*vh
  },
  bannertitle:{
    color:theme.primary,
    fontFamily:Fonts.Poppins_SB,
    width:50*vw,
    fontSize:2.5*vh
  },
 

});
export default styles;
