import React, {useState} from 'react';
import {withNavigation} from 'react-navigation';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import TextField from '@/components/TextField';
import PriceInput from '@/components/PriceInput';
import styles from './styles';
import {t} from 'i18next';

const CreateProduct = ({navigation}) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState();
  const [productLink, setProductLink] = useState('');
  const [productDesc, setProductDesc] = useState('');
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.navigate('Management')}>
          <Image source={require('@/assets/images/icons/arrow-left.png')} />
          <Text style={styles.pageTitle}>{t('pages.createProduct.title')}</Text>
        </TouchableOpacity>
        <View style={styles.body}>
          <View style={{marginBottom: 24}}>
            <TextField
              label={t('pages.createProduct.product.name')}
              value={productName}
              handleChange={value => setProductName(value)}
              trackLength={true}
              maxLength={200}
            />
          </View>
          <View style={{marginBottom: 24}}>
            <PriceInput
              label={t('pages.createProduct.product.price')}
              value={productPrice}
              placeholder={t('pages.createProduct.product.price')}
              handleChange={value => setProductPrice(value)}
              units={['VNĐ', 'USD']}
            />
          </View>
          <View style={{marginBottom: 24}}>
            <TextField
              label={t('pages.createProduct.product.link')}
              value={productLink}
              placeholder={t('pages.createProduct.product.linkPlaceholder')}
              handleChange={value => setProductLink(value)}
            />
          </View>
          <View style={{marginBottom: 24}}>
            <TextField
              label={t('pages.createProduct.product.description')}
              placeholder={t('pages.createProduct.product.description')}
              value={productDesc}
              handleChange={value => setProductDesc(value)}
              multiline={true}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => navigation.navigate('Management')}>
          <Text style={styles.saveBtnTxt}>{t('pages.createProduct.save')}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default withNavigation(CreateProduct);
