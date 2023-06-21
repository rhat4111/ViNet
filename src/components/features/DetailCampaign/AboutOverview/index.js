import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import ProgressBar from '@/components/ProgressBar';
import {COLORS} from '@/themes';
import styles from './styles';

export const AboutOverview = () => {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.aboutOverview}>
        <View style={styles.aboutItem}>
          <View style={styles.line}></View>
          <Text style={styles.aboutTitle}>
            {t('pages.detailCampaign.about.review')}
          </Text>
          <View style={styles.aboutBody}>
            <Text style={styles.aboutValue}>4.4</Text>
          </View>
          <Image source={require('@/assets/images/stars.png')} />
        </View>
        <View style={styles.aboutItem}>
          <View style={styles.line}></View>
          <Text style={styles.aboutTitle}>
            {t('pages.detailCampaign.about.endDate')}
          </Text>
          <View style={styles.aboutBody}>
            <Text style={styles.aboutValue}>21/02/22</Text>
          </View>
          <ProgressBar percent={20} color={COLORS.ORANGE} />
        </View>
        <View style={styles.aboutItem}>
          <View style={styles.line}></View>
          <Text style={styles.aboutTitle}>
            {t('pages.detailCampaign.about.remaining')}
          </Text>
          <View style={styles.aboutBody}>
            <Text style={styles.aboutValue}>1,300</Text>
          </View>
          <ProgressBar percent={75} color={COLORS.SUCCESS} />
        </View>
        <View style={styles.aboutItem}>
          <View style={styles.line}></View>
          <Text style={styles.aboutTitle}>
            {t('pages.detailCampaign.about.bonus')}
          </Text>
          <View style={styles.aboutBody}>
            <Image source={require('@/assets/images/icons/trophy.png')} />
          </View>
          <Text style={styles.aboutDesc}>468 VREF</Text>
        </View>
        <View style={styles.aboutItem}>
          <View style={styles.line}></View>
          <Text style={styles.aboutTitle}>
            {t('pages.detailCampaign.about.participation')}
          </Text>
          <View style={styles.aboutBody}>
            <Text style={styles.aboutValue}>96</Text>
          </View>
          <Text style={styles.aboutDesc}>
            {t('pages.detailCampaign.about.people')}
          </Text>
        </View>
        <View style={styles.aboutItem}>
          <View style={styles.line}></View>
          <Text style={styles.aboutTitle}>
            {t('pages.detailCampaign.about.manufacture')}
          </Text>
          <View style={styles.aboutBody}>
            <Image source={require('@/assets/images/icons/gs.png')} />
          </View>
          <Text style={styles.aboutDesc}>GoStream JSC</Text>
        </View>
        <View style={styles.aboutItem}>
          <View style={styles.line}></View>
          <Text style={styles.aboutTitle}>
            {t('pages.detailCampaign.about.category')}
          </Text>
          <View style={styles.aboutBody}>
            <Image
              source={require('@/assets/images/icons/paloaltosoftware.png')}
            />
          </View>
          <Text style={styles.aboutDesc}>
            {t('pages.detailCampaign.about.software')}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
