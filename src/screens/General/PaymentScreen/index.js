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


const PaymentScreen = props => {



  const [activeIndex, setActive] = useState(-1)

  return (
    <View style={styles.scroll}>
      <ScrollWrapper avoidKeyboard={true}

        contentContainerStyle={styles.content}>
        <CommonHeader
          title="Payment Details"
        />
        <View style={{}}>
          <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
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
            // value={password}
            // onChangeText={text => setPassword(text)}
            placeHolder=""
            conStyle={{  borderColor:'#F3E8E8',
            borderWidth:0.2*vh,}}
            label="CARD NUMBER"
          />

          <GeneralTextInput
            // value={password}
            // onChangeText={text => setPassword(text)}
            placeHolder=""
            conStyle={{  borderColor:'#F3E8E8',
            borderWidth:0.2*vh,}}
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
                // value={password}
                // onChangeText={text => setPassword(text)}
                // lableStyle={{ marginLeft: 2*vw }}
                placeHolder=""
                conStyle={{

                  width: 30 * vw,
                  borderColor:'#F3E8E8',
                  borderWidth:0.2*vh,

                }}
                inputViewStyle={{ width: 30 * vw, }}
                label="EXPIRATION"
              />
            </View>
            <View style={{ width: 30 * vw, }}>


              <GeneralTextInput
                // value={password}
                // onChangeText={text => setPassword(text)}
                viewCon={{ marginRight: 5 * vw }}
                placeHolder=""

                conStyle={{ width: 30 * vw,  borderColor:'#F3E8E8',
                borderWidth:0.2*vh,}}
                inputViewStyle={{ width: 30 * vw }}
                label="CVV"
              />
            </View>
          </View>
        </View>
        <SubmitButton
          style={styles.submitButtonStyle}
          title="Pay Now"
        // onPress={()=>props.navigation.navigate('GetStartedScreen')}
        />
      </ScrollWrapper>
    </View >
  );
};
export default PaymentScreen;