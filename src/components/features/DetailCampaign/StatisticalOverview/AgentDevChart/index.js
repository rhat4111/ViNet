import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@/themes';
import styles from './styles';

const AgentDevChart = () => {
  const [selectedTab, setSelectedTab] = useState('hours');
  const tabs = [
    {
      id: 'hours',
      label: t('pages.detailCampaign.statistical.agentDevChart.hours'),
    },
    {
      id: 'week',
      label: t('pages.detailCampaign.statistical.agentDevChart.week'),
    },
    {
      id: 'month',
      label: t('pages.detailCampaign.statistical.agentDevChart.month'),
    },
    {
      id: 'five',
      label: t('pages.detailCampaign.statistical.agentDevChart.five'),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t('pages.detailCampaign.statistical.agentDevChart.title')}
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
        source={require('@/assets/images/agent_dev_chart.png')}
      />
    </View>
  );
};

export default AgentDevChart;
