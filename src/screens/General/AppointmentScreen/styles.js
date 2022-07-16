import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({

  submitButtonStyle: {
    width: 20 * vw,
    height:4*vh,
    marginTop: 3 * vh,
    borderRadius: 1*vw,
    backgroundColor:theme.primary
  },
  smallbox:{
    width: 38 * vw,
    backgroundColor: theme.primary,
    paddingHorizontal: 4 * vw,
    paddingVertical: 1.5 * vh,
    alignItems:'center',
   borderRadius:4*vh,
    justifyContent:'center'
  },
  box: {
    width: 80 * vw,
    backgroundColor: theme.whiteBackground,
    paddingHorizontal: 4 * vw,
    marginTop:3*vh,
    paddingVertical: 2 * vh,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    borderRadius:1.5*vh,
    borderColor:theme.primary,
    borderWidth:0.2*vh,
    shadowRadius: 4 * vw,
    elevation: 4,
  },
  headerbox:{
    width: 80 * vw,
    backgroundColor: theme.whiteBackground,
    paddingHorizontal: 2 * vw,
    // marginTop:3*vh,
    paddingVertical: 1.5 * vh,
   borderRadius:4*vh
   
  },
  smallheader:{
    width:100*vw,backgroundColor:theme.primary,alignItems:'center',
    paddingVertical:2*vh
  },
  scroll: {
    flex: 1,
    backgroundColor: theme.whiteBackground,
    alignItems:'center'

  },
  content: {
    alignItems: 'center',
    // justifyContent:'flex-end'
    backgroundColor: theme.whiteBackground
  },
  title:{
    color:theme.primary,
    fontFamily:Fonts.Poppins_Medium,
    fontSize:1.5*vh,
    textAlign:'left'
  },
  subtitle:{
    color:theme.black,
    fontFamily:Fonts.Poppins_Medium,
   
    fontSize:1.7*vh
  },
  headertitle:{
    color:theme.whiteBackground,
    fontFamily:Fonts.Poppins_Regular,
    fontSize:1.5*vh
  },
  img:{
    width:6*vw,
    height:6*vw,
    resizeMode:'contain'
  }

});
export default styles;

