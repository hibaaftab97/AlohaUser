import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({

  submitButtonStyle: {
    width: 40 * vw,
    marginTop: 3 * vh,
  },
  box: {
    width: 80 * vw,
    backgroundColor: theme.whiteBackground,
    paddingHorizontal: 4 * vw,
    borderColor:theme.primary,
    borderWidth:0.2*vh,
    marginTop:1*vh,
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
  circle:{
    width: 16 * vw,
    backgroundColor: theme.whiteBackground,
    height: 16 * vw,
alignItems:'center',
justifyContent:'center',
    paddingHorizontal: 4 * vw,
    marginTop:3*vh,
    paddingVertical: 2 * vh,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    borderRadius:8*vw,
    shadowRadius: 4 * vw,
    elevation: 4,
  },
  scroll: {
    flex: 1,
    backgroundColor: theme.whiteBackground,
    alignItems:'center',
    width:100*vw

  },
  content: {
    alignItems: 'center',
    // justifyContent:'flex-end'
    backgroundColor: theme.whiteBackground
  },
  title:{
    color:theme.primary,
    fontFamily:Fonts.Poppins_Medium,
    fontSize:1.5*vh
  },
  headertitle:{
    color:theme.primary,
    fontFamily:Fonts.Poppins_Bold,
    
    marginTop:2*vh,

    fontSize:2.5*vh
  },
  Icontitle:{
    color:'#969d9f',
    fontFamily:Fonts.Inter_SB,
    textAlign:'center',
    fontSize:1.7*vh
  },
  subtitle:{
    color:theme.black,
    fontFamily:Fonts.Poppins_Medium,
    fontSize:1.7*vh
  },
  uploadtext:{
    color:'#4879ca',
    fontFamily:Fonts.AR_regular,
    fontSize:1.3*vh
  },
  borderBox:{
    borderBottomColor:'#FFDFDF',borderWidth:0.3*vh,
    paddingBottom:1*vh,
    borderTopColor:'transparent',borderLeftColor:'transparent',borderRightColor:'transparent'
  },
  img:{
    width:6*vw,
    height:6*vw,
    resizeMode:'contain'
  }

});
export default styles;

