import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import TokenOverview from '@/components/features/home/TokenOverview';
import Toolbar from '@/components/features/wallet/Toolbar';
import AnalysticChart from '@/components/features/wallet/AnalysticChart';
import TransactionHistory from '@/components/features/wallet/TransactionHistory';
import styles from './styles';

const SelectedWallet = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('Wallet')}>
        <Image source={require('@/assets/images/icons/arrow-left.png')} />
        <Text style={styles.pageTitle}>{t('pages.selectedWallet.title')}</Text>
      </TouchableOpacity>
      <View style={styles.body}>
        <TokenOverview />
        <View style={styles.content}>
          <Toolbar />
          <AnalysticChart />
          <TransactionHistory />
        </View>
      </View>
    </ScrollView>
  );
};

export default withNavigation(SelectedWallet);
