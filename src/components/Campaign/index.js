import {t} from 'i18next';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {COLORS} from '@/themes';
import ProgressBar from '@/components/ProgressBar';

const Campaign = ({name, remainTime, remainTokens, van, avatar}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image source={avatar} style={{width: '100%'}} />
        <TouchableOpacity style={styles.vanButton}>
          <Image
            style={{width: 20, height: 20}}
            source={require('@/assets/images/token_overview/vinet_token_logo.png')}
          />
          <Text style={styles.vanTxt}>{van} VAN</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.nameTxt}>{name} 🔥🔥</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flex: 1, maxWidth: 150}}>
            <Text style={styles.labelTxt}>
              {t('components.joinedCampaignes.remainTime')}:
            </Text>
            <Text style={styles.valueTxt}>{remainTime}</Text>
            <ProgressBar percent={20} color={COLORS.ORANGE} />
          </View>
          <View style={{flex: 1, maxWidth: 150}}>
            <Text style={styles.labelTxt}>
              {t('components.joinedCampaignes.remainTokens')}:
            </Text>
            <Text style={styles.valueTxt}>{remainTokens} VAN</Text>
            <ProgressBar percent={75} color={COLORS.SUCCESS} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Campaign;
