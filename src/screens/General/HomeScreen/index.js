import React, { useEffect, useState } from 'react';
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
import { getAllShops, getallServices } from '../../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';


const HomeScreen = props => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer.products);
  const services = useSelector(state => state.productReducer.services);

  const [activeIndex, setActive] = useState(-1)

  console.log('state.productReducer.products',products);

  useEffect(() => {
    dispatch(getAllShops()).then(response => {


      dispatch(getallServices()).then(response => {


      });
    });
  }, [])
  const renderItem = ({ item, index }) => {
    return (
      <ShopCard item={item}
        onPress={() => props?.navigation.navigate('ShopStack', {
          screen: "ProductDetailScreen",
          params: { productId:item.id},
        })} />
    )
  }

  const renderServiceItem = ({ item, index }) => {
    return (
      <ServiceCard item={item}
        onPress={() => props?.navigation.navigate('ServicesStack', {
          screen: "ServiceDetailScreen",
          params: { serviceid:item.id},
        })} />
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
          style={{ color: theme.primary }}
          cart />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <TextWrapper style={styles.bannertitle}>We Provide Fast &  Reliable Medical Testing  Services</TextWrapper>
          <Image source={generalImages.banner}
            resizeMode='contain'
            style={{ width: 40 * vw, height: 40 * vw, }} />
        </View>


        {products.length>0&&services.length>0&&<>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 95 * vw, marginTop: 5 * vh }}>
            <View>

            </View>
            <TextWrapper style={styles.header}>Shops</TextWrapper>
            <TouchableOpacity onPress={() => props?.navigation.navigate('ShopStack')}>
              <TextWrapper style={styles.view}>View All</TextWrapper>

            </TouchableOpacity>

          </View>
          <FlatList
            data={products}
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
            <TouchableOpacity onPress={() => props?.navigation.navigate('ServicesStack')}>
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
        </>}
      </ScrollView>

    </ImageBackground >
  );
};
export default HomeScreen;