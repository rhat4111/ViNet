import React from 'react';
import {View} from 'react-native';
import CampaignInformation from './CampaignInformation';
import UpdatedOverview from './UpdatedOverview';
import PrizeInformation from './PrizeInformation';
import ProductReviews from './ProductReviews';
import SupplierInformation from './SupplierInformation';
import SupplierProducts from '../SupplierProducts';
import styles from './styles';

export const InformationOverview = () => {
  return (
    <View style={styles.informationOverview}>
      <CampaignInformation />
      <UpdatedOverview />
      <PrizeInformation />
      <SupplierInformation />
      <ProductReviews />
      <SupplierProducts />
    </View>
  );
};
