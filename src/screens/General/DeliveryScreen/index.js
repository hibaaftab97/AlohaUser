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


const DeliveryScreen = props => {



  const [activeIndex, setActive] = useState(-1)

  return (
    <View style={styles.scroll}>
      <ScrollWrapper avoidKeyboard={true}

        contentContainerStyle={styles.content}>
        <CommonHeader
          title="Delivery Information"
        />
        <View style={{ alignItems: 'center' }}>
        
          <View style={[styles.packageBox]}
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




          </View>
          <GeneralTextInput
            // value={password}
            // onChangeText={text => setPassword(text)}
            placeHolder=""

            label="Name"
          />
          <GeneralTextInput
            // value={password}
            // onChangeText={text => setPassword(text)}
            placeHolder=""

            label="Email"
          />
          <GeneralTextInput
            // value={password}
            // onChangeText={text => setPassword(text)}
            placeHolder=""

            label="Phone No"
          />
          <GeneralTextInput
            // value={password}
            // onChangeText={text => setPassword(text)}
            placeHolder=""

            label="City"
          />
          <GeneralTextInput
            // value={password}
            // onChangeText={text => setPassword(text)}
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
            <TextWrapper  style={styles.price}>$24 </TextWrapper>

        </View>

        <SubmitButton
          style={styles.submitButtonStyle}
          title="Proceed to Pay"
        onPress={()=>props.navigation.navigate('PaymentScreen')}
        />
      </ScrollWrapper>
    </View >
  );
};
export default DeliveryScreen;