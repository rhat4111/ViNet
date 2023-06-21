import React, {useState} from 'react';
import {withNavigation} from 'react-navigation';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Product from '@/components/Product';
import Campaign from '@/components/Campaign';
import {COLORS} from '@/themes';

const Management = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('created');
  const tabs = [
    {id: 'created', name: t('pages.management.created')},
    {id: 'my', name: t('pages.management.my')},
    {id: 'joined', name: t('pages.management.joined')},
  ];
  const createdProducts = [
    {
      id: 1,
      name: 'Gian hàng chuẩn Tết Nhâm Dần. Token back siêu hấp dẫn',
      type: '304,000 VNĐ',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/15.png'),
      van: 100,
    },
    {
      id: 2,
      name: 'Gian hàng chuẩn Tết Nhâm Dần. Token back siêu hấp dẫn',
      type: '304,000 VNĐ',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/7.png'),
      van: 100,
    },
    {
      id: 3,
      name: 'Gian hàng chuẩn Tết Nhâm Dần. Token back siêu hấp dẫn',
      type: '304,000 VNĐ',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/13.png'),
      van: 100,
    },
    {
      id: 4,
      name: 'Gian hàng chuẩn Tết Nhâm Dần. Token back siêu hấp dẫn',
      type: '304,000 VNĐ',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/12.png'),
      van: 100,
    },
    {
      id: 5,
      name: 'Gian hàng chuẩn Tết Nhâm Dần. Token back siêu hấp dẫn',
      type: '304,000 VNĐ',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/6.png'),
      van: 100,
    },
    {
      id: 6,
      name: 'Gian hàng chuẩn Tết Nhâm Dần. Token back siêu hấp dẫn',
      type: '304,000 VNĐ',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/14.png'),
      van: 100,
    },
    {
      id: 7,
      name: 'Gian hàng chuẩn Tết Nhâm Dần. Token back siêu hấp dẫn',
      type: '304,000 VNĐ',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/8.png'),
      van: 100,
    },
    {
      id: 8,
      name: 'Gian hàng chuẩn Tết Nhâm Dần. Token back siêu hấp dẫn',
      type: '304,000 VNĐ',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/16.png'),
      van: 100,
    },
    {
      id: 9,
      name: 'Gian hàng chuẩn Tết Nhâm Dần. Token back siêu hấp dẫn',
      type: '304,000 VNĐ',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/10.png'),
      van: 100,
    },
  ];

  const joinedCampaignes = [
    {
      id: 1,
      name: '[Token back] Khoá học Coinex - Khái niệm to the moon  ',
      remainTokens: 1300,
      remainTime: '20 : 10 : 05',
      avatar: require('@/assets/images/large_compaignes/1.png'),
      van: 112,
    },
    {
      id: 2,
      name: '[Token back] Khoá học Coinex - Khái niệm to the moon  ',
      remainTokens: 1300,
      remainTime: '20 : 10 : 05',
      avatar: require('@/assets/images/large_compaignes/7.png'),
      van: 112,
    },
    {
      id: 3,
      name: '[Token back] Khoá học Coinex - Khái niệm to the moon  ',
      remainTokens: 1300,
      remainTime: '20 : 10 : 05',
      avatar: require('@/assets/images/large_compaignes/6.png'),
      van: 112,
    },
  ];

  const myCampaignes = [
    {
      id: 2,
      name: '[Token back] Khoá học Coinex - Khái niệm to the moon  ',
      remainTokens: 1300,
      remainTime: '20 : 10 : 05',
      avatar: require('@/assets/images/large_compaignes/2.png'),
      van: 100,
    },
    {
      id: 3,
      name: '[Token back] Khoá học Coinex - Khái niệm to the moon  ',
      remainTokens: 1300,
      remainTime: '20 : 10 : 05',
      avatar: require('@/assets/images/large_compaignes/4.png'),
      van: 100,
    },
    {
      id: 4,
      name: '[Token back] Khoá học Coinex - Khái niệm to the moon  ',
      remainTokens: 1300,
      remainTime: '20 : 10 : 05',
      avatar: require('@/assets/images/large_compaignes/8.png'),
      van: 100,
    },
    {
      id: 5,
      name: '[Token back] Khoá học Coinex - Khái niệm to the moon  ',
      remainTokens: 1300,
      remainTime: '20 : 10 : 05',
      avatar: require('@/assets/images/large_compaignes/9.png'),
      van: 100,
    },
  ];

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{t('pages.management.title')}</Text>
          <View style={styles.headerToolbar}>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Image source={require('@/assets/images/icons/search.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationButton}>
              <Image source={require('@/assets/images/icons/bell.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView horizontal={true} style={{marginBottom: 24}}>
          <View style={styles.tabs}>
            {tabs.map(tab => {
              return (
                <TouchableOpacity
                  style={styles.tab}
                  key={tab.id}
                  onPress={() => setSelectedTab(tab.id)}>
                  <Text
                    style={[
                      styles.tabTxt,
                      {opacity: selectedTab === tab.id ? 1 : 0.5},
                    ]}>
                    {tab.name}
                  </Text>
                  <View
                    style={[
                      styles.bar,
                      {
                        backgroundColor:
                          selectedTab === tab.id
                            ? COLORS.WARNING
                            : COLORS.TRANSPARENT,
                      },
                    ]}></View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        <View style={styles.body}>
          {selectedTab === 'created' &&
            createdProducts.map(product => {
              return (
                <View key={product.id} style={{marginBottom: 16}}>
                  <Product {...product} />
                </View>
              );
            })}
          {selectedTab === 'my' &&
            myCampaignes.map(item => {
              return (
                <View key={item.id} style={{marginBottom: 32}}>
                  <Campaign {...item} />
                </View>
              );
            })}
          {selectedTab === 'joined' &&
            joinedCampaignes.map(item => {
              return (
                <View key={item.id} style={styles.joinedCampaignCard}>
                  <Campaign {...item} />
                </View>
              );
            })}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.plusIcon}
        onPress={() => navigation.navigate('CreateProduct')}>
        <Image source={require('@/assets/images/icons/plus.png')} />
      </TouchableOpacity>
    </>
  );
};

export default withNavigation(Management);
