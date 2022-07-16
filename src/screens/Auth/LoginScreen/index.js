import React, { useState } from 'react';
import { View, Dimensions, LayoutAnimation, ImageBackground, Text, TouchableOpacity } from 'react-native';
import MainContainer from '../../../components/MainContainer';
import styles from './styles';
import { vh, vw } from '../../../units';
import ScrollWrapper from '../../../components/ScrollWrapper';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import TextWrapper from '../../../components/TextWrapper';
import AuthTextInput from '../../../components/TextInputs/AuthTextInput';
import { validateEmail } from '../../../utils';
import theme from '../../../utils/theme';


const LoginScreen = props => {
  // const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const renderFields = () => {
    return (

      <View style={styles.fieldContainer}>

        <View style={styles.miniContainer}>

          <TextWrapper style={styles.shortdes}>LogIn</TextWrapper>
          <TextWrapper style={styles.des}>Please login to continue</TextWrapper>

          <View style={styles.fieldsView}>
            <AuthTextInput
              value={email}
              onChangeText={text => setEmail(text)}
              placeHolder="Enter Your Mail"
              keyboardType="email-address"
            />
            <AuthTextInput
              value={password}
              onChangeText={text => setPassword(text)}
              placeHolder="Enter Your Password"
              secureTextEntry
              type="password"
            />

          </View>
         

          <SubmitButton
          textStyle={{color:theme.primary}}
            // onPress={handleLogin}
            style={styles.submitButtonStyle}
            title="LogIn"
          />
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <TextWrapper style={styles.account}>Don’t have an account?</TextWrapper>
          <TouchableOpacity onPress={() => props.navigation.navigate('ForgotPasswordScreen')}>
            <TextWrapper style={styles.signup}>Sign Up</TextWrapper>

          </TouchableOpacity>
          </View>
           <TouchableOpacity onPress={() => props.navigation.navigate('ForgotPasswordScreen')}>
            <TextWrapper style={styles.fpw}>Forgot Password</TextWrapper>

          </TouchableOpacity>
        </View>

      </View>
    );
  };
  return (
    <ScrollWrapper avoidKeyboard={true}
      contentContainerStyle={styles.content}>
      <ImageBackground
        style={{
          height: 100 * vh, width: 100 * vw,

          justifyContent: 'flex-end'
        }}
        resizeMode='cover'
        imageStyle={styles.scroll}
        source={require('../../../assets/images/loginBG.png')}>

        {renderFields()}



      </ImageBackground>
    </ScrollWrapper>


  );
};
export default LoginScreen;
