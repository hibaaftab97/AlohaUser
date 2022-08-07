import React from 'react';
import { Text, View, TouchableOpacity ,Image} from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';

const OrderCard = props => {
    return (
        <TouchableOpacity style={[styles.box]}
        >
            <View   style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={props?.item?.image}
          style={styles.img}/>
          <View>
          <TextWrapper style={[styles.title]}>{props.item.title}</TextWrapper>
          <TextWrapper style={[styles.title]}>{props.item.price}</TextWrapper>
          <TextWrapper style={[styles.title]}>Qty - 0{props.item.quantity}</TextWrapper>


          </View>

            </View>
        
   
         
        
         </TouchableOpacity>

    );
};

export default OrderCard;
