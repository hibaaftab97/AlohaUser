import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import TextWrapper from '../../../components/TextWrapper';
import styles from './styles';
import { generalImages, Icons } from '../../../assets/images';
import theme from '../../../utils/theme';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { vw } from '../../../units';

const CommonHeader = props => {
  const navigation = useNavigation();
  const renderHeaderButton = () => {
    if (props.type === 'drawer') {
      return (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={styles.drawerButtonView}>
          <Image source={Icons.menu} style={styles.drawerIconStyle} />
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
    <View style={styles.header}>
      <View style={styles.searchView}>
        {renderHeaderButton()}
        <TextWrapper
          numberOfLines={2}
          style={[styles.searchTextStyle, props.style]}>
          {props.title}
        </TextWrapper>

        <View style={styles.searchIconsView}>
         
            {props.profile ? (

              <TouchableOpacity onPress={()=>{
                if(props.edit){
                  navigation.navigate('ProfileStack')
                }
               
                }}>
                <Image style={styles.searchIconStyle} source={Icons.profile} />

              </TouchableOpacity>
            ) : props.edit ? (
              <Image style={styles.searchIconStyle} source={Icons.edit} />
            ) : props.cart?(
              <TouchableOpacity onPress={()=>{
                if(props.cart){
                  navigation.navigate('CartScreen')
                }
               
                }}>
              <Image style={styles.searchIconStyle} source={Icons.cart} />
              </TouchableOpacity>

            ):null}
            {/* <Image style={styles.searchIconStyle} source={icons.search} /> */}
        </View>
      </View>
    </View>
  );
};

export default CommonHeader;
