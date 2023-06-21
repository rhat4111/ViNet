import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@/themes';
import styles from './styles';
import {t} from 'i18next';

const OrdersRanking = () => {
  const rows = [
    {
      order: '4th',
      user: {
        name: 'Nguyễn',
        avatar: require('@/assets/images/orders/1.png'),
      },
      count: 757,
    },
    {
      order: '5th',
      user: {
        name: 'Phạm',
        avatar: require('@/assets/images/orders/2.png'),
      },
      count: 681,
    },
    {
      order: '6th',
      user: {
        name: 'Tiên',
        avatar: require('@/assets/images/orders/3.png'),
      },
      count: 611,
    },
    {
      order: '7th',
      user: {
        name: 'Vương',
        avatar: require('@/assets/images/orders/4.png'),
      },
      count: 598,
    },
    {
      order: '8th',
      user: {
        name: 'Trần',
        avatar: require('@/assets/images/orders/5.png'),
      },
      count: 426,
    },
    {
      order: '9th',
      user: {
        name: 'Nguyễn',
        avatar: require('@/assets/images/orders/6.png'),
      },
      count: 125,
    },
    {
      order: '10th',
      user: {
        name: 'Đình',
        avatar: require('@/assets/images/orders/7.png'),
      },
      count: 64,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t('pages.detailCampaign.rating.ordersRanking.title')}
      </Text>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 24}}>
        <Image source={require('@/assets/images/icons/info.png')} />
        <Text style={styles.tip}>
          {t('pages.detailCampaign.rating.ordersRanking.tip')}
        </Text>
      </View>
      <Image
        style={styles.ranking}
        source={require('@/assets/images/orders_ranking.png')}
      />
      <View style={styles.orders}>
        {rows.map((row, index) => {
          return (
            <View style={styles.order} key={index}>
              <Text style={styles.orderTxt}>{row.order}</Text>
              <View style={styles.detailInfo}>
                <View style={styles.user}>
                  <Image source={row.user.avatar} style={styles.avatar} />
                  <View>
                    <Text style={styles.name}>{row.user.name}</Text>
                  </View>
                </View>
                <Text style={styles.count}>
                  {row.count}{' '}
                  {t('pages.detailCampaign.rating.ordersRanking.orders')}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      <Text style={styles.updated}>
        ({t('pages.detailCampaign.rating.ordersRanking.updated')} 12:03
        28/02/2022)
      </Text>
    </View>
  );
};

export default OrdersRanking;
