import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({

  submitButtonStyle: {
    width: 80 * vw,
    marginTop: 3 * vh,
  },
  icon: {
    // tintColor: theme.whiteBackground,
    height: 5 * vh,
    width: 5 * vh,
    resizeMode: 'contain',
    marginHorizontal: 5 * vw,
  },
  routeContainer: {
    marginTop: 3 * vh,
    backgroundColor: theme.whiteBackground,
    borderTopStartRadius: 5 * vw,
    borderTopEndRadius: 5 * vw,

    width: 100 * vw,
    // position:'absolute',
    bottom:0,
  },
  acceptButton: {
    width: 40 * vw,
    marginTop: 3 * vh,
    marginBottom:1*vh
  },
  container: {
    // flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 3 * vh,
    borderBottomColor: '#e6e6e6',
    borderWidth: 0.2 * vh,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    paddingVertical: 1 * vh,
    width: 100 * vw
  },
  righticon: {
    // tintColor: theme.whiteBackground,
    height: 2 * vh,
    width: 2 * vh,
    resizeMode: 'contain',
    marginHorizontal: 5 * vw,
  },
  label: {
    fontSize: 2 * vh,
    color: theme.black,
    fontFamily:Fonts.AR_extrabold
  },
  circle:{
      height:7*vw,
      width:7*vw,
      borderRadius:3.5*vw,
      position:'absolute',
      alignItems:'center',
      justifyContent:'center',
      left:55*vw,
    marginRight:2*vw,
      bottom:0,
      backgroundColor:theme.primary
  },
  fieldContainer: {
    backgroundColor: theme.whiteBackground,
    paddingVertical: 3 * vh,
    width: 100 * vw,
    borderTopRightRadius: 15 * vw,
    borderTopLeftRadius: 15 * vw,
    marginTop:vh,

  },
  scroll: {
    flex: 1,

  },
  content: {
    // alignItems: 'flex-end',
    // justifyContent:'flex-end'
    backgroundColor:theme.primary
  },
  shortdes: {
    color: theme.whiteBackground,
    fontSize: 2.5 * vh,
    textAlign: 'center',

    marginTop:1.5*vh,
    fontFamily: Fonts.Inter_SB

  },
  des: {
    color: theme.whiteBackground,
    fontSize: 2 * vh,
    textAlign: 'center',
    marginTop: 1 * vh,
    fontFamily: Fonts.Inter_SB

  },
  img: {
      width:30*vw,
      height:30*vw,
      resizeMode:'contain'
  },
  imgIcon: {
    width:4*vw,
    height:4*vw,
    resizeMode:'contain',
    tintColor:'white'
},
  miniContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80 * vw,
    alignSelf: 'center',
  },
  edit:{
    color: theme.primary,
    fontSize: 2 * vh,
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Bold
  }
});
export default styles;
