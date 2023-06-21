import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import DealerOrdersRanking from './DealerOrdersRanking';
import OrdersRanking from './OrdersRanking';
import PrizeInformation from './PrizeInformation';
import SupplierProducts from '../SupplierProducts';

export const RatingOverview = () => {
  return (
    <View style={styles.statisticalOverview}>
      <DealerOrdersRanking />
      <OrdersRanking />
      <PrizeInformation />
      <SupplierProducts />
    </View>
  );
};
