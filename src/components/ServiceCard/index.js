import React from 'react';
import { Text, View, TouchableOpacity ,Image} from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';

const ServiceCard = props => {
    return (
        <TouchableOpacity style={[styles.box]}
        onPress={props?.onPress}
        >
          <Image source={{uri:props?.item?.image_path}}
          style={styles.img}/>
             <TextWrapper style={[styles.title]}>{props.item.service_name}</TextWrapper>
   
         
        
         </TouchableOpacity>

    );
};

export default ServiceCard;
