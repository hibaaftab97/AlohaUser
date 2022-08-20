import React, { useState ,useEffect} from 'react';
import { View, FlatList, RefreshControl, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import CommonHeader from '../../../components/Headers/CommonHeader';
import theme from '../../../utils/theme';
import ScrollWrapper from '../../../components/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import { generalImages, Icons } from '../../../assets/images';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import { useDispatch, useSelector } from 'react-redux';
import { getServiceDetail} from '../../../redux/actions/productActions';


const ServiceDetailScreen = props => {

  const dispatch = useDispatch();


  const [refreshing, setrefreshing] = useState(true)
  const [serviceDetail, setserviceDetail] = useState(null)


  useEffect(() => {
    dispatch(getServiceDetail(props.route.params.serviceid)).then(response => {
      if(response.status){
        setserviceDetail(response.data[0])
setrefreshing(false)
      }
    });
  }, [])

  const getService=()=>{
    dispatch(getServiceDetail(props.route.params.serviceid)).then(response => {
      if(response.status){
        setserviceDetail(response.data[0])
        setrefreshing(false)

      }
    });
  }


  return (
    <View style={styles.scroll}>
      <CommonHeader
        title="COVID-19 (PCR/Antigen) Test"
      />
      <ScrollView showsVerticalScrollIndicator={false}
       refreshControl={
        <RefreshControl
          colors={[theme.primary]}
          tintColor={theme.defaultInactiveBorderColor}
          refreshing={refreshing}
          onRefresh={() => {
            getService();
          }}
        />
      }
      contentContainerStyle={{paddingBottom:5*vh,alignItems:'center'}}>
      {serviceDetail!==null&&<>
      <Image source={{uri:serviceDetail.image_path}}
        style={styles.img} />

      <TextWrapper style={styles.text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</TextWrapper>

      <View style={[styles.box]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextWrapper style={[styles.price, { color: theme.primary }]}>Amount</TextWrapper>
          <TextWrapper style={styles.price}>${serviceDetail?.price}</TextWrapper>
        </View>


      </View>
      <SubmitButton
        style={styles.submitButtonStyle}
        title="Book Now"
        onPress={() => props.navigation.navigate('BookNowScreen',{
          serviceDetail
        })}
      />
      </>}
      </ScrollView>
    </View >
  );
};
export default ServiceDetailScreen;