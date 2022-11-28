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
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../../redux/actions/checkoutAction';
import { showToast } from '../../../redux/Api/HelperFunction';


const PaymentScreen = props => {



  const [cardNumber, setCardNo] = useState('');
  const [cardHolderName, setcardHolderName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartReducer.cartItems);


  const onCheckout = () => {
    let data = {
      delivery_info: props.route?.params?.delivery_info,
      cart:props.route?.params?.cart,
      total:props.route?.params?.total,
      payment_method: "visa",
      card_details:{
        card_number:cardNumber,
        card_name:cardHolderName,
        exp_month:'12',
        exp_year:'25',
        cvv:cvv
      }
    }
    
    let response=dispatch(createOrder(data))

    if(response.status){
      props.navigation.navigate("HomeScreen")
    }
  }

  return (
    <View style={styles.scroll}>
      <ScrollWrapper avoidKeyboard={true}

        contentContainerStyle={styles.content}>
        <CommonHeader
          title="Payment Details"
        />
        <View style={{}}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={[styles.box]}>
              <Image source={Icons.mastercard}
                style={styles.card} />


            </View>
            <View style={[styles.box]}>
              <TextWrapper>VISA</TextWrapper>


            </View>
            <View style={[styles.box]}>
              <Image source={Icons.paypal}
                style={styles.card} />


            </View>
          </View>

          <GeneralTextInput
            value={cardNumber}
            onChangeText={text => setCardNo(text)}
            placeHolder=""
            conStyle={{
              borderColor: '#F3E8E8',
              borderWidth: 0.2 * vh,
            }}
            label="CARD NUMBER"
          />

          <GeneralTextInput
            value={cardHolderName}
            onChangeText={text => setcardHolderName(text)}
            placeHolder=""
            conStyle={{
              borderColor: '#F3E8E8',
              borderWidth: 0.2 * vh,
            }}
            label="CARD HOLDER NAME"
          />

        </View  >
        <View style={{
          // width: 100 * vw,
          alignItems: 'center',
        }}>


          <View style={{
            flexDirection: 'row',
            width: 80 * vw,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <View style={{ width: 30 * vw, }}>
              <GeneralTextInput
                value={expiry}
                onChangeText={text => setExpiry(text)}
                // lableStyle={{ marginLeft: 2*vw }}
                placeHolder=""
                conStyle={{

                  width: 30 * vw,
                  borderColor: '#F3E8E8',
                  borderWidth: 0.2 * vh,

                }}
                inputViewStyle={{ width: 30 * vw, }}
                label="EXPIRATION"
              />
            </View>
            <View style={{ width: 30 * vw, }}>


              <GeneralTextInput
                value={cvv}
                onChangeText={text => setCVV(text)}
                viewCon={{ marginRight: 5 * vw }}
                placeHolder=""

                conStyle={{
                  width: 30 * vw, borderColor: '#F3E8E8',
                  borderWidth: 0.2 * vh,
                }}
                inputViewStyle={{ width: 30 * vw }}
                label="CVV"
              />
            </View>
          </View>
        </View>
        <SubmitButton
          style={styles.submitButtonStyle}
          title="Pay Now"
          onPress={onCheckout}
        />
      </ScrollWrapper>
    </View >
  );
};
export default PaymentScreen;