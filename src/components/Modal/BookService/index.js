import React, { useState } from 'react';
import { Text, View, Modal, Image, TouchableOpacity, FlatList } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { vh, vw } from '../../../units/index';
import { icons } from '../../../assets/images/index';
import TextWrapper from '../../TextWrapper/index';
import SubmitButton from '../../Buttons/SubmitButton/index';
import { useNavigation } from '@react-navigation/core';
import styles from './styles';
import GeneralTextInput from '../../TextInputs/GeneralTextInput';
import theme from '../../../utils/theme';

const BookService = props => {
  const navigation = useNavigation();
  const [activeIndex, setActive] = useState(-1)
  const [servicetypeIndex, setservicetype] = useState(-1)
  const [servicetimeIndex, setservicetime] = useState(-1)


  const list = [{
    title: "PCR",
  },
  {
    title: "Antigen",
  },

  ]

  const servicetype = [{
    title: "in-office",
  },
  {
    title: "Concierge",
  },

  ]
  const servicetime = [{
    title: "24 hours",
  },
  {
    title: "1 hours",
  },

  ]
  const renderService = ({ item, index }) => {
    return (
      <TouchableOpacity style={[styles.box, { backgroundColor: index == activeIndex ? theme.primary : theme.whiteBackground }]}
        onPress={() => {
          setActive(index)
          // props.navigation.navigate('ServiceDetailScreen')
        }
        }>

        <TextWrapper style={[styles.title, { color: index == activeIndex ? theme.whiteBackground : theme.black }]}>{item.title}</TextWrapper>

      </TouchableOpacity>
    )
  }
  const renderServiceType = ({ item, index }) => {
    return (
      <TouchableOpacity style={[styles.box, { backgroundColor: index == servicetypeIndex ? theme.primary : theme.whiteBackground }]}
        onPress={() => {
          setservicetype(index)
          // props.navigation.navigate('ServiceDetailScreen')
        }
        }>

        <TextWrapper style={[styles.title, { color: index == servicetypeIndex ? theme.whiteBackground : theme.black }]}>{item.title}</TextWrapper>

      </TouchableOpacity>
    )
  }
  const renderServiceTime = ({ item, index }) => {
    return (
      <TouchableOpacity style={[styles.box, { backgroundColor: index == servicetimeIndex ? theme.primary : theme.whiteBackground }]}
        onPress={() => {
          setservicetime(index)
          // props.navigation.navigate('ServiceDetailScreen')
        }
        }>

        <TextWrapper style={[styles.title, { color: index == servicetimeIndex ? theme.whiteBackground : theme.black }]}>{item.title}</TextWrapper>

      </TouchableOpacity>
    )
  }

  return (
    <Modal
      transparent={true}
      visible={props.visibility ? props.visibility : false}
      style={{ flex: 1 }}>
      <BlurView style={styles.blurViewStyle} blurType="light" blurAmount={20} />
      <View style={styles.alertMainView}>
        {/* <TouchableOpacity style={styles.crossIconView}>
          <Image source={icons.cross} style={styles.crossIconStyle} />
        </TouchableOpacity> */}

        <View style={styles.barViewStyle}>

          <TextWrapper style={styles.res}>COVID-19</TextWrapper>
        </View>
        <View>
          
        </View>
        <FlatList
          data={list}
          renderItem={renderService}
          contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
          horizontal
          keyExtractor={item => item.id}
          style={{ height:10*vh ,}}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          data={servicetype}
          renderItem={renderServiceType}
          contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
          horizontal
          keyExtractor={item => item.id}
          style={{ height:10*vh }}
          showsHorizontalScrollIndicator={false}
        />

        <FlatList
          data={servicetime}
          renderItem={renderServiceTime}
          contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
          horizontal
          keyExtractor={item => item.id}
          style={{ height:10*vh}}
          showsHorizontalScrollIndicator={false}
        />

        <SubmitButton
          style={styles.acceptButton}
          onPress={
            
              props?.onPress
            
          }
          title="Proceed"
        />
        <SubmitButton
          style={styles.submitButtonStyle}
          title="Exit"
          onPress={props?.onHide}

          textStyle={{ color: theme.primary }}
        />

      </View>
    </Modal>
  );
};

export default BookService;
