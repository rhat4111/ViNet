import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import Product from '@/components/Product';
import styles from './styles';

const FeaturedCampaignes = ({items, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>
          {t('components.featuredCampaignes.title')}
        </Text>
        <Image source={require('@/assets/images/icons/arrow_right.png')} />
      </View>
      <View style={styles.body}>
        {items.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{marginBottom: 16}}
              onPress={() => navigation.navigate('DetailCampaign')}>
              <Product {...item} />
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.seeMoreButton}>
          <Text style={styles.seeMoreTxt}>{t('common.seeMore')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default withNavigation(FeaturedCampaignes);
