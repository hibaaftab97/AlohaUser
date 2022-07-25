import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import TextWrapper from '../TextWrapper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import styles from './styles';
import { vh, vw } from '../../units';
import { Icons } from '../../assets/images';

const ShopCard = props => {
  return (
    <TouchableOpacity style={[styles.box]}
      onPress={props.onPress}
    >
      <Image source={props?.item?.image}
        style={styles.img} />
      <TextWrapper style={[styles.title,{width: 40 * vw,textAlign:'center'}]}>{props.item.title}</TextWrapper>

      <View style={{ flexDirection: 'row',
      alignItems:'center',
      justifyContent:'space-between'}}>
        <TextWrapper style={[styles.title]}>{props.item.price}</TextWrapper>
        <Rating
          type='star'
          ratingImage={Icons.fullstar}
          ratingColor='transparent'
          ratingCount={5}
          ratingContainerStyle={{marginHorizontal:4*vw}}
          imageSize={2.2*vh}
          isDisabled
          style={{ 
            marginRight: vw * 1.8}}
        />
      </View>

    </TouchableOpacity>

  );
};

export default ShopCard;
