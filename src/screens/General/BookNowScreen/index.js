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


const BookNowScreen = props => {



  const [activeIndex, setActive] = useState(-1)

  return (
    <View style={styles.scroll}>
      <ScrollWrapper avoidKeyboard={true}

        contentContainerStyle={styles.content}>
        <CommonHeader
          title="COVID-19 (PCR/Antigen) Test"
        />
        <View style={{ alignItems: 'center' }}>
        <View style={[styles.box]}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View>
          <TextWrapper  style={[styles.price,{color:theme.primary}]}>Service Name</TextWrapper>
          <TextWrapper  style={styles.price}>Covid 19 Test</TextWrapper>

          </View>
          <View>
          <TextWrapper  style={[styles.price,{color:theme.primary}]}>Amount</TextWrapper>
          <TextWrapper  style={styles.price}>$119.50</TextWrapper>

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
            <View style={{ width: 30 * vw,}}>
              <GeneralTextInput
                // value={password}
                // onChangeText={text => setPassword(text)}
                // lableStyle={{ marginLeft: 2*vw }}
                placeHolder=""
                conStyle={{

                  width: 30 * vw,


                }}
                inputViewStyle={{ width: 30 * vw, }}
                label="Date"
              />
            </View>
            <View style={{width: 30 * vw,}}>


              <GeneralTextInput
                // value={password}
                // onChangeText={text => setPassword(text)}
                viewCon={{ marginRight: 5 * vw }}
                placeHolder=""
                conStyle={{ width: 30 * vw }}
                inputViewStyle={{ width: 30 * vw }}
                label="Time"
              />
            </View>
          </View>
        </View>
        <SubmitButton
          style={styles.submitButtonStyle}
          title="Proceed to Pay"
        // onPress={()=>props.navigation.navigate('GetStartedScreen')}
        />
      </ScrollWrapper>
    </View >
  );
};
export default BookNowScreen;