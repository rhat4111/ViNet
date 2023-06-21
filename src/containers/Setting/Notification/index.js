import React from 'react';
import {withNavigation} from 'react-navigation';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import CheckBox from '@/components/CheckBox';
import styles from './styles';
import {t} from 'i18next';

const Notification = ({navigation}) => {
  const items = [
    t('pages.setting.notification.alarm'),
    t('pages.setting.notification.vibrate'),
    t('pages.setting.notification.allow'),
  ];

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('Setting')}>
        <Image source={require('@/assets/images/icons/arrow-left.png')} />
        <Text style={styles.pageTitle}>
          {t('pages.setting.notification.notification')}
        </Text>
      </TouchableOpacity>
      <View style={styles.body}>
        {items.map((item, index) => {
          return (
            <View key={index} style={styles.item}>
              <Text style={styles.itemTxt}>{item}</Text>
              <CheckBox />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default withNavigation(Notification);
