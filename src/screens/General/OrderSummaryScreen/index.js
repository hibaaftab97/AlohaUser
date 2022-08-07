import React, { useState } from 'react';
import { View, FlatList, LayoutAnimation, ImageBackground, Image ,TouchableOpacity} from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import CommonHeader from '../../../components/Headers/CommonHeader';
import theme from '../../../utils/theme';
import ScrollWrapper from '../../../components/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import { generalImages, Icons } from '../../../assets/images';
import OrderCard from '../../../components/OrderCard';


const OrderSummaryScreen = props => {

  const services = [{
    title: "KN95 mask",
    image: generalImages.shop1,
    price: "$149",
    quantity:2
  },
  {
    title: "Facial Cleansing..",
    image: generalImages.shop2,
    price: "$149",
    quantity:2
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
           <TextWrapper style={[styles.subtitle,{color:index==activeIndex? theme.whiteBackground:'#1d1f1f'}]}>01 Apr, 2022</TextWrapper>
           
           </View>
           <View>
           <TextWrapper style={[styles.title,{color:index==activeIndex? theme.whiteBackground:theme.primary}]}>Order</TextWrapper>
           <TextWrapper style={[styles.subtitle,{color:index==activeIndex? theme.whiteBackground:'#1d1f1f'}]}>#A0016888</TextWrapper>
           
           </View>
           <View>
           <TextWrapper style={[styles.title,{color:index==activeIndex? theme.whiteBackground:theme.primary}]}>Status</TextWrapper>

           <TextWrapper style={[styles.subtitle,{color:index==activeIndex? theme.whiteBackground:theme.black}]}>Delivered</TextWrapper>
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
  const renderServiceItem = ({ item, index }) => {
    return (
      <OrderCard item={item} />
    )
  }
  return (
    <View style={styles.scroll}>
      <CommonHeader 
        title="Order Summary"
         />
      <View style={[styles.box]}
     >
         <View style={styles.card}>
           <View>
           <TextWrapper style={[styles.title]}>Date</TextWrapper>
           <TextWrapper style={[styles.subtitle]}>01 Apr, 2022</TextWrapper>
           
           </View>
           <View>
           <TextWrapper style={[styles.title]}>Order</TextWrapper>
           <TextWrapper style={[styles.subtitle]}>#A0016888</TextWrapper>
           
           </View>
           <View>
           <TextWrapper style={[styles.title]}>Status</TextWrapper>

           <TextWrapper style={[styles.subtitle]}>Delivered</TextWrapper>
           </View>
        </View>
        <View style={[styles.card1,{marginTop:2*vh}]}>
           <View>
           <TextWrapper style={[styles.title]}>Subtotal</TextWrapper>
           <View  style={{flexDirection:'row',justifyContent:'space-between',marginTop:1*vh}}>
           <TextWrapper style={[styles.subtitle]}>KN95 mask</TextWrapper>
           <TextWrapper style={[styles.subtitle]}>$24</TextWrapper>

           </View>
           <View  style={{flexDirection:'row',justifyContent:'space-between',marginTop:1*vh}}>
           <TextWrapper style={[styles.subtitle]}>Facial Cleansing..</TextWrapper>
           <TextWrapper style={[styles.subtitle]}>$24</TextWrapper>

           </View>
           </View>
         
        </View>
        <View  style={{flexDirection:'row',justifyContent:'space-between',marginTop:2*vh}}>
           <TextWrapper style={[styles.subtitle]}>Total</TextWrapper>
           <TextWrapper style={[styles.title]}>$173</TextWrapper>

           </View>
       
      </View>

      <FlatList
          data={services}
          renderItem={renderServiceItem}
          contentContainerStyle={{  paddingBottom: 5 * vh }}

          // keyExtractor={item => item.id}
          style={{ width: 100 * vw, paddingBottom: 5 * vh }}
          showsVerticalScrollIndicator={false}
        />

    </View >
  );
};
export default OrderSummaryScreen;