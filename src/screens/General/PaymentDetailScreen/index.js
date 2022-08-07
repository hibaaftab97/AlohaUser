import React, { useState } from 'react';
import { View, FlatList, LayoutAnimation, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import CommonHeader from '../../../components/Headers/CommonHeader';
import theme from '../../../utils/theme';
import ScrollWrapper from '../../../components/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import { Icons } from '../../../assets/images';


const PaymentDetailScreen = props => {

  const list = [{
    date: "01 April, 2022",
    amount: '$238.92'
  },
  {
    date: "01 April, 2022",
    amount: '$238.92'
  },
  {
    date: "01 April, 2022",
    amount: '$238.92'
  },
  {
    date: "01 April, 2022",
    amount: '$238.92'
  },
  ]

  const [activeIndex, setActive] = useState(-1)

  return (
    <View style={styles.scroll}>
      <CommonHeader
        title="Payment Details"
         />
      <View style={{ alignItems: 'center' }}>
        <View style={styles.box}>
          <View style={styles.rowCon}>
            <View style={styles.borderBox}>
              <TextWrapper style={styles.title}>Date</TextWrapper>

            </View>
            <View style={{ width: 30 * vw, height: 5 * vh, justifyContent: 'center' }}>
              <TextWrapper style={styles.subtitle}>01 April, 2022</TextWrapper>

            </View>

          </View>


        </View>

        <View style={styles.box}>
          <View style={styles.rowCon}>
            <View style={styles.borderBox}>
              <TextWrapper style={styles.title}>Time</TextWrapper>

            </View>
            <View style={{ width: 30 * vw, height: 5 * vh, justifyContent: 'center' }}>
              <TextWrapper style={styles.subtitle}>04 : 20 pm</TextWrapper>

            </View>

          </View>


        </View>

        <View style={styles.box}>
          <View style={styles.rowCon}>
            <View style={styles.borderBox}>
              <TextWrapper style={styles.title}>Service Name</TextWrapper>

            </View>
            <View style={{ width: 30 * vw, height: 5 * vh, justifyContent: 'center' }}>
              <TextWrapper style={styles.subtitle}>BP - Blood Pressure </TextWrapper>

            </View>

          </View>


        </View>

        <View style={styles.box}>
          <View style={styles.rowCon}>
            <View style={styles.borderBox}>
              <TextWrapper style={styles.title}>Amount</TextWrapper>

            </View>
            <View style={{ width: 30 * vw, height: 5 * vh, justifyContent: 'center' }}>
              <TextWrapper style={[styles.subtitle, { color: theme.primary, fontSize: 2 * vh }]}>$232.98</TextWrapper>

            </View>

          </View>

        </View>
      </View>
      <TextWrapper style={styles.paymentHeader}>Payment Method</TextWrapper>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.paymentbox}>
          <TextWrapper style={styles.paymenttitle}>VISA</TextWrapper>
        </View>
      </View>

    </View >
  );
};
export default PaymentDetailScreen;