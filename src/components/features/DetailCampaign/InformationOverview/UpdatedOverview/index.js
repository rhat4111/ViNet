import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@/themes';
import styles from './styles';
import {t} from 'i18next';

const UpdatedOverview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t('pages.detailCampaign.information.updated.title')} 16:31 03/03/2022
      </Text>
      <View>
        <View style={styles.row}>
          <Text style={styles.name}>
            {t('pages.detailCampaign.information.updated.participants')}
          </Text>
          <Text style={styles.value}>96</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.name}>
            {t('pages.detailCampaign.information.updated.remaining')}
          </Text>
          <Text style={styles.value}>1,300</Text>
        </View>
        <View style={[styles.row, {borderBottomColor: COLORS.TRANSPARENT}]}>
          <Text style={styles.name}>
            {t('pages.detailCampaign.information.updated.bonusFund')}
          </Text>
          <View style={styles.vref}>
            <Image
              style={{width: 20, height: 20}}
              source={require('@/assets/images/icons/trophy.png')}
            />
            <Text style={styles.vrefTxt}>468 VREF</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UpdatedOverview;
