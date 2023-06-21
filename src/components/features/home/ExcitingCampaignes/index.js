import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Product from '@/components/Product';
import styles from './styles';
import {COLORS} from '@/themes';

const ExcitingCampaignes = ({items}) => {
  const tabs = [
    {
      id: 'topParticipating',
      label: t('components.excitingCampaignes.topParticipating'),
    },
    {
      id: 'topBonuses',
      label: t('components.excitingCampaignes.topBonuses'),
    },
    {
      id: 'topPaid',
      label: t('components.excitingCampaignes.topPaid'),
    },
  ];
  const [selectedTab, setSelectedTab] = useState('topParticipating');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>
          {t('components.excitingCampaignes.title')}
        </Text>
        <Image source={require('@/assets/images/icons/arrow_right.png')} />
      </View>
      <View style={styles.tabs}>
        {tabs.map(tab => {
          return (
            <TouchableOpacity
              onPress={() => setSelectedTab(tab.id)}
              key={tab.id}
              style={[
                styles.tab,
                {
                  backgroundColor:
                    selectedTab === tab.id
                      ? COLORS.BG_GRAY_1
                      : COLORS.TRANSPARENT,
                },
              ]}>
              <Text
                style={[
                  styles.tabTxt,
                  {
                    color:
                      selectedTab === tab.id
                        ? COLORS.WHITE
                        : COLORS.TEXT_GRAY_2,
                  },
                ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.body}>
        {items.map(item => {
          return (
            <View key={item.id} style={{marginBottom: 16}}>
              <Product {...item} />
            </View>
          );
        })}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.seeMoreButton}>
          <Text style={styles.seeMoreTxt}>{t('common.seeMore')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExcitingCampaignes;
