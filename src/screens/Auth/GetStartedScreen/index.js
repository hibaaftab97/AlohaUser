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


const GetStartedScreen = props => {
  // const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const renderFields = () => {
    return (

      <View style={styles.fieldContainer}>

        <View style={styles.miniContainer}>





          <SubmitButton
          onPress={()=> props.navigation.navigate('LoginScreen')}
            textStyle={{ color: theme.whiteBackground }}
            // onPress={handleLogin}
            style={[styles.submitButtonStyle,{ 
              borderColor:theme.whiteBackground,
              borderWidth:0.5*vw,
                backgroundColor:theme.primary}]}
            title="Login"
          />

          <SubmitButton
            textStyle={{ color: theme.primary }}
          onPress={()=> props.navigation.navigate('SignupScreen')}

            // onPress={handleLogin}
            style={styles.submitButtonStyle}
            title="Sign up"
          />


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
        source={require('../../../assets/images/BG.png')}>

        {renderFields()}



      </ImageBackground>
    </ScrollWrapper>


  );
};
export default GetStartedScreen;
