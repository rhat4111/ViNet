import React, {useEffect, useState} from 'react';
import {withNavigation} from 'react-navigation';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import TextField from '@/components/TextField';
import Product from '@/components/Product';
import styles from './styles';

const Search = ({navigation}) => {
  const [keyword, setKeyword] = useState('');
  const items = [
    {
      id: 1,
      name: 'Gói tài khoản Twitter Premium dành cho doanh nhân',
      type: '304,000 VNĐ',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/11.png'),
      van: 100,
    },
    {
      id: 2,
      name: 'Gói tài khoản Twitter Premium dành cho doanh nhân',
      type: '304,000 VNĐ',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/7.png'),
      van: 100,
    },
    {
      id: 3,
      name: 'Gói tài khoản Twitter Premium dành cho doanh nhân',
      type: '304,000 VNĐ',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/13.png'),
      van: 100,
    },
    {
      id: 4,
      name: 'Gói tài khoản Twitter Premium dành cho doanh nhân',
      type: '304,000 VNĐ',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/12.png'),
      van: 100,
    },
    {
      id: 5,
      name: 'Gói tài khoản Twitter Premium dành cho doanh nhân',
      type: '304,000 VNĐ',
      rate: 4.3,
      count: 16,
      avatar: require('@/assets/images/compaignes/6.png'),
      van: 100,
    },
  ];
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(
      keyword !== ''
        ? items.filter(f =>
            f.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()),
          )
        : [],
    );
  }, [keyword]);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('Home')}>
        <Image source={require('@/assets/images/icons/arrow-left.png')} />
        <Text style={styles.pageTitle}>{t('pages.search.title')}</Text>
      </TouchableOpacity>
      <View style={styles.toolbar}>
        <TextField
          value={keyword}
          handleChange={setKeyword}
          placeholder={t('pages.search.placeholder')}
          icon={
            <Image
              style={{width: 20, height: 20}}
              source={require('@/assets/images/icons/search.png')}
            />
          }
          clearable={true}
        />
      </View>
      <View style={styles.body}>
        {keyword !== '' && filteredItems.length === 0 ? (
          <View style={styles.notFoundContainer}>
            <Image source={require('@/assets/images/not_found.png')} />
            <Text style={styles.notFoundTitle}>
              {t('pages.search.notFound.title')}
            </Text>
            <Text style={styles.notFoundDesc}>
              {t('pages.search.notFound.description')}
            </Text>
          </View>
        ) : (
          filteredItems.map(item => {
            return (
              <View key={item.id} style={{marginBottom: 16}}>
                <Product {...item} />
              </View>
            );
          })
        )}
      </View>
    </ScrollView>
  );
};

export default withNavigation(Search);
