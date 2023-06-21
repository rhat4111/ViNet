import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@/themes';
import styles from './styles';
import {t} from 'i18next';

const CampaignInformation = () => {
  const rows = [
    {
      name: t('pages.detailCampaign.information.campaignInformation.eventDate'),
      value: '29/12/2021',
    },
    {
      name: t('pages.detailCampaign.information.campaignInformation.endDate'),
      value: '28/12/2021',
    },
    {
      name: t('pages.detailCampaign.information.campaignInformation.category'),
      value: 'Phần mềm',
    },
    {
      name: t('pages.detailCampaign.information.campaignInformation.bonus'),
      value: '4,800',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t('pages.detailCampaign.information.campaignInformation.title')}
      </Text>
      <View>
        {rows.map((row, index) => {
          return (
            <View
              style={[
                styles.row,
                {
                  borderBottomColor:
                    index === rows.length - 1
                      ? COLORS.TRANSPARENT
                      : COLORS.BORDER_POPUP,
                },
              ]}
              key={index}>
              <Text style={styles.name}>{row.name}</Text>
              <Text style={styles.value}>{row.value}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default CampaignInformation;
