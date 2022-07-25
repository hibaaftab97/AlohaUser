import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({

  submitButtonStyle: {
    width: 80 * vw,
    marginTop: 3 * vh,
    marginBottom:4*vh
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
  box: {
    // width: 30 * vw,
    backgroundColor: theme.whiteBackground,
    borderColor:'#F3E8E8',
    borderWidth:0.2*vh,
    paddingHorizontal: 4 * vw,
    alignItems:'center',
    justifyContent:"center",
    marginTop:3*vh,
    paddingVertical: 0 * vh,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    borderRadius:1.5*vh,
    shadowRadius: 4 * vw,
    // elevation: 4,
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
  },
  card:{
    width:15*vw,
    height:15*vw,
    resizeMode:'contain'
  }

});
export default styles;
