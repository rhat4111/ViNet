import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@/themes';
import styles from './styles';

const IncomeChart = () => {
  const [selectedTab, setSelectedTab] = useState('hours');
  const tabs = [
    {
      id: 'hours',
      label: t('pages.detailCampaign.statistical.incomeChart.hours'),
    },
    {
      id: 'week',
      label: t('pages.detailCampaign.statistical.incomeChart.week'),
    },
    {
      id: 'month',
      label: t('pages.detailCampaign.statistical.incomeChart.month'),
    },
    {
      id: 'five',
      label: t('pages.detailCampaign.statistical.incomeChart.five'),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t('pages.detailCampaign.statistical.incomeChart.title')}
      </Text>
      <View style={styles.tabs}>
        {tabs.map(tab => {
          return (
            <TouchableOpacity
              style={[
                styles.tab,
                {
                  backgroundColor:
                    selectedTab === tab.id
                      ? COLORS.BG_GRAY_1
                      : COLORS.TRANSPARENT,
                },
              ]}
              key={tab.id}
              onPress={() => setSelectedTab(tab.id)}>
              <Text
                style={[
                  styles.label,
                  {
                    color:
                      selectedTab === tab.id ? COLORS.WHITE : COLORS.BG_GRAY_6,
                  },
                ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Image
        style={styles.chart}
        source={require('@/assets/images/income_chart.png')}
      />
    </View>
  );
};

export default IncomeChart;
