import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

const Product = ({name, type, rate, count, van, avatar}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image source={avatar} />
      </View>
      <View style={styles.detailInfo}>
        <Text style={styles.nameTxt}>{name} 🔥🔥</Text>
        <Text style={styles.typeTxt}>{type}</Text>
        <View style={styles.toolbar}>
          <View style={styles.rate}>
            <Image source={require('@/assets/images/icons/star.png')} />
            <Text style={styles.rateTxt}>
              {rate} ({count})
            </Text>
          </View>
          <TouchableOpacity style={styles.vanButton}>
            <Image
              style={{width: 20, height: 20}}
              source={require('@/assets/images/token_overview/vinet_token_logo.png')}
            />
            <Text style={styles.vanTxt}>{van} VAN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Product;
