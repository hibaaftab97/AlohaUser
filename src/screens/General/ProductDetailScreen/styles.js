import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({

  submitButtonStyle: {
    width: 80 * vw,
    marginTop: 3 * vh,
  },
  inactiveDotStylePagination: {
    width: 4 * vw,
    height: 4 * vw,
    borderRadius: 2 * vw,
    backgroundColor: theme.defaultForgotPasswordColor,
    // marginHorizontal: 2 * vw,
    borderColor: 'transparent',
  },
  circle:{
    width: 6 * vw,
    height: 6 * vw,
    borderRadius: 3 * vw,
  },
  containerStylePagination: {
    bottom: 1 * vh,
    
  },
  carImg:{
    width:50*vw,
    height:30*vh,
    resizeMode:'contain'
  },
  categorybox:{
    paddingHorizontal: 4 * vw,
    backgroundColor: theme.whiteBackground,
    marginLeft:2*vw,
    paddingVertical: 1 * vw,
    alignItems:'center',
borderRadius:3*vh,
    borderColor:theme.primary,
    borderWidth:0.3*vh,
  },
  box: {
    width: 80 * vw,
    backgroundColor: theme.whiteBackground,
    borderColor:theme.primary,
    borderWidth:0.3*vh,
    paddingHorizontal: 4 * vw,
    marginTop:3*vh,
    paddingVertical: 2 * vh,
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
    backgroundColor: theme.whiteBackground,
    // alignItems:'center'

  },
  content: {
    alignItems: 'center',
    // justifyContent:'flex-end'
    backgroundColor: theme.whiteBackground
  },
  title:{
    color:'#aeaeae',
    fontFamily:Fonts.AR_medium,
    fontSize:2*vh
  },
  bannertitle:{
    color:theme.black,
    fontFamily:Fonts.AR_extrabold,
    width:50*vw,
    fontSize:2*vh
  },
  img:{
    width:6*vw,
    height:6*vw,
    tintColor:theme.whiteBackground,
    resizeMode:'contain'
  },
  leftimg:{
    width:10*vw,
    height:10*vw,
    tintColor:theme.whiteBackground,
    resizeMode:'contain'
  },
  cat:{
    color:theme.primary,
    fontFamily:Fonts.Poppins_Medium,
    fontSize:3*vh
  },
  name:{
    color:theme.black,
    fontFamily:Fonts.Poppins_Medium,
    fontSize:3*vh
  },
  price:{
    color:theme.primary,
    fontFamily:Fonts.Poppins_Medium,
    fontSize:3*vh
  }, 
  des:{
    color:theme.black,
    fontFamily:Fonts.Poppins_Regular,
    fontSize:1.7*vh
  },
  dotStylePagination: {
    width: 3 * vw,
    height: 3 * vw,
    borderRadius: 2 * vw,
    backgroundColor: theme.defaultForgotPasswordColor,
    borderWidth: 0.5 * vw,
    
    borderColor: 'transparent',
  },


});
export default styles;
