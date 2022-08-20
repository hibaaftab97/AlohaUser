import React, { useEffect, useState } from 'react';
import { View, FlatList, RefreshControl, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import CommonHeader from '../../../components/Headers/CommonHeader';
import theme from '../../../utils/theme';
import ScrollWrapper from '../../../components/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import { Icons } from '../../../assets/images';
import { getOrders } from '../../../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'


const HomeScreen = props => {

  const dispatch = useDispatch();
  const [orders, setOrders] = useState([])
  const [refreshing, setRefreshing] = useState(true)



  const list = [{
    date: "01 April, 2022",
    amount: '$238.92',
    orderno: "Order #A0016888",
    time: "04 : 20 pm",
    status: 'Delivered',
    service: "BP - Blood Pressure "
  },
  {
    date: "01 April, 2022",
    amount: '$238.92',
    orderno: "Order #A0016888",
    status: 'Delivered',

    time: "04 : 20 pm",
    service: "BP - Blood Pressure "


  },
  {
    date: "01 April, 2022",
    amount: '$238.92',
    orderno: "Order #A0016888",
    status: 'Delivered',

    service: "BP - Blood Pressure ",

    time: "04 : 20 pm"

  },
  {
    date: "01 April, 2022",
    amount: '$238.92',
    orderno: "Order #A0016888",
    status: 'Delivered',

    service: "BP - Blood Pressure ",

    time: "04 : 20 pm"

  },
  ]

  useEffect(() => {
    dispatch(getOrders()).then(response => {
      if (response.status) {
        setRefreshing(false)

        setOrders(response.data)
      }

    });
  }, [])

  const _getOrders = () => {
    dispatch(getOrders()).then(response => {
      if (response.status) {
        setRefreshing(false)

        setOrders(response.data)
      }

    });
  }
  const empty = () => {
    return (
      <TextWrapper style={[styles.title]}>No orders</TextWrapper>

    )
  }
  const [activeIndex, setActive] = useState(-1)
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={[styles.box, { backgroundColor: index == activeIndex ? theme.primary : theme.whiteBackground }]}
        onPress={() => {
          setActive(index)
          props.navigation.navigate('OrderSummaryScreen',{
            orderId:item.id
          })
        }
        }>
        <View style={styles.card}>
          <View>
            <TextWrapper style={[styles.title, { color: index == activeIndex ? theme.whiteBackground : theme.primary }]}>Order id:{item?.id}</TextWrapper>
            <TextWrapper style={[styles.subtitle, { color: index == activeIndex ? theme.whiteBackground : '#1d1f1f' }]}>Date -{moment(item.created_at).format('DD MMMM, YYYY')}</TextWrapper>

          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View>
              <TextWrapper style={[styles.subtitle, { color: index == activeIndex ? theme.whiteBackground : theme.black }]}>Status - {item?.status}</TextWrapper>

              <TextWrapper style={[styles.subtitle, { color: index == activeIndex ? theme.whiteBackground : theme.black }]}>Amount -  {item.total}</TextWrapper>
            </View>
            <Image source={Icons.rightArrow}
              style={styles.img} />
          </View>

        </View>


      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.scroll}>
      <CommonHeader type='drawer'
        title="My Orders"
      />
      <FlatList
        data={orders}
        renderItem={renderItem}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 10 * vh, }}
        ListEmptyComponent={empty}
        refreshControl={
          <RefreshControl
            colors={[theme.primary]}
        refreshing={refreshing}

            tintColor={theme.defaultInactiveBorderColor}
            onRefresh={() => {
              _getOrders();
            }}
          />
        }
        keyExtractor={item => item.id}
        style={{ paddingBottom: 10 * vh, width: 100 * vw }}
        showsVerticalScrollIndicator={false}
      />



    </View >
  );
};
export default HomeScreen;