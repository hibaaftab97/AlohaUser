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


const ServiceDetailScreen = props => {



  const [activeIndex, setActive] = useState(-1)

  return (
    <View style={styles.scroll}>
      <CommonHeader
        title="COVID-19 (PCR/Antigen) Test"
      />


      <TextWrapper style={styles.text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</TextWrapper>

      <View style={[styles.box]}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TextWrapper  style={[styles.price,{color:theme.primary}]}>Amount</TextWrapper>
<TextWrapper  style={styles.price}>$119.50</TextWrapper>
        </View>


      </View>
      <SubmitButton
            style={styles.submitButtonStyle}
            title="Book Now"
            onPress={()=>props.navigation.navigate('BookNowScreen')}
          />
    </View >
  );
};
export default ServiceDetailScreen;