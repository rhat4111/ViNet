import React from 'react';
import {Image, Text, ScrollView, View} from 'react-native';
import Campaign from '@/components/Campaign';
import styles from './styles';

const JoinedCampaignes = ({items}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>
          {t('components.joinedCampaignes.title')}
        </Text>
        <Image source={require('@/assets/images/icons/arrow_right.png')} />
      </View>
      <ScrollView horizontal={true}>
        {items.map(item => {
          return (
            <View key={item.id} style={styles.campaignCard}>
              <Campaign {...item} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default JoinedCampaignes;
