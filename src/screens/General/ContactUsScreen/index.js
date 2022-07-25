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


const ConactUsScreen = props => {



  const [activeIndex, setActive] = useState(-1)

  return (
    <View style={styles.scroll}>
      <ScrollWrapper avoidKeyboard={true}

        contentContainerStyle={styles.content}>
        <CommonHeader
          title="Contact Support"
        />
        <View style={{ alignItems: 'center' }}>
    
          <GeneralTextInput
            // value={password}
            // onChangeText={text => setPassword(text)}
            placeHolder=""

            label="Full Name"
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

            label="Subject"
          />
          
          <GeneralTextInput
            // value={password}
            // onChangeText={text => setPassword(text)}
            placeHolder=""

            label="Message"
            multiline={true}
            conStyle={{ height: 25 * vh }}
          />
        </View  >
      
        <SubmitButton
          style={styles.submitButtonStyle}
          title="Submit"
        // onPress={()=>props.navigation.navigate('GetStartedScreen')}
        />
      </ScrollWrapper>
    </View >
  );
};
export default ConactUsScreen;