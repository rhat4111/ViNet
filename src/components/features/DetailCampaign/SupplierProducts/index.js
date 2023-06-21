import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Campaign from '@/components/Campaign';
import styles from './styles';

const SupplierProducts = () => {
  const items = [
    {
      id: 2,
      name: '[Token back] Khoá học Coinex - Khái niệm to the moon  ',
      remainTokens: 1300,
      remainTime: '20 : 10 : 05',
      avatar: require('@/assets/images/large_compaignes/1.png'),
      van: 112,
    },
    {
      id: 3,
      name: '[Token back] Khoá học Coinex - Khái niệm to the moon  ',
      remainTokens: 1300,
      remainTime: '20 : 10 : 05',
      avatar: require('@/assets/images/large_compaignes/12.png'),
      van: 112,
    },
    {
      id: 4,
      name: '[Token back] Khoá học Coinex - Khái niệm to the moon  ',
      remainTokens: 1300,
      remainTime: '20 : 10 : 05',
      avatar: require('@/assets/images/large_compaignes/10.png'),
      van: 112,
    },
    {
      id: 5,
      name: '[Token back] Khoá học Coinex - Khái niệm to the moon  ',
      remainTokens: 1300,
      remainTime: '20 : 10 : 05',
      avatar: require('@/assets/images/large_compaignes/13.png'),
      van: 112,
    },
    {
      id: 6,
      name: '[Token back] Khoá học Coinex - Khái niệm to the moon  ',
      remainTokens: 1300,
      remainTime: '20 : 10 : 05',
      avatar: require('@/assets/images/large_compaignes/11.png'),
      van: 112,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {t('pages.detailCampaign.information.supplierProducts.title')}
        </Text>
        <TouchableOpacity>
          <Image source={require('@/assets/images/icons/arrow_right.png')} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        {items.map(item => {
          return (
            <View key={item.id} style={styles.campaignCard}>
              <Campaign {...item} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SupplierProducts;
