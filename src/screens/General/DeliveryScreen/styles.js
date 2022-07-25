import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({

  submitButtonStyle: {
    width: 80 * vw,
    marginTop: 2 * vh,
    marginBottom:4*vh
  },
  
  scroll: {
    flex: 1,
    backgroundColor: theme.whiteBackground,
    alignItems:'center'

  },
  content: {
    // alignItems: 'center',
    // justifyContent:'flex-end'
    backgroundColor: theme.whiteBackground
  },
  title:{
    color:theme.black,
    fontFamily:Fonts.Poppins_Medium,
    fontSize:2*vh
  },
  bannertitle:{
    color:theme.black,
    fontFamily:Fonts.AR_extrabold,
    width:50*vw,
    fontSize:2*vh
  },
  img:{
    width:35*vw,
    height:15*vh,
    resizeMode:'contain'
  },
  leftimg:{
    width:10*vw,
    height:10*vw,
    tintColor:theme.whiteBackground,
    resizeMode:'contain'
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
  packageBox:{
    width: 80 * vw,
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
  text:{
    color:theme.primary,
    marginTop:5*vh,

    fontFamily:Fonts.Poppins_Regular,
    width:90*vw,
textAlign:'center',
    fontSize:1.7*vh
  },
  price:{
    color:theme.primary,
    fontFamily:Fonts.Poppins_Medium,
 
    fontSize:2*vh
  }

});
export default styles;
