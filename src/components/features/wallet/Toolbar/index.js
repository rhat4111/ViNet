import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import {COLORS} from '@/themes';
import styles from './styles';

const Toolbar = ({navigation}) => {
  return (
    <View style={styles.toolbar}>
      <View style={styles.toolbarItem}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Receive')}
          style={[styles.toolbarBtn, {backgroundColor: COLORS.WARNING}]}>
          <Image source={require('@/assets/images/icons/receive.png')} />
        </TouchableOpacity>
        <Text style={styles.toolbarTxt}>
          {t('pages.selectedWallet.receive')}
        </Text>
      </View>
      <View style={styles.toolbarItem}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Send')}
          style={styles.toolbarBtn}>
          <Image source={require('@/assets/images/icons/send.png')} />
        </TouchableOpacity>
        <Text style={styles.toolbarTxt}>{t('pages.selectedWallet.send')}</Text>
      </View>
      <View style={styles.toolbarItem}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Swap')}
          style={styles.toolbarBtn}>
          <Image source={require('@/assets/images/icons/swap.png')} />
        </TouchableOpacity>
        <Text style={styles.toolbarTxt}>{t('pages.selectedWallet.swap')}</Text>
      </View>
    </View>
  );
};

export default withNavigation(Toolbar);
