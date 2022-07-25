import React from 'react';
import { Text, View, TouchableOpacity ,Image} from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';

const ServiceCard = props => {
    return (
        <TouchableOpacity style={[styles.box]}
        >
          <Image source={props?.item?.image}
          style={styles.img}/>
             <TextWrapper style={[styles.title]}>{props.item.title}</TextWrapper>
   
         
        
         </TouchableOpacity>

    );
};

export default ServiceCard;
