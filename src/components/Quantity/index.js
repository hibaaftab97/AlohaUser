import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Icons } from '../../assets/images';
import TextWrapper from '../TextWrapper';
import styles from './styles';

const Quantity = props => {
  return (
    <View style={{ flexDirection: 'row' ,alignItems:'center'}}>
      <TouchableOpacity onPress={props.onDecrease}>
        <Image source={Icons.minus} 
        style={styles.plus}/>
      </TouchableOpacity>
      <TextWrapper  style={styles.quantitytext}>{props?.quantity?props?.quantity:2}</TextWrapper>
      <TouchableOpacity onPress={props.onIncrease}>
        <Image source={Icons.plus} 
         style={styles.plus}/>
      </TouchableOpacity>
    </View>


  );
};

export default Quantity;
