import React, {useState} from 'react';
import {withNavigation} from 'react-navigation';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import TokenOverview from '@/components/features/home/TokenOverview';
import styles from './styles';

const Wallet = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('Home')}>
        <Image source={require('@/assets/images/icons/arrow-left.png')} />
        <Text style={styles.pageTitle}>{t('pages.wallet.title')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SelectedWallet')}>
        <TokenOverview />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tokenContainer}
        onPress={() => navigation.navigate('SelectedWallet')}>
        <Image
          source={require('@/assets/images/token_overview/bg_left.png')}
          style={styles.leftImg}
        />
        <Image
          source={require('@/assets/images/token_overview/bg_right.png')}
          style={styles.rightImg}
        />
        <View style={styles.token}>
          <View style={styles.tokenLogo}>
            <Image
              source={require('@/assets/images/token_overview/usdcoin_token_logo.png')}
            />
          </View>
          <Text style={styles.tokenName}>USD Coin</Text>
        </View>
        <Text style={styles.valueTxt}>513 USDC</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tokenContainer}
        onPress={() => navigation.navigate('SelectedWallet')}>
        <Image
          source={require('@/assets/images/token_overview/bg_left.png')}
          style={styles.leftImg}
        />
        <Image
          source={require('@/assets/images/token_overview/bg_right.png')}
          style={styles.rightImg}
        />
        <View style={styles.token}>
          <View style={styles.tokenLogo}>
            <Image
              source={require('@/assets/images/token_overview/vnd_token_logo.png')}
            />
          </View>
          <Text style={styles.tokenName}>Vietnam Dong</Text>
        </View>
        <Text style={styles.valueTxt}>1,000,030 VND</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default withNavigation(Wallet);
