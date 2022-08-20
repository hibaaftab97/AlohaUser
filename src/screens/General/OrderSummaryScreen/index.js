import React, { useState } from 'react';
import { View, FlatList, RefreshControl, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import CommonHeader from '../../../components/Headers/CommonHeader';
import theme from '../../../utils/theme';
import ScrollWrapper from '../../../components/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import { generalImages, Icons } from '../../../assets/images';
import OrderCard from '../../../components/OrderCard';
import { getOrderDetails } from '../../../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import moment from 'moment'



const OrderSummaryScreen = props => {

  const dispatch = useDispatch();
  const [orderDetail, setorderDetail] = useState(null)
  const [refreshing, setRefreshing] = useState(true)



  const services = [{
    title: "KN95 mask",
    image: generalImages.shop1,
    price: "$149",
    quantity: 2
  },
  {
    title: "Facial Cleansing..",
    image: generalImages.shop2,
    price: "$149",
    quantity: 2
  },


  ]

  const [activeIndex, setActive] = useState(-1)

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getOrderDetails(props.route.params.orderId)).then(response => {
        if (response.status) {
          setRefreshing(false)

          setorderDetail(response.data[0])
        }

      });

      return () => { };
    }, [props.route.params.orderId])
  );


  const _getOrders = () => {
    setRefreshing(true)
    dispatch(getOrderDetails(props.route.params.orderId)).then(response => {
      if (response.status) {
        setRefreshing(false)

        setorderDetail(response.data[0])
      }

    });
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
      <ScrollView refreshControl={
        <RefreshControl
          colors={[theme.primary]}
          refreshing={refreshing}

          tintColor={theme.defaultInactiveBorderColor}
          onRefresh={() => {
            _getOrders();
          }}
        />
      }>
        {orderDetail !== null && <><View style={[styles.box]}
        >
          <View style={styles.card}>
            <View>
              <TextWrapper style={[styles.title]}>Date</TextWrapper>
              <TextWrapper style={[styles.subtitle]}>{moment(orderDetail.created_at).format('DD MMMM, YYYY')}</TextWrapper>

            </View>
            <View>
              <TextWrapper style={[styles.title]}>Order</TextWrapper>
              <TextWrapper style={[styles.subtitle]}>{orderDetail?.id}</TextWrapper>

            </View>
            <View>
              <TextWrapper style={[styles.title]}>Status</TextWrapper>

              <TextWrapper style={[styles.subtitle]}>{orderDetail?.status}</TextWrapper>
            </View>
          </View>
          <View style={[styles.card1, { marginTop: 2 * vh }]}>
            <View>
              <TextWrapper style={[styles.title]}>Subtotal</TextWrapper>
              {orderDetail?.order_details.map((item, index) => {
                return (
                  <View style={{ flexDirection: 'row',
                  alignItems:'center',
                  justifyContent: 'space-between', marginTop: 1 * vh }}>
                    <TextWrapper style={[styles.subtitle]}>{item?.product?.title}</TextWrapper>
                    <TextWrapper style={[styles.subtitle]}>{item?.product?.price}</TextWrapper>

                  </View>
                )
              })}

              {/* <View  style={{flexDirection:'row',justifyContent:'space-between',marginTop:1*vh}}>
           <TextWrapper style={[styles.subtitle]}>Facial Cleansing..</TextWrapper>
           <TextWrapper style={[styles.subtitle]}>$24</TextWrapper>

           </View> */}
            </View>

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 2 * vh }}>
            <TextWrapper style={[styles.subtitle]}>Total</TextWrapper>
            <TextWrapper style={[styles.title]}>{orderDetail?.total}</TextWrapper>

          </View>

        </View>

          <FlatList
            data={orderDetail?.order_details}
            renderItem={renderServiceItem}
            contentContainerStyle={{ paddingBottom: 5 * vh }}

            // keyExtractor={item => item.id}
            style={{ width: 100 * vw, paddingBottom: 5 * vh }}
            showsVerticalScrollIndicator={false}
          />
        </>}
      </ScrollView>
    </View >
  );
};
export default OrderSummaryScreen;