import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import TokenOverview from '@/components/features/home/TokenOverview';
import TextField from '@/components/TextField';
import PriceInput from '@/components/PriceInput';
import Stepbar from '@/components/Stepbar';
import styles from './styles';
import {t} from 'i18next';

const Send = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('SelectedWallet')}>
        <Image source={require('@/assets/images/icons/arrow-left.png')} />
        <Text style={styles.pageTitle}>{t('pages.send.title')}</Text>
      </TouchableOpacity>
      <View style={styles.body}>
        <View style={{marginBottom: 40}}>
          <TokenOverview />
        </View>
        <View style={styles.content}>
          <View style={{marginBottom: 24}}>
            <View style={{marginBottom: 12}}>
              <TextField
                label={t('pages.send.van.label')}
                placeholder={t('pages.send.van.placeholder')}
              />
            </View>
            <Stepbar />
          </View>
          <View style={{marginBottom: 24}}>
            <PriceInput
              label={t('pages.send.fee')}
              selectable={false}
              units={['VREF']}
              value={0.0}
            />
          </View>
          <View>
            <TextField
              label={t('pages.send.walletAddress.label')}
              placeholder={t('pages.send.walletAddress.placeholder')}
              align="right"
              icon={
                <Image source={require('@/assets/images/icons/scan.png')} />
              }
            />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.received}>
          <Text style={styles.labelTxt}>{t('pages.send.received')}:</Text>
          <Text style={styles.valueTxt}>0 VREF</Text>
        </View>
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonTxt}>{t('common.send')}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default withNavigation(Send);
