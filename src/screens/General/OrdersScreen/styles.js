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
    borderColor:theme.primary,
    borderWidth:0.2*vh,
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
    color:'#aeaeae',
    fontFamily:Fonts.AR_medium,
    fontSize:1.5*vh
  },
  card:{
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' ,
   
    // paddingBottom:2*vh,
    // borderWidth:0.2*vh,
  },
  img:{
    width:3.5*vw,
    height:3.5*vw,
    marginLeft:vw,
    tintColor:'#E2E2E2',
    resizeMode:'contain'
  }

});
export default styles;

