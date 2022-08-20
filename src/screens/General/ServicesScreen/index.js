import React, { useState } from 'react';
import { View, FlatList, LayoutAnimation, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import CommonHeader from '../../../components/Headers/CommonHeader';
import theme from '../../../utils/theme';
import ScrollWrapper from '../../../components/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import { generalImages, Icons } from '../../../assets/images';
import { useDispatch, useSelector } from 'react-redux';

import BookService from '../../../components/Modal/BookService';

const ServicesScreen = props => {

  const list = [{
    title: "COVID-19 (PCR/Antigen) Test",
    image: generalImages.service1
  },
  {
    title: "Specialty Blood Draw",
    image: generalImages.service1
  },
  {
    title: "Urine Drug Screen (UDS)",
    image: generalImages.service1
  },
  {
    title: "Breath Alcohol Test (BAT)",
    image: generalImages.service1
  },
  ]
  const [visible, setVisible] = useState(false);
  const services = useSelector(state => state.productReducer.services);


  const [activeIndex, setActive] = useState(-1)
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={[styles.box, { backgroundColor: index == activeIndex ? theme.primary : theme.whiteBackground }]}
        onPress={() => {
          setActive(index)
          setVisible(true)
          // props.navigation.navigate('ServiceDetailScreen')
        }
        }>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Image source={{uri:item.image_path}}
            style={[styles.leftimg, ]} />
          <TextWrapper style={[styles.title, { color: index == activeIndex ? theme.whiteBackground : theme.primary }]}>{item.service_name}</TextWrapper>
          <Image source={Icons.rightArrow}
            style={[styles.img, { tintColor: index == activeIndex ? theme.whiteBackground : theme.primary }]} />
        </View>
      </TouchableOpacity>
    )
  }
  const handleModalVisibility = () => {
    setVisible(false);
  };
  return (
    <View style={styles.scroll}>
      <CommonHeader
        title="Services"
      />
      <BookService
        onPress={() => {
          setVisible(false)
          props.navigation.navigate('ServiceDetailScreen',{
            serviceid:services[activeIndex].id
          })
        }}
        onHide={handleModalVisibility}
        visibility={visible}
      />
      <FlatList
        data={services}
        renderItem={renderItem}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 10 * vh, }}

        keyExtractor={item => item.id}
        style={{ paddingBottom: 10 * vh, width: 100 * vw }}
        showsVerticalScrollIndicator={false}
      />



    </View >
  );
};
export default ServicesScreen;