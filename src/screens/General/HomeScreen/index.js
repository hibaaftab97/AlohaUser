import React, { useState } from 'react';
import { View, FlatList, LayoutAnimation, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import CommonHeader from '../../../components/Headers/CommonHeader';
import theme from '../../../utils/theme';
import ScrollWrapper from '../../../components/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import { Icons, generalImages } from '../../../assets/images';
import ShopCard from '../../../components/ShopCard';
import ServiceCard from '../../../components/ServiceCard';
// import StarRating from 'react-native-star-rating';


const HomeScreen = props => {

  const list = [{
    title: "KN95 Masks",
    image: generalImages.shop1,
    price: "$149"
  },
  {
    title: "Facial Cleansing Brush",
    image: generalImages.shop2,
    price: "$149"

  },
  {
    title: "Led Face Mask Light Therapy",
    image: generalImages.shop3,
    price: "$149"

  },

  ]
  const services = [{
    title: "COVID-19",
    image: generalImages.service1,
    price: "$149"
  },
  {
    title: "Specialty Blood Draw",
    image: generalImages.service2,
    price: "$149"

  },
  {
    title: "Urine Drug Screen",
    image: generalImages.service3,
    price: "$149"

  },

  ]

  const [activeIndex, setActive] = useState(-1)
  const renderItem = ({ item, index }) => {
    return (
      <ShopCard item={item} 
      onPress={()=> props?.navigation.navigate('ShopStack',{
        screen:"ProductDetailScreen"
      })}/>
    )
  }

  const renderServiceItem = ({ item, index }) => {
    return (
      <ServiceCard item={item} 
      onPress={()=> props?.navigation.navigate('ServicesStack',{
        screen:"ServiceDetailScreen"
      })}/>
    )
  }
  return (
    <ImageBackground style={styles.scroll}
    imageStyle={{}}
    source={Icons.homeBg}>
      <ScrollView 
          showsVerticalScrollIndicator={false}
          >
        <CommonHeader type='drawer'
          title="Home"
          style={{color:theme.primary}}
          cart />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <TextWrapper style={styles.bannertitle}>We Provide Fast &  Reliable Medical Testing  Services</TextWrapper>
          <Image source={generalImages.banner}
            resizeMode='contain'
            style={{ width: 40 * vw, height: 40 * vw, }} />
        </View>



        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 95 * vw, marginTop: 5 * vh }}>
          <View>

          </View>
          <TextWrapper style={styles.header}>Shops</TextWrapper>
          <TouchableOpacity onPress={()=> props?.navigation.navigate('ShopStack')}>
          <TextWrapper style={styles.view}>View All</TextWrapper>

          </TouchableOpacity>

        </View>
        <FlatList
          data={list}
          renderItem={renderItem}
          horizontal
          contentContainerStyle={{ alignItems: 'center', paddingBottom: 5 * vh }}

          // keyExtractor={item => item.id}
          style={{ width: 100 * vw, paddingBottom: 1 * vh }}
          showsHorizontalScrollIndicator={false}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 95 * vw, marginTop: 1 * vh }}>
          <View>

          </View>
          <TextWrapper style={styles.header}>Services</TextWrapper>
          <TouchableOpacity onPress={()=> props?.navigation.navigate('ServicesStack')}>
          <TextWrapper style={styles.view}>View All</TextWrapper>

          </TouchableOpacity>

        </View>
        <FlatList
          data={services}
          renderItem={renderServiceItem}
          horizontal
          contentContainerStyle={{ alignItems: 'center', paddingBottom: 5 * vh }}

          // keyExtractor={item => item.id}
          style={{ width: 100 * vw, paddingBottom: 5 * vh }}
          showsVerticalScrollIndicator={false}
        />

      </ScrollView>

    </ImageBackground >
  );
};
export default HomeScreen;