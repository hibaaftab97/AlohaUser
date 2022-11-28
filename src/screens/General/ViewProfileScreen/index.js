import React, { useEffect, useReducer, useState } from 'react';
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
import { getProfile } from '../../../redux/actions/profileActions';
import { useDispatch } from 'react-redux';


const ViewProfileScreen = props => {
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [email, setemail] = useState('');
  const [image, setimage] = useState('');
  const [refreshing, setrefreshing] = useState(true)

  const [user, setUser] = useState(null);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProfile()).then(response => {
      console.log('response?.status', response);
      if (response?.status == true) {
        setUser(response.data)
        let nameArr = response.data?.name.split(" ")
        setfName(nameArr[0])
        setlName(nameArr[1])

        setrefreshing(false)
      }
    });


  }, [])

  const renderFields = () => {
    return (

      <View style={styles.fieldContainer}>

        <View style={styles.miniContainer}>


          <View style={styles.fieldsView}>
            <View style={styles.box}>
              <TextWrapper style={styles.name}>{fName}</TextWrapper>
            </View>
            <View style={styles.box}>
              <TextWrapper style={styles.name}>{lName}</TextWrapper>
            </View>
            <View style={styles.box}>
              <TextWrapper style={styles.name}>{user.email}</TextWrapper>
            </View>
          </View>

        </View>

      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      {refreshing==false&&<ScrollWrapper avoidKeyboard={true}
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
          <Image source={{uri:user?.img}}
            style={styles.img} />


        </View>
        <TextWrapper style={styles.shortdes}>Smith Johnson</TextWrapper>

        {renderFields()}

        {/* </ImageBackground> */}
      </ScrollWrapper>}
    </View>

  );
};
export default ViewProfileScreen;