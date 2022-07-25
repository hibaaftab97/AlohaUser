import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import theme from '../../../utils/theme';
import { authIcons } from '../../../assets/images';
import { vw } from '../../../units';
import TextWrapper from '../../TextWrapper';

const GeneralTextInput = props => {
  const [focus, setFocus] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const handlePassword = () => {
    setIsShow(!isShow);
  };
  return (
    <View style={[{    marginLeft: 1 * vw,},props.viewCon]}>
  {props.label?<TextWrapper  style={[styles.label,props.lableStyle]}>{props.label}</TextWrapper>:null}


    <View
      style={[styles.customStyle,props.conStyle]}>
      <TextInput
        value={props.value}
        maxLength={props?.maxLength}
        onChangeText={props.onChangeText}
        style={[styles.textInputStyle,props.inputViewStyle]}
        placeholder={props.placeHolder}
        placeholderTextColor={props.placeholderTextColor?props.placeholderTextColor:theme.black}
        secureTextEntry={props.type ? true : false}
        onFocus={() => setFocus(true)}
        // keyboardType='email-address'
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry && !isShow}
        {...props}
      />
      
    </View>
    </View>
  );
};

export default GeneralTextInput;
