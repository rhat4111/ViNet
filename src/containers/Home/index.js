import React, {useState} from 'react';
import {withNavigation} from 'react-navigation';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import TokenOverview from '@/components/features/home/TokenOverview';
import FeaturedCampaignes from '@/components/features/home/FeaturedCampaignes';
import ExcitingCampaignes from '@/components/features/home/ExcitingCampaignes';
import JoinedCampaignes from '@/components/features/home/JoinedCampaignes';
import MyCampaignes from '@/components/features/home/MyCampaignes';
import styles from './styles';

const Home = ({navigation}) => {
  const [name, setName] = useState('Nguyễn Thị Thuý Quỳnh');
  const featuredCampaignes = [
    {
      id: 1,
      name: 'Gian hàng chuẩn Tết Nhâm Dần. Token back siêu hấp dẫn',
      type: 'GoStream JSC',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/1.png'),
      van: 100,
    },
    {
      id: 2,
      name: 'Gian hàng chuẩn Tết Nhâm Dần. Token back siêu hấp dẫn',
      type: 'GoStream JSC',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/2.png'),
      van: 100,
    },
    {
      id: 3,
      name: 'Gian hàng chuẩn Tết Nhâm Dần. Token back siêu hấp dẫn',
      type: 'GoStream JSC',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/3.png'),
      van: 100,
    },
    {
      id: 4,
      name: 'Gian hàng chuẩn Tết Nhâm Dần. Token back siêu hấp dẫn',
      type: 'GoStream JSC',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/4.png'),
      van: 100,
    },
    {
      id: 5,
      name: 'Gian hàng chuẩn Tết Nhâm Dần. Token back siêu hấp dẫn',
      type: 'GoStream JSC',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/5.png'),
      van: 100,
    },
  ];

  const excitingCampaignes = [
    {
      id: 6,
      name: 'Gian hàng chuẩn Tết Nhâm Dần. Token back siêu hấp dẫn',
      type: 'GoStream JSC',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/6.png'),
      van: 100,
    },
    {
      id: 7,
      name: 'Gian hàng chuẩn Tết Nhâm Dần. Token back siêu hấp dẫn',
      type: 'GoStream JSC',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/7.png'),
      van: 100,
    },
    {
      id: 8,
      name: 'Gian hàng chuẩn Tết Nhâm Dần. Token back siêu hấp dẫn',
      type: 'GoStream JSC',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/8.png'),
      van: 100,
    },
    {
      id: 9,
      name: 'Gian hàng chuẩn Tết Nhâm Dần. Token back siêu hấp dẫn',
      type: 'GoStream JSC',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/9.png'),
      van: 100,
    },
    {
      id: 10,
      name: 'Gian hàng chuẩn Tết Nhâm Dần. Token back siêu hấp dẫn',
      type: 'GoStream JSC',
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
      avatar: require('@/assets/images/large_compaignes/1.png'),
      van: 112,
    },
    {
      id: 3,
      name: '[Token back] Khoá học Coinex - Khái niệm to the moon  ',
      remainTokens: 1300,
      remainTime: '20 : 10 : 05',
      avatar: require('@/assets/images/large_compaignes/1.png'),
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
      avatar: require('@/assets/images/large_compaignes/3.png'),
      van: 100,
    },
    {
      id: 4,
      name: '[Token back] Khoá học Coinex - Khái niệm to the moon  ',
      remainTokens: 1300,
      remainTime: '20 : 10 : 05',
      avatar: require('@/assets/images/large_compaignes/4.png'),
      van: 100,
    },
    {
      id: 5,
      name: '[Token back] Khoá học Coinex - Khái niệm to the moon  ',
      remainTokens: 1300,
      remainTime: '20 : 10 : 05',
      avatar: require('@/assets/images/large_compaignes/5.png'),
      van: 100,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {t('pages.home.hello')} {name} 👋
        </Text>
        <View style={styles.headerToolbar}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image source={require('@/assets/images/icons/search.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationButton}>
            <Image source={require('@/assets/images/icons/bell.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={{marginBottom: 24}}>
          <TokenOverview />
        </View>
        <FeaturedCampaignes items={featuredCampaignes} />
        <ExcitingCampaignes items={excitingCampaignes} />
        <View style={styles.ads}>
          <Image
            style={{position: 'absolute', bottom: 0, right: 0}}
            source={require('@/assets/images/ads/model.png')}
          />
          <Image
            style={{position: 'absolute', bottom: 0, left: 0}}
            source={require('@/assets/images/ads/ring_1.png')}
          />
          <Image
            style={{position: 'absolute', top: 36, right: 0}}
            source={require('@/assets/images/ads/ring_2.png')}
          />
          <View style={styles.adsContent}>
            <Text style={styles.adsTitle}>{t('pages.home.adsTitle')}</Text>
            <TouchableOpacity style={styles.watchNowButton}>
              <Text style={styles.watchNowTxt}>{t('pages.home.watchNow')}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <JoinedCampaignes items={joinedCampaignes} />
        <MyCampaignes items={myCampaignes} />
      </View>
    </ScrollView>
  );
};

export default withNavigation(Home);
