import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';
import Quantity from '../Quantity'

const CartItem = props => {
    return (
        <TouchableOpacity style={[styles.box]}
        >
            <View style={{ flexDirection: 'row',alignItems:'center' }}>
                <View>
                    <Image source={props?.item?.image}
                        style={styles.img} />
                </View>
                <View>
                    <TextWrapper style={[styles.title]}>{props.item.title}</TextWrapper>
                    <TextWrapper style={[styles.price]}>{props.item.price}</TextWrapper>
<Quantity   quantity={props.item.quantity}/>
                </View>
            </View>




        </TouchableOpacity>

    );
};

export default CartItem;
