import React, { useEffect, useState } from 'react';
import { View, FlatList, RefreshControl, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import CommonHeader from '../../../components/Headers/CommonHeader';
import theme from '../../../utils/theme';
import ScrollWrapper from '../../../components/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import { generalImages, Icons } from '../../../assets/images';
import ShopCard from '../../../components/ShopCard';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import Quantity from '../../../components/Quantity';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../../../redux/actions/productActions';
import { addToCart } from '../../../redux/actions/cartActions';


const ProductDetailScreen = props => {
  const dispatch = useDispatch();


  const [refreshing, setrefreshing] = useState(true)
  const [productDetail, setproductDetail] = useState(null)
  const [quantity, setQuantity] = useState(1)


  const slider = [{
    image: generalImages.carousel,

  },
  {
    image: generalImages.carousel,



  },
  {
    image: generalImages.carousel,


  },


  ]

  const handleCart = () => {
    let data = {
      id: productDetail?.id,
      image: productDetail?.images[0]?.title,
      title: productDetail.title, 
      itemQuantity: quantity,
      price: productDetail?.price
    }
    dispatch(addToCart(data))
  }

  useEffect(() => {
    dispatch(getProductDetail(props.route.params.productId)).then(response => {
      if (response.status) {
        setproductDetail(response.data[0])
        setrefreshing(false)
      }
    });
  }, [])

  const getDetail = () => {
    dispatch(getProductDetail(props.route.params.serviceid)).then(response => {
      if (response.status) {
        setproductDetail(response.data[0])
        setrefreshing(false)

      }
    });
  }

  const colors = [{
    name: '#000000'
  },]

  const [activeSlide, setActiveSlide] = useState(1);

  const renderSlideBanner = () => {
    return (
      <View style={{ height: 35 * vh, alignItems: 'center' }}>
        <Carousel
          // data={homeDataState} //comment beta
          data={productDetail?.images}
          style={{ backgroundColor: 'red' }}
          renderItem={_renderItem}
          sliderWidth={100 * vw}
          itemWidth={100 * vw}
          layout="default"
          onSnapToItem={index => setActiveSlide(index)}
          // keyExtractor={(item, index) => item.images + Math.random()}
          keyExtractor={(item, index) => item.id + index + Math.random()}
        // loop={true}
        // autoplay={true}
        />
        {pagination()}
      </View>
    );
  };

  const _renderItem = ({ item, index }) => {

    return (
      <View style={{ alignItems: 'center' }}>
        <Image source={{ uri: item?.title }}
          style={styles.carImg} />

      </View>
    );
  };

  const pagination = () => {
    return (
      <Pagination
        dotsLength={productDetail?.images?.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.containerStylePagination}
        dotStyle={styles.dotStylePagination}
        // style={{backgroundColor:'red'}}
        inactiveDotStyle={styles.inactiveDotStylePagination}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };
  const [activeIndex, setActive] = useState(-1)
  const renderServiceItem = ({ item, index }) => {
    return (
      <View style={[styles.circle, { backgroundColor: item?.name }]}>

      </View>
    )
  }
  return (
    <View style={styles.scroll}>
      <CommonHeader
        title="Product"
        cart
      />
      <ScrollView refreshControl={
        <RefreshControl
          colors={[theme.primary]}
          tintColor={theme.defaultInactiveBorderColor}
          refreshing={refreshing}
          onRefresh={() => {
            getDetail();
          }}
        />
      }>
        {productDetail !== null && <>
          {renderSlideBanner()}
          <View style={{ alignItems: 'center' }}>
            <TextWrapper style={styles.name}>{productDetail?.title}</TextWrapper>
            <TextWrapper style={styles.price}>{productDetail?.price}</TextWrapper>

          </View>
          <View style={{ paddingHorizontal: 4 * vw }}>
            <TextWrapper style={styles.cat}>Colors</TextWrapper>
            <FlatList
              data={colors}
              renderItem={renderServiceItem}
              horizontal
              contentContainerStyle={{ alignItems: 'center', paddingBottom: 1 * vh }}

              // keyExtractor={item => item.id}
              style={{ width: 100 * vw, paddingBottom: 1 * vh }}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={{ paddingHorizontal: 4 * vw }}>
            <TextWrapper style={styles.cat}>Descriptions</TextWrapper>
            <TextWrapper style={styles.des}>{productDetail?.description}</TextWrapper>

          </View>

          <View style={{ paddingHorizontal: 4 * vw }}>
            <TextWrapper style={styles.cat}>Manufacturer</TextWrapper>
            <TextWrapper style={styles.des}>John Doe</TextWrapper>

          </View>
          <View style={{ alignItems: 'center', marginTop: vh }}>
            <Quantity quantity={quantity}
              onDecrease={() => setQuantity(quantity - 1)}
              onIncrease={() => setQuantity(quantity + 1)} />
          </View>
          {/* <SubmitButton
          // onPress={handleLogin}
          style={styles.submitButtonStyle}
          title="Buy Now"
        /> */}

          <SubmitButton
            onPress={handleCart}
            style={styles.submitButtonStyle}
            title="Add to Cart"
          />
        </>}
      </ScrollView>
    </View >
  );
};
export default ProductDetailScreen;