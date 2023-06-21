import React from 'react';
import {withNavigation} from 'react-navigation';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ProductRating from '../../ProductRating';
import ProductReview from '../../ProductReview';
import styles from './styles';

const ProductReviews = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {t('pages.detailCampaign.information.review.title')}
        </Text>
        <TouchableOpacity>
          <Image source={require('@/assets/images/icons/arrow_right.png')} />
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 32}}>
        <ProductRating />
      </View>
      <ScrollView horizontal={true}>
        <ProductReview />
        <ProductReview />
        <ProductReview />
        <ProductReview />
        <ProductReview />
      </ScrollView>
      <TouchableOpacity
        style={styles.editReview}
        onPress={() => navigation.navigate('CampaignRating')}>
        <Image source={require('@/assets/images/icons/edit.png')} />
        <Text style={styles.editReviewTxt}>
          {t('pages.detailCampaign.information.review.writeReview')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(ProductReviews);
