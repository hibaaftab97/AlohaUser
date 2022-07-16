import React, { useState } from 'react';
import { View, FlatList, LayoutAnimation, ImageBackground, Image ,TouchableOpacity} from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import CommonHeader from '../../../components/Headers/CommonHeader';
import theme from '../../../utils/theme';
import ScrollWrapper from '../../../components/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import { Icons } from '../../../assets/images';


const HomeScreen = props => {

  const list = [{
    date: "01 April, 2022",
    amount: '$238.92',
    time:"04 : 20 pm",
    service:"BP - Blood Pressure "
  },
  {
    date: "01 April, 2022",
    amount: '$238.92',
    time:"04 : 20 pm",
    service:"BP - Blood Pressure "


  },
  {
    date: "01 April, 2022",
    amount: '$238.92',
    service:"BP - Blood Pressure ",

    time:"04 : 20 pm"

  },
  {
    date: "01 April, 2022",
    amount: '$238.92',
    service:"BP - Blood Pressure ",

    time:"04 : 20 pm"

  },
  ]

  const [activeIndex,setActive]=useState(-1)
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={[styles.box,{backgroundColor:index==activeIndex?theme.primary:theme.whiteBackground}]}
      onPress={()=>
      {
        setActive(index)
        props.navigation.navigate('PaymentDetailScreen')
      }
      }>
         <View style={styles.card}>
           <View>
           <TextWrapper style={[styles.title,{color:index==activeIndex? theme.whiteBackground:theme.primary}]}>Date</TextWrapper>
           <TextWrapper style={[styles.subtitle,{color:index==activeIndex? theme.whiteBackground:'#1d1f1f'}]}>{item.date}</TextWrapper>
           
           </View>
           <View>
           <TextWrapper style={[styles.title,{color:index==activeIndex? theme.whiteBackground:theme.primary}]}>Time</TextWrapper>

           <TextWrapper style={[styles.subtitle,{color:index==activeIndex? theme.whiteBackground:theme.black}]}>{item.time}</TextWrapper>
           </View>
        </View>
        <View style={[styles.card,{marginTop:1*vh}]}>
           <View>
           <TextWrapper style={[styles.title,{color:index==activeIndex? theme.whiteBackground:theme.primary}]}>Service Name</TextWrapper>
           <TextWrapper style={[styles.subtitle,{color:index==activeIndex? theme.whiteBackground:'#1d1f1f'}]}>{item.service}</TextWrapper>
           
           </View>
           <View>
           <TextWrapper style={[styles.title,{color:index==activeIndex? theme.whiteBackground:theme.primary}]}>Amount</TextWrapper>

           <TextWrapper style={[styles.subtitle,{color:index==activeIndex? theme.whiteBackground:theme.black}]}>{item.amount}</TextWrapper>
           </View>
        </View>
       
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.scroll}>
      <CommonHeader type='drawer'
        title="Payment"
        profile />
      <FlatList
        data={list}
        renderItem={renderItem}
        contentContainerStyle={{ alignItems: 'center',paddingBottom: 10 * vh, }}

        keyExtractor={item => item.id}
        style={{ paddingBottom: 10 * vh, width: 100 * vw }}
        showsVerticalScrollIndicator={false}
      />



    </View >
  );
};
export default HomeScreen;