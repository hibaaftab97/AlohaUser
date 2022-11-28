import React, { useState } from 'react';
import { View, FlatList, LayoutAnimation, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import CommonHeader from '../../../components/Headers/CommonHeader';
import theme from '../../../utils/theme';
import ScrollWrapper from '../../../components/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import { generalImages, Icons } from '../../../assets/images';
import CartItem from '../../../components/CartItem';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, UpdatetoCart } from '../../../redux/actions/cartActions';


const CartScreen = props => {

 
  const dispatch = useDispatch();


  const [activeIndex, setActive] = useState(-1)
  const cartItems = useSelector(state => state.cartReducer.cartItems);

  const renderItem = ({ item, index }) => {
    return (
      <CartItem item={item} 

      onAdd={(quan)=> 
        {
          let data={
            id:item.product_id,
            quantity:quan
          }
          dispatch(UpdatetoCart(data))
        }
        }
        onMinus={(quan)=> 
          {
            let data={
              id:item.product_id,
              quantity:quan
            }
            dispatch(UpdatetoCart(data))
          }
          }
      onremove={()=> dispatch(removeFromCart(item?.product_id))}/>
    )
  }

  const footer = () => {
    return (
      <SubmitButton title="Proceed to Check Out"
        style={styles.submitButtonStyle} />
    )
  }
  return (
    <View style={styles.scroll}>
      <CommonHeader
        title="Add Cart"
      />

      <FlatList
        data={cartItems}
        renderItem={renderItem}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 10 * vh, }}
        // ListFooterComponent={footer}
        keyExtractor={item => item.id}
        style={{ paddingBottom: 10 * vh, width: 100 * vw }}
        showsVerticalScrollIndicator={false}
      />

      <View>
        <SubmitButton title="Proceed to Check Out"
          onPress={() => props.navigation.navigate('DeliveryScreen')}
          style={styles.submitButtonStyle} />
      </View>

    </View >
  );
};
export default CartScreen;