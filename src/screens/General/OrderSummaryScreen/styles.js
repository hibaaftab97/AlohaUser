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
    paddingVertical: 2 * vh,
    
  
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
    fontSize:1.5*vh
  },
  subtitle:{
    color:'black',
    fontFamily:Fonts.AR_medium,
    fontSize:1.5*vh
  },
  card:{
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' ,
    borderBottomColor:'#EFE6E6',
    borderTopColor:'transparent',
    borderLeftColor:'transparent',
    borderRightColor:'transparent',
    paddingBottom:2*vh,
    borderWidth:0.2*vh,
  },
  card1:{
    borderBottomColor:'#EFE6E6',
    borderTopColor:'transparent',
    borderLeftColor:'transparent',
    borderRightColor:'transparent',
    paddingBottom:2*vh,
    borderWidth:0.2*vh, 
  },
  img:{
    width:6*vw,
    height:6*vw,
    resizeMode:'contain'
  }

});
export default styles;

