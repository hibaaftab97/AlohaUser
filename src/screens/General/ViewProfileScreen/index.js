import React, { useState } from 'react';
import { View, Dimensions, Image, ImageBackground, Text } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import AuthTextInput from '../../../components/TextInputs/AuthTextInput';
import TextWrapper from '../../../components/TextWrapper';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import { Icons } from '../../../assets/images';
import CommonHeader from '../../../components/Headers/CommonHeader';

import ScrollWrapper from '../../../components/ScrollWrapper';
import GeneralTextInput from '../../../components/TextInputs/GeneralTextInput';
import theme from '../../../utils/theme';


const ViewProfileScreen = props => {
  const [fName, setfName] = useState('Smith');
  const [lName, setlName] = useState('Johnson');
  const [email, setemail] = useState('Johnson@gmail.com');

  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');


  const renderFields = () => {
    return (

      <View style={styles.fieldContainer}>

        <View style={styles.miniContainer}>


          <View style={styles.fieldsView}>
            <View style={styles.box}>
              <TextWrapper style={styles.name}>John</TextWrapper>
            </View>
            <View style={styles.box}>
              <TextWrapper style={styles.name}>Doe</TextWrapper>
            </View>
            <View style={styles.box}>
              <TextWrapper style={styles.name}>johndoe@gmail.com</TextWrapper>
            </View>
          </View>

        </View>

      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <ScrollWrapper avoidKeyboard={true}
        contentContainerStyle={styles.content}>

        {/* <ImageBackground
          style={{
            width: 100 * vw, height: 100 * vh

          }}
          resizeMode='cover'
          imageStyle={styles.scroll}
          source={require('../../../assets/images/ProfileBG.png')}> */}
        <CommonHeader
          profile
        />
        <View style={{ alignItems: 'center' }}>
          <Image source={Icons.profile}
            style={styles.img} />


        </View>
        <TextWrapper style={styles.shortdes}>Smith Johnson</TextWrapper>

        {renderFields()}

        {/* </ImageBackground> */}
      </ScrollWrapper>
    </View>

  );
};
export default ViewProfileScreen;