import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@/themes';
import styles from './styles';
import {t} from 'i18next';

const DealerOrdersRanking = () => {
  const rows = [
    {
      order: '4th',
      user: {
        name: 'Nguyễn',
        avatar: require('@/assets/images/dealers/1.png'),
      },
      count: 707,
    },
    {
      order: '5th',
      user: {
        name: 'Nguyễn',
        avatar: require('@/assets/images/dealers/2.png'),
      },
      count: 653,
    },
    {
      order: '6th',
      user: {
        name: 'Nguyễn',
        avatar: require('@/assets/images/dealers/3.png'),
      },
      count: 519,
    },
    {
      order: '7th',
      user: {
        name: 'Đinh',
        avatar: require('@/assets/images/dealers/4.png'),
      },
      count: 304,
    },
    {
      order: '8th',
      user: {
        name: 'Nguyễn Ngọc',
        avatar: require('@/assets/images/dealers/5.png'),
      },
      count: 289,
    },
    {
      order: '9th',
      user: {
        name: 'Phạm',
        avatar: require('@/assets/images/dealers/6.png'),
      },
      count: 117,
    },
    {
      order: '10th',
      user: {
        name: 'Phan',
        avatar: require('@/assets/images/dealers/7.png'),
      },
      count: 78,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t('pages.detailCampaign.rating.dealerOrdersRanking.title')}
      </Text>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 24}}>
        <Image source={require('@/assets/images/icons/info.png')} />
        <Text style={styles.tip}>
          {t('pages.detailCampaign.rating.dealerOrdersRanking.tip')}
        </Text>
      </View>
      <Image
        style={styles.ranking}
        source={require('@/assets/images/dealer_orders_ranking.png')}
      />
      <View style={styles.orders}>
        {rows.map((row, index) => {
          return (
            <View
              style={[
                styles.order,
                {borderBottomWidth: index === rows.length - 1 ? 0 : 1},
              ]}
              key={index}>
              <View style={styles.user}>
                <Image source={row.user.avatar} style={styles.avatar} />
                <View>
                  <Text style={styles.orderTxt}>{row.order}</Text>
                  <Text style={styles.name}>{row.user.name}</Text>
                </View>
              </View>
              <Text style={styles.count}>
                {row.count}{' '}
                {t('pages.detailCampaign.rating.dealerOrdersRanking.orders')}
              </Text>
            </View>
          );
        })}
      </View>
      <Text style={styles.updated}>
        ({t('pages.detailCampaign.rating.dealerOrdersRanking.updated')} 12:03
        28/02/2022)
      </Text>
    </View>
  );
};

export default DealerOrdersRanking;
