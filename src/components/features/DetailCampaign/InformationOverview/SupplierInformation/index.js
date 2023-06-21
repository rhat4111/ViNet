import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@/themes';
import styles from './styles';
import {t} from 'i18next';

const SupplierInformation = () => {
  const rows = [
    {
      name: t('pages.detailCampaign.information.supplier.manufacture'),
      value: 'GoStream JSC',
    },
    {
      name: t('pages.detailCampaign.information.supplier.totalCampaigns'),
      value: '104',
    },
    {
      name: t('pages.detailCampaign.information.supplier.productCount'),
      value: '11',
    },
    {
      name: t('pages.detailCampaign.information.supplier.totalOrders'),
      value: '315',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t('pages.detailCampaign.information.supplier.title')}
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
              {index === 0 ? (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={require('@/assets/images/icons/like.png')} />
                  <Text
                    style={[
                      styles.value,
                      {color: COLORS.WARNING, marginLeft: 4},
                    ]}>
                    {row.value}
                  </Text>
                </View>
              ) : (
                <Text style={styles.value}>{row.value}</Text>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default SupplierInformation;
