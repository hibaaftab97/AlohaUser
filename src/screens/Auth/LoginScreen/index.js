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
import { userLogin } from '../../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { showToast } from '../../../redux/Api/HelperFunction';

const LoginScreen = props => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
    };


    if (email == '') {
      showToast('Enter email');

    }
    else if (password == '') {
      showToast('Enter password');

    }
    else if (!validateEmail(email)) {
      showToast('Please Enter a Valid Email');
    }
    else {
      dispatch(userLogin(data)).then(response => {

        console.log('response?.status', response);
        if (response?.status) {
          // setVisible(!visible);
          // props.navigation.navigate('DrawerNavigator')


        }
      });
    }


  };
  const renderFields = () => {
    return (

      <View style={styles.fieldContainer}>

        <View style={styles.miniContainer}>

          <TextWrapper style={styles.shortdes}>Log In</TextWrapper>
          <TextWrapper style={styles.des}>Please log in to continue</TextWrapper>

          <View style={styles.fieldsView}>
            <AuthTextInput
              value={email}
              onChangeText={text => setEmail(text)}
              placeHolder="Enter Email"
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
            textStyle={{ color: theme.primary }}
            onPress={() => 
              handleLogin()
              }
            style={styles.submitButtonStyle}
            title="LogIn"
          />
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: vh }}>
            <TextWrapper style={styles.account}>Don’t have an account?</TextWrapper>
            <TouchableOpacity onPress={() => props.navigation.navigate('SignupScreen')}>
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
