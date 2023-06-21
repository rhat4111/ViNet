import React, {useState} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '@/themes';
import styles from './styles';

const AnalysticChart = () => {
  const tabs = [
    {id: 'hour', label: '1h'},
    {id: 'day', label: '24h'},
    {id: 'week', label: `7 ${t('pages.selectedWallet.analysticChart.day')}`},
    {id: 'month', label: `1 ${t('pages.selectedWallet.analysticChart.month')}`},
  ];
  const [selectedTab, setSelectedTab] = useState('hour');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t('pages.selectedWallet.analysticChart.title')}
      </Text>
      <View style={styles.tabs}>
        {tabs.map(tab => (
          <TouchableOpacity
            style={[
              styles.tab,
              {
                backgroundColor:
                  tab.id === selectedTab
                    ? COLORS.BG_GRAY_1
                    : COLORS.TRANSPARENT,
              },
            ]}
            onPress={() => setSelectedTab(tab.id)}>
            <Text
              style={[
                styles.tabTxt,
                {
                  color:
                    tab.id === selectedTab ? COLORS.WHITE : COLORS.TEXT_GRAY_2,
                },
              ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Image source={require('@/assets/images/trading_chart.png')} />
    </View>
  );
};

export default AnalysticChart;
