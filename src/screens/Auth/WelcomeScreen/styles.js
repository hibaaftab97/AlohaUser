import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({

  submitButtonStyle: {
    width: 40 * vw,
    marginTop: 3 * vh,
    marginBottom: 3 * vh,

  },

  fieldContainer: {
    backgroundColor: theme.whiteBackground,
 paddingVertical:4*vh,
    width: 100 * vw,
    borderTopRightRadius: 10 * vw,
    borderTopLeftRadius: 10 * vw,

  },
  scroll: {
    flex: 1,
    width:100*vw
  },
  content: {
    // alignItems: 'flex-end',
    // justifyContent:'flex-end'
  },
  shortdes: {
    color: theme.black,
    fontSize: 3 * vh,
    textAlign:'center',
fontFamily:Fonts.Poppins_SB

  },
  des: {
    color: theme.black,
    fontSize: 2 * vh,
    textAlign:'center',
marginTop:2*vh,
fontFamily:Fonts.Poppins_Regular

  },
  miniContainer: {
    justifyContent: 'center',
    
    alignItems: 'center',
    width: 80 * vw,
    alignSelf: 'center',
  },
});
export default styles;
