import React, { useState } from 'react';
import { View, Dimensions, Image,TouchableOpacity, ImageBackground, Text } from 'react-native';
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
import DrawerButton from '../../../components/DrawerComponents/DrawerButton';


const HelpScreen = props => {
 

  const routeOrders = [
    {
      name:"TermScreen",
      icon:Icons.help1,
      routeName:"ConactUsScreen"
    },
    {
      name:"ContactUsScreen",
      icon:Icons.help2,
      routeName:"ConactUsScreen"

    },
    {
      name:"PrivacyScreen",
      icon:Icons.help3,
      routeName:"ConactUsScreen"

    },
    {
      name:"FaqScreen",
      icon:Icons.help4,
      routeName:"ConactUsScreen"

    },
  
  ];
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');


 
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
            title="Help"
          />
           <View style={styles.routeContainer}>
        {routeOrders.map((item, index) => {
          return (
            <TouchableOpacity
            onPress={() => props.navigation.navigate(item.routeName)}
            style={[styles.container]}>
            <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'space-between' }}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image style={styles.icon} source={item.icon} />
                <TextWrapper style={styles.label}>{item.name}</TextWrapper>
              </View>
              <Image style={styles.righticon} source={Icons.rightArrow} />
      
            </View>
      
      
      
          </TouchableOpacity>
          );
        })}
</View>
        {/* </ImageBackground> */}
      </ScrollWrapper>
    </View>

  );
};
export default HelpScreen;