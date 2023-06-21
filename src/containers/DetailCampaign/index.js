import React, {useState} from 'react';
import {withNavigation} from 'react-navigation';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {
  AboutOverview,
  InformationOverview,
  IntroduceOverview,
  GoStudioOverview,
  RatingOverview,
  StatisticalOverview,
} from '@/components/features/DetailCampaign';
import styles from './styles';
import {COLORS} from '@/themes';

const DetailCampaign = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('information');
  const tabs = [
    {
      id: 'information',
      label: t('pages.detailCampaign.tabs.information'),
    },
    {
      id: 'statistical',
      label: t('pages.detailCampaign.tabs.statistical'),
    },
    {
      id: 'rating',
      label: t('pages.detailCampaign.tabs.rating'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('Home')}>
        <Image source={require('@/assets/images/icons/arrow-left.png')} />
        <Text style={styles.pageTitle}>{t('pages.detailCampaign.title')}</Text>
      </TouchableOpacity>
      <View style={styles.body}>
        <GoStudioOverview />
        <AboutOverview />
        <IntroduceOverview />
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
        {selectedTab === 'information' && <InformationOverview />}
        {selectedTab === 'statistical' && <StatisticalOverview />}
        {selectedTab === 'rating' && <RatingOverview />}
      </View>
    </ScrollView>
  );
};

export default withNavigation(DetailCampaign);
