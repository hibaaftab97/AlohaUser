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
import { authIcons, Icons } from '../../../assets/images';
import { userSignup } from '../../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { showToast } from '../../../redux/Api/HelperFunction';
// import { validateEmail } from '../../../utils';

const LoginScreen = props => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');


  const [password, setPassword] = useState('');

  const handleSignup = () => {
    const data = {
      first_name:fname,
      last_name:lname,
      email: email,
      password: password,
      account_type:'user'
    };
    if (fname == '') {
      showToast('Enter first name');

    }
    else if (lname == '') {
      showToast('Enter last name');

    }
    
    else if (email == '') {
      showToast('Enter email');

    }
    else if (password == '') {
      showToast('Enter password');

    }
    else if (!validateEmail(email)) {
      showToast('Please Enter a Valid Email');
    }
    else {
      dispatch(userSignup(data)).then(response => {
        
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

          <TextWrapper style={styles.shortdes}>Sign Up</TextWrapper>
          <TextWrapper style={styles.des}>Create a new account</TextWrapper>

          <View style={styles.fieldsView}>
          <AuthTextInput
              value={fname}
             source={authIcons.person}
             type='icon'
              onChangeText={text => setfname(text)}
              placeHolder="First name"
            />
             <AuthTextInput
             source={authIcons.person}
              value={lname}
              type='icon'
              onChangeText={text => setlname(text)}
              placeHolder="Last name"
            />
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
          textStyle={{color:theme.primary}}
            onPress={handleSignup}
            style={styles.submitButtonStyle}
            title="Submit"
          />
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <TextWrapper style={styles.account}>Already have an account?</TextWrapper>
              <TouchableOpacity onPress={() => props.navigation.navigate('LoginScreen')}>
                <TextWrapper style={styles.signup}>Log In</TextWrapper>

              </TouchableOpacity>
          </View>
          
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
        source={require('../../../assets/images/signupBg.png')}>

        {renderFields()}



      </ImageBackground>
    </ScrollWrapper>


  );
};
export default LoginScreen;
