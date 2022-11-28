import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import TextWrapper from '../../../components/TextWrapper';
import styles from './styles';
import { generalImages, Icons } from '../../../assets/images';
import theme from '../../../utils/theme';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { vh, vw } from '../../../units';
import { useSelector } from 'react-redux';

const CommonHeader = props => {
  const cartItems = useSelector(state => state.cartReducer.cartItems);

  const navigation = useNavigation();
  const renderHeaderButton = () => {
    if (props.type === 'drawer') {
      return (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={styles.drawerButtonView}>
          <Image source={Icons.menu} style={[styles.drawerIconStyle,{tintColor:props?.title=='Home'?theme.primary:theme.whiteBackground}]} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.drawerButtonView}>
          <Image
            source={Icons.leftArrow}
            style={[
              styles.drawerIconStyle,

            ]}
          />
        </TouchableOpacity>
      );
    }
  };
  return (
    <View style={[styles.header,{backgroundColor:props?.title=='Home'? 'transparent':theme.primary}]}>
      <View style={styles.searchView}>
        {renderHeaderButton()}
        <TextWrapper
          numberOfLines={2}
          style={[styles.searchTextStyle, props.style]}>
          {props.title}
        </TextWrapper>

        <View style={styles.searchIconsView}>

          {props.profile ? (

            <TouchableOpacity onPress={() => {
              navigation.navigate('EditProfileScreen')


            }}>
              <TextWrapper  style={styles.edit}>Edit</TextWrapper>
            </TouchableOpacity>
          ) : props.edit ? (
            <Image style={styles.searchIconStyle} source={Icons.edit} />
          ) : props.cart ? (
            <TouchableOpacity onPress={() => {
             
              navigation.navigate('CartScreen')


            }}>
              <Image style={[styles.searchIconStyle,{tintColor:props?.title=='Home'?theme.primary:'white'}]} source={props?.title=='Home'?Icons.cart:Icons.cart} />
              <View style={{width:4*vw,
              alignItems:'center',justifyContent:'center',
          height:4*vw,borderRadius:2*vw,backgroundColor:theme.primary,position:'absolute',bottom:vh,right:-1*vw,}}>
<TextWrapper  style={{color:'white',fontSize:1.7*vh}}>{cartItems.length}</TextWrapper>
              </View>
            </TouchableOpacity>

          ) : null}
          {/* <Image style={styles.searchIconStyle} source={icons.search} /> */}
        </View>
      </View>
    </View>
  );
};

export default CommonHeader;
