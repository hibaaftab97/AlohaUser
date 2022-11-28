import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';
import Quantity from '../Quantity'
import { Icons } from '../../assets/images';
import { vw } from '../../units';

const CartItem = props => {
    return (
        <View style={[styles.box]}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View>
                    <Image source={{ uri: props.item?.product_image }}
                        style={styles.img} />
                </View>
                <View   style={{marginLeft:2*vw}}>
                    <TextWrapper style={[styles.title]}>{props.item?.product_name}</TextWrapper>
                    <TextWrapper style={[styles.price]}>${props.item?.product_price}</TextWrapper>
                    <Quantity quantity={props.item?.quantity} 
                    onIncrease={()=>props?.onAdd(props.item?.quantity+1)}
                    onDecrease={()=>props?.onMinus(props.item?.quantity-1)}/>
                </View>


            </View>


            <TouchableOpacity onPress={props?.onremove}
                style={styles.deleteBox}>
                <Image source={Icons.delete}
                    style={styles.deleIcon} />
            </TouchableOpacity>

        </View>

    );
};

export default CartItem;
