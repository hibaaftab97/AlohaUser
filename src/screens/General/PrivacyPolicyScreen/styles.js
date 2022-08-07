import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({

  submitButtonStyle: {
    width: 40 * vw,
    marginTop: 3 * vh,
    backgroundColor:'white',
    borderColor:theme.primary,
    borderWidth:0.3*vh,
    marginBottom:4*vh
  },
  acceptButton: {
    width: 40 * vw,
    marginTop: 3 * vh,
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
  label:{
    color:'#1E2022',
    marginTop:2*vh,
    fontFamily:Fonts.Poppins_Medium,
    fontSize:1.7*vh
  },
  details:{
    color:'#1E2022',
    fontFamily:Fonts.Poppins_Regular,
    fontSize:1.5*vh,
    marginTop:3*vh,
    lineHeight:2.3*vh
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
  text:{
    color:theme.primary,
    marginTop:5*vh,

    fontFamily:Fonts.Poppins_Regular,
    width:90*vw,
textAlign:'center',
    fontSize:1.7*vh
  },
  price:{
    color:theme.black,
    fontFamily:Fonts.Poppins_Medium,
 
    fontSize:1.7*vh
  }

});
export default styles;
