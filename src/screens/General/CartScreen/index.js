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


const CartScreen = props => {

  const services = [{
    title: "KN95 mask",
    image: generalImages.carousel,
    quantity: 2,
    price: "$149"
  },
  {
    title: "Led Face Mask",
    image: generalImages.cart,
    price: "$149",
    quantity: 2,


  },


  ]

  const [activeIndex, setActive] = useState(-1)
  const renderItem = ({ item, index }) => {
    return (
      <CartItem item={item} />
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
        data={services}
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