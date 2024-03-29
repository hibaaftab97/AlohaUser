import React, { useState } from 'react';
import { View, FlatList, LayoutAnimation, ImageBackground, Image ,TouchableOpacity} from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import CommonHeader from '../../../components/Headers/CommonHeader';
import theme from '../../../utils/theme';
import ScrollWrapper from '../../../components/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import { generalImages, Icons } from '../../../assets/images';
import ShopCard from '../../../components/ShopCard';


const ShopsScreen = props => {

  const list = [{
    title: "All Appointments",
    image: generalImages.shop1,
    price: "$149"
  },
  {
    title: "Latest Appointments",
    image: generalImages.shop2,
    price: "$149"

  },
  {
    title: "Completed Appointments",
    image: generalImages.shop3,
    price: "$149"

  },

  ]
  const categories = [{
    title: "Gender Testing",
   
  },
  {
    title: "Wellness Injections",
 

  },
  {
    title: "Health and Beauty Products",
    

  }, 
  {
    title: "Nutritional Products",
    

  },

  ]

  const [activeIndex,setActive]=useState(-1)
  const renderItem = ({ item, index }) => {
    
    return (
      <ShopCard item={item} 
      onPress={()=>props.navigation.navigate('ProductDetailScreen')}/>
    )
  }
  const renderCategoryItem = ({ item, index }) => {
    return (
     <View  style={styles.categorybox}>
        <TextWrapper  style={styles.cat}>{item.title}</TextWrapper>
     </View>
    )
  }
  return (
    <View style={styles.scroll}>
      <CommonHeader 
        title="Shop"
        cart
         />
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        horizontal
        contentContainerStyle={{ alignItems: 'center', }}
        keyExtractor={item => item.id}
        style={{   }}
        showsVerticalScrollIndicator={false}
      />
      <FlatList
        data={list}
        renderItem={renderItem}
        contentContainerStyle={{ alignItems: 'center',paddingBottom: 10 * vh, }}
numColumns={2}
        keyExtractor={item => item.id}
        style={{ paddingBottom: 10 * vh,  }}
        showsVerticalScrollIndicator={false}
      />



    </View >
  );
};
export default ShopsScreen;