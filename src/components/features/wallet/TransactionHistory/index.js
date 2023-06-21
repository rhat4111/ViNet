import React, {useState} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '@/themes';
import styles from './styles';
import {t} from 'i18next';

const TransactionHistory = () => {
  const history = [
    {
      type: 'receive',
      date: '17/02/2022 09:12',
      value: '+ 1,000 VREF',
    },
    {
      type: 'receive',
      date: '16/02/2022 22:12',
      value: '+ 20,000 VREF',
    },
    {
      type: 'send',
      date: '16/02/2022 13:04',
      value: '- 4,600 VREF',
    },
    {
      type: 'receive',
      date: '10/02/2022 05:52',
      value: '+ 80 VREF',
    },
    {
      type: 'send',
      date: '07/02/2022 18:37',
      value: '- 100 VREF',
    },
    {
      type: 'send',
      date: '01/02/2022 06:19',
      value: '- 100 VREF',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {t('pages.selectedWallet.transactionHistory.title')}
        </Text>
        <TouchableOpacity>
          <Text style={styles.view}>
            {t('pages.selectedWallet.transactionHistory.view')}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.toolbar}>
        <Text style={styles.date}>
          {t('pages.selectedWallet.transactionHistory.month')} 02/2022
        </Text>
        <View style={styles.tags}>
          <View style={styles.tag}>
            <View style={styles.tagHeader}>
              <Image
                style={styles.tagAvatar}
                source={require('@/assets/images/icons/receive_success.png')}
              />
              <Text style={styles.tagName}>
                {t('pages.selectedWallet.receive')}
              </Text>
            </View>
            <Text style={styles.tagValue}>21,580 VREF</Text>
          </View>
          <View style={styles.tag}>
            <View style={styles.tagHeader}>
              <Image
                style={styles.tagAvatar}
                source={require('@/assets/images/icons/send_danger.png')}
              />
              <Text style={styles.tagName}>
                {t('pages.selectedWallet.send')}
              </Text>
            </View>
            <Text style={styles.tagValue}>4,700 VREF</Text>
          </View>
        </View>
      </View>
      <View style={styles.table}>
        {history.map(item => (
          <View style={styles.row}>
            <View style={styles.type}>
              <View style={styles.avatar}>
                <View
                  style={[
                    styles.avatarBg,
                    {
                      backgroundColor:
                        item.type === 'receive'
                          ? COLORS.SUCCESS
                          : COLORS.DANGER,
                    },
                  ]}
                />
                {item.type === 'receive' ? (
                  <Image
                    style={styles.avatarImg}
                    source={require('@/assets/images/icons/receive_success.png')}
                  />
                ) : (
                  <Image
                    style={styles.avatarImg}
                    source={require('@/assets/images/icons/send_danger.png')}
                  />
                )}
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.typeTxt}>
                  {item.type === 'receive'
                    ? t('pages.selectedWallet.receive')
                    : t('pages.selectedWallet.send')}
                </Text>
                <Text style={styles.dateTxt}>{item.date}</Text>
              </View>
            </View>
            <Text
              style={[
                styles.valueTxt,
                {
                  color:
                    item.type === 'receive' ? COLORS.SUCCESS : COLORS.DANGER,
                },
              ]}>
              {item.value}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default TransactionHistory;
