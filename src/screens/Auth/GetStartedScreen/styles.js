import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({

  submitButtonStyle: {
    width: 80 * vw,
    marginTop: 2 * vh,
    backgroundColor:theme.whiteBackground
  },

  fieldContainer: {
    backgroundColor: theme.primary,
    paddingVertical: 4 * vh,
    width: 100 * vw,
    borderTopRightRadius: 10 * vw,
    borderTopLeftRadius: 10 * vw,
  },
  fieldsView: {
    marginTop: 0 * vh,
    marginBottom: 1 * vh,

  },
  signup:{
    color: theme.whiteBackground,
    fontSize: 2 * vh,
    fontFamily: Fonts.Poppins_SB,
    marginLeft:1*vw
  },
  scroll: {
    flex: 1,
  },
  account:{
    color: theme.whiteBackground,
    fontSize: 1.7 * vh,
    fontFamily: Fonts.Poppins_Regular
  },
  content: {
    // alignItems: 'flex-end',
    // justifyContent:'flex-end'
  },
  shortdes: {
    color: theme.whiteBackground,
    fontSize: 3 * vh,
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Bold

  },
  fpw: {
    color: theme.whiteBackground,
    fontSize: 2 * vh,
    textAlign: 'center',
    fontFamily: Fonts.Poppins_SB

  },
  des: {
    color: theme.whiteBackground,
    fontSize: 2 * vh,
    textAlign: 'center',
    marginTop: 1 * vh,
    fontFamily: Fonts.Poppins_Regular

  },
  miniContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: 80 * vw,
    alignSelf: 'center',
  },
});
export default styles;
