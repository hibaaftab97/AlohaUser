import React from 'react';
import { Text, View, Modal, Image, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { vh, vw } from '../../../units/index';
import { icons } from '../../../assets/images/index';
import TextWrapper from '../../TextWrapper/index';
import SubmitButton from '../../Buttons/SubmitButton/index';
import { useNavigation } from '@react-navigation/core';
import styles from './styles';
import GeneralTextInput from '../../TextInputs/GeneralTextInput';
import theme from '../../../utils/theme';

const Reschedule = props => {
  const navigation = useNavigation();
  return (
    <Modal
      transparent={true}
      visible={props.visibility ? props.visibility : false}
      style={{ flex: 1 }}>
      <BlurView style={styles.blurViewStyle} blurType="light" blurAmount={20} />
      <View style={styles.alertMainView}>
        {/* <TouchableOpacity style={styles.crossIconView}>
          <Image source={icons.cross} style={styles.crossIconStyle} />
        </TouchableOpacity> */}

        <View style={styles.barViewStyle}>

          <TextWrapper style={styles.res}>Reschedule</TextWrapper>
        </View>
        <View style={{
          flexDirection: 'row',
          width: 70 * vw,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <View style={{ width: 30 * vw, }}>
            <GeneralTextInput
              value={'01 Apr, 2022'}
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
          <View style={{ width: 30 * vw, }}>


            <GeneralTextInput
              value={'10 : 00  /  11:00'}
              // onChangeText={text => setPassword(text)}
              viewCon={{ marginRight: 5 * vw }}
              placeHolder=""
              conStyle={{ width: 30 * vw }}
              inputViewStyle={{ width: 30 * vw }}
              label="Time"
            />

          </View>

        </View>
        <SubmitButton
          style={styles.acceptButton}
          onPress={props?.onHide}
          title="Submit"
        />
        <SubmitButton
          style={styles.submitButtonStyle}
          title="Exit"
          onPress={props?.onHide}
          
          textStyle={{ color: theme.primary }}
        />

      </View>
    </Modal>
  );
};

export default Reschedule;
