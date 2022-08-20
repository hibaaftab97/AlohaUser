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
import { bookService } from '../../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

const BookNowScreen = props => {


  const dispatch = useDispatch();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const book = () => {

    let book = {
      service: {
        service_id: props.route.params.serviceDetail.id,
        title: props.route.params.serviceDetail.service_name,
        amount: props.route.params.serviceDetail.price


      },
      details: {
        "name": name,
        "email": email,
        "phone": phone,
        "city": city,
        "address": address,
        "time": time,
        "date": date
      }
    }
    dispatch(bookService(book)).then(response => {


        console.log('response=>>',response);
    });
  }

  return (
    <View style={styles.scroll}>
      <ScrollWrapper avoidKeyboard={true}

        contentContainerStyle={styles.content}>
        <CommonHeader
          title="COVID-19 (PCR/Antigen) Test"
        />
        <View style={{ alignItems: 'center' }}>
          <View style={[styles.box]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <TextWrapper style={[styles.price, { color: theme.primary }]}>Service Name</TextWrapper>
                <TextWrapper style={styles.price}>{props.route.params.serviceDetail.service_name}</TextWrapper>

              </View>
              <View>
                <TextWrapper style={[styles.price, { color: theme.primary }]}>Amount</TextWrapper>
                <TextWrapper style={styles.price}>${props.route.params.serviceDetail.price}</TextWrapper>

              </View>
            </View>


          </View>
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
                value={date}
                onChangeText={text => setDate(text)}
                // lableStyle={{ marginLeft: 2*vw }}
                placeHolder=""
                conStyle={{

                  width: 30 * vw,


                }}
                inputViewStyle={{ width: 30 * vw, }}
                label="Date"
              />
            </View>
            <View style={{ width: 30 * vw, }}>


              <GeneralTextInput
                value={time}
                onChangeText={text => setTime(text)}
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
          onPress={book}
        />
      </ScrollWrapper>
    </View >
  );
};
export default BookNowScreen;