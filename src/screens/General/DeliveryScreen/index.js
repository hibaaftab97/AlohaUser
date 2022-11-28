import React, { useState } from 'react';
import { View, FlatList, LayoutAnimation, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import CommonHeader from '../../../components/Headers/CommonHeader';
import theme from '../../../utils/theme';
import ScrollWrapper from '../../../components/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import { generalImages, Icons } from '../../../assets/images';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import GeneralTextInput from '../../../components/TextInputs/GeneralTextInput';
import { useSelector } from 'react-redux';
import { add } from 'react-native-reanimated';


const DeliveryScreen = props => {



  const [activeIndex, setActive] = useState(-1)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
let totalAmount;
let cartdata=[];

  const cartItems = useSelector(state => state.cartReducer.cartItems);

  const getTotal=()=>{
    let totalAmnt=0
    for (let index = 0; index < cartItems.length; index++) {
      totalAmnt+=cartItems[index].product_price
      cartdata.push({
        item_id:cartItems[index].product_id,
        quantity:cartItems[index].quantity,
        price:cartItems[index].product_price,
      })
    }
    totalAmount=totalAmnt
    return totalAmnt
  }

  return (
    <View style={styles.scroll}>
      <ScrollWrapper avoidKeyboard={true}

        contentContainerStyle={styles.content}>
        <CommonHeader
          title="Delivery Information"
        />
        <View style={{ alignItems: 'center' }}>
        
          {/* <View style={[styles.packageBox]}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View>
                <Image source={generalImages.carousel}
                  style={styles.img} />
              </View>
              <View>
                <TextWrapper style={[styles.title]}>KN95 mask</TextWrapper>
                
                <TextWrapper style={[styles.price]}>$12</TextWrapper>
                <TextWrapper style={[styles.price]}>Qty : 2</TextWrapper>
              
              </View>
            </View>




          </View> */}
          <GeneralTextInput
            value={name}
            onChangeText={text => setName(text)}
            placeHolder=""

            label="Name"
          />
          <GeneralTextInput
            value={email}
            onChangeText={text => setEmail(text)}
            placeHolder=""

            label="Email"
          />
          <GeneralTextInput
            value={phone}
            onChangeText={text => setPhone(text)}
            placeHolder=""

            label="Phone No"
          />
          <GeneralTextInput
            value={city}
            onChangeText={text => setCity(text)}
            placeHolder=""

            label="City"
          />
          <GeneralTextInput
            value={address}
            onChangeText={text => setAddress(text)}
            placeHolder=""

            label="Address"
            multiline={true}
            conStyle={{ height: 10 * vh }}
          />
        </View  >
        <View style={{alignItems:'flex-end',
        marginHorizontal:6*vw,
        marginTop:2*vh,
        flexDirection:'row',justifyContent:'flex-end'}}>
            <TextWrapper  style={styles.title}>Total : </TextWrapper>
            <TextWrapper  style={styles.price}>${getTotal()}</TextWrapper>

        </View>

        <SubmitButton
          style={styles.submitButtonStyle}
          title="Proceed to Pay"
        onPress={()=>props.navigation.navigate('PaymentScreen',{
          delivery_info:{
            name:name,
            email:email,
            phone:phone,
            city:city,
            address:address
          },
          total:totalAmount,
          cart:cartdata
        })}
        />
      </ScrollWrapper>
    </View >
  );
};
export default DeliveryScreen;