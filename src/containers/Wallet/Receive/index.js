import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import TokenOverview from '@/components/features/home/TokenOverview';
import TextField from '@/components/TextField';
import styles from './styles';
import {t} from 'i18next';

const Swap = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('SelectedWallet')}>
        <Image source={require('@/assets/images/icons/arrow-left.png')} />
        <Text style={styles.pageTitle}>{t('pages.receive.title')}</Text>
      </TouchableOpacity>
      <View style={styles.body}>
        <View style={{marginBottom: 40}}>
          <TokenOverview />
        </View>
        <View>
          <TextField
            icon={<Image source={require('@/assets/images/icons/copy.png')} />}
            align="right"
            label={t('pages.receive.walletAddress')}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.understoodButton}>
        <Text style={styles.understoodButtonTxt}>
          {t('pages.receive.understood')}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default withNavigation(Swap);
