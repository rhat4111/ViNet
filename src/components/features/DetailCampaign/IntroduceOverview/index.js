import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@/themes';
import styles from './styles';

export const IntroduceOverview = () => {
  return (
    <View style={styles.introduceOverview}>
      <Image
        source={require('@/assets/images/gso-install-app.png')}
        style={styles.avatar}
      />
      <Text style={styles.titleTxt}>
        {t('pages.detailCampaign.introduce.title')}
      </Text>
      <Text style={styles.descTxt}>
        {t('pages.detailCampaign.introduce.desc')}
      </Text>
      <TouchableOpacity style={styles.moreBtn}>
        <Text style={styles.moreBtnTxt}>
          {t('pages.detailCampaign.introduce.more')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
