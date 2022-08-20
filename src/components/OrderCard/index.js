import React from 'react';
import { Text, View, TouchableOpacity ,Image} from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';

const OrderCard = props => {
    return (
        <TouchableOpacity style={[styles.box]}
        >
            <View   style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={{uri:props?.item?.product?.images[0]?.title}}
          style={styles.img}/>
          <View>
          <TextWrapper style={[styles.title]}>{props.item.product?.title}</TextWrapper>
          <TextWrapper style={[styles.title]}>{props.item.item_price}</TextWrapper>
          <TextWrapper style={[styles.title]}>Qty - {props.item.qty}</TextWrapper>


          </View>

            </View>
        
   
         
        
         </TouchableOpacity>

    );
};

export default OrderCard;
