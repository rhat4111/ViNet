import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@/themes';
import styles from './styles';

export const GoStudioOverview = () => {
  return (
    <View style={styles.gsOverview}>
      <Image source={require('@/assets/images/go_studio.png')} />
      <Text style={styles.gsTitle}>{t('pages.detailCampaign.gs.title')}</Text>
      <Text style={styles.gsDesc}>{t('pages.detailCampaign.gs.desc')}</Text>
      <View style={styles.gsActions}>
        <TouchableOpacity
          style={[
            styles.gsButton,
            {borderWidth: 1, borderColor: COLORS.WHITE},
          ]}>
          <Text style={[styles.gsButtonTxt, {color: COLORS.WHITE}]}>
            {t('pages.detailCampaign.gs.buy')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.gsButton, {backgroundColor: COLORS.WARNING}]}>
          <Text style={[styles.gsButtonTxt, {color: COLORS.SECONDARY}]}>
            {t('pages.detailCampaign.gs.refer')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
