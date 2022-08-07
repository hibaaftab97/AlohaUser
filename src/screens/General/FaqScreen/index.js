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


const FaqScreen = props => {
 

  const routeOrders = [
    {
      name:"FAQ 1",
      details:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
    },
    {
      name:"FAQ 2",
      details:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"


    },
    {
      name:"FAQ 3",
      details:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"


    },
    {
      name:"FAQ 4",
      details:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"


    },
  
  ];

    const [activeindex,setActiveIndex]=useState(-1)

 
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
            title="FAQ"
          />
           <View style={styles.routeContainer}>
        {routeOrders.map((item, index) => {
          return (
            <TouchableOpacity
            onPress={() => 
              {
                if(activeindex==index){
                  setActiveIndex(-1)
                }
                else{
                  setActiveIndex(index)
                }
              }
           }
            style={[styles.container]}>
            <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'space-between' }}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <TextWrapper style={styles.label}>{item.name}</TextWrapper>
              </View>
              <Image style={styles.righticon} source={Icons.uparrow} />
      
            </View>
      
            {index==activeindex&&<TextWrapper style={styles.value}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</TextWrapper>}
      
      
          </TouchableOpacity>
          );
        })}
</View>
        {/* </ImageBackground> */}
      </ScrollWrapper>
    </View>

  );
};
export default FaqScreen;