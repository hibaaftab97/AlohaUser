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


const ProfileScreen = props => {
  const [fName, setfName] = useState('Smith');
  const [lName, setlName] = useState('Johnson');
  const [email, setemail] = useState('Johnson@gmail.com');

  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');


  const renderFields = () => {
    return (

      <View style={styles.fieldContainer}>

        <View style={styles.miniContainer}>
         

<TextWrapper  style={styles.edit}>Edit Profile</TextWrapper>
          <View style={styles.fieldsView}>
          <GeneralTextInput
            // value={password}
            conStyle={{alignItems:'center'}}
            // onChangeText={text => setPassword(text)}
            placeHolder="First Name"
            placeholderTextColor={theme.primary}
            inputViewStyle={{textAlign:'center',color:theme.primary,justifyContent:'center'}}
          
          />
            <GeneralTextInput
               // value={password}
               conStyle={{alignItems:'center'}}
               // onChangeText={text => setPassword(text)}
               placeHolder="Last Name"
               placeholderTextColor={theme.primary}
               inputViewStyle={{textAlign:'center',color:theme.primary}}

            />
             <GeneralTextInput
               // value={password}
               conStyle={{alignItems:'center'}}
               // onChangeText={text => setPassword(text)}
               placeHolder="Email Address"
               placeholderTextColor={theme.primary}
               inputViewStyle={{textAlign:'center',color:theme.primary}}

            />
           <GeneralTextInput
               // value={password}
               conStyle={{alignItems:'center'}}
               // onChangeText={text => setPassword(text)}
               secureTextEntry
               placeHolder="Password"
               placeholderTextColor={theme.primary}
               inputViewStyle={{textAlign:'center',color:theme.primary}}

            />
             <GeneralTextInput
               // value={password}
               conStyle={{alignItems:'center'}}
               secureTextEntry
               // onChangeText={text => setPassword(text)}
               placeHolder="Confirm Password"
               placeholderTextColor={theme.primary}
               inputViewStyle={{textAlign:'center',color:theme.primary}}

            />
          </View>


          <SubmitButton
          onPress={()=>props.navigation.goBack()}
            style={styles.submitButtonStyle}
            title="Save"
          />
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
            
          />
           <View  style={{alignItems:'center'}}>
            <Image source={Icons.profile}
              style={styles.img} />
            <View style={styles.circle}>
              <Image source={Icons.camera}
                style={styles.imgIcon} />
            </View>

          </View>
          <TextWrapper style={styles.shortdes}>Smith Johnson</TextWrapper>

          {renderFields()}

        {/* </ImageBackground> */}
      </ScrollWrapper>
    </View>

  );
};
export default ProfileScreen;