import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import AgentDevChart from './AgentDevChart';
import AgentList from './AgentList';
import IncomeChart from './IncomeChart';
import OrderList from './OrderList';
import SupplierProducts from '../SupplierProducts';

export const StatisticalOverview = () => {
  return (
    <View style={styles.statisticalOverview}>
      <IncomeChart />
      <AgentDevChart />
      <OrderList />
      <AgentList />
      <SupplierProducts />
    </View>
  );
};
