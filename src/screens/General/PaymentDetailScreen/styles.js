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
    marginTop:3*vh,
    paddingVertical: 1 * vh,
    borderColor:theme.primary,
    borderWidth:0.2*vh,
    // height:7*vh,
    justifyContent:'center',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    borderRadius:1.5*vh,
    shadowRadius: 4 * vw,
    elevation: 4,
  },
  paymentbox: {
    width: 80 * vw,
    backgroundColor: theme.whiteBackground,
    paddingHorizontal: 4 * vw,
    marginTop:1*vh,
    paddingVertical: 1.5 * vh,
    borderColor:'#F3E8E8',
    borderWidth:0.2*vh,
    // height:7*vh,
    justifyContent:'center',
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
    backgroundColor: theme.whiteBackground,
    // alignItems:'center'

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
  paymenttitle:{
    color:'#555555',
    fontFamily:Fonts.Poppins_Regular,
    fontSize:2.5*vh
  },
  subtitle:{
    color:theme.black,
    fontFamily:Fonts.Poppins_Medium,
    fontSize:1.7*vh
  },
  paymentHeader:{
    color:'#555555',
    fontFamily:Fonts.Poppins_SB,
    fontSize:2*vh,
    marginLeft:10*vw,
    marginTop:4*vh,
  },
  rowCon:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  borderBox:{
    width:35*vw,
    borderRightColor:'#FFDFDF',
    borderLeftColor:'transparent',
    borderBottomColor:'transparent',
    borderTopColor:'transparent',
    borderWidth:0.2*vh,
    height:5*vh,
    justifyContent:'center'
  },
  img:{
    width:6*vw,
    height:6*vw,
    resizeMode:'contain'
  }

});
export default styles;

