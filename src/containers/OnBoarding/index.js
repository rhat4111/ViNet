import React, {useState} from 'react';
import {withNavigation} from 'react-navigation';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {Button} from 'react-native-elements';
import styles from './styles';
import {COLORS} from '@/themes';
import {t} from 'i18next';

const Square = ({selected}) => {
  return (
    <View
      style={{
        width: selected ? 20 : 4,
        backgroundColor: selected ? COLORS.BG_GRAY_6 : COLORS.BG_GRAY_1,
        height: 4,
        borderRadius: 8,
        marginHorizontal: 2,
      }}
    />
  );
};

const Next = props => (
  <Button
    title={t('pages.onboarding.continue')}
    buttonStyle={{
      width: 120,
      height: 48,
      borderRadius: 12,
      backgroundColor: COLORS.WARNING,
      marginHorizontal: 24,
    }}
    titleStyle={{
      fontFamily: 'Mulish-SemiBold',
      fontSize: 16,
      color: COLORS.SECONDARY,
    }}
    {...props}
  />
);

const Skip = props => (
  <Button
    title={t('pages.onboarding.skip')}
    buttonStyle={{backgroundColor: COLORS.TRANSPARENT, marginHorizontal: 24}}
    titleStyle={{
      fontFamily: 'Mulish-SemiBold',
      fontSize: 16,
      color: COLORS.TEXT_GRAY_2,
    }}
    {...props}
  />
);

const Done = props => (
  <Button
    title={t('pages.onboarding.join')}
    buttonStyle={{
      width: 140,
      height: 48,
      borderRadius: 12,
      backgroundColor: COLORS.WARNING,
      marginHorizontal: 24,
    }}
    titleStyle={{
      fontFamily: 'Mulish-SemiBold',
      fontSize: 16,
      color: COLORS.SECONDARY,
    }}
    {...props}
  />
);

const OnBoarding = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Onboarding
          pages={[
            {
              backgroundColor: COLORS.BG_GRAY_2,
              image: (
                <Image source={require('@/assets/images/onboard/1.png')} />
              ),
              title: t('pages.onboarding.pages.title1'),
              subtitle: t('pages.onboarding.pages.subtitle1'),
            },
            {
              backgroundColor: COLORS.BG_GRAY_2,
              image: (
                <Image source={require('@/assets/images/onboard/2.png')} />
              ),
              title: t('pages.onboarding.pages.title2'),
              subtitle: t('pages.onboarding.pages.subtitle2'),
            },
            {
              backgroundColor: COLORS.BG_GRAY_2,
              image: (
                <Image source={require('@/assets/images/onboard/3.png')} />
              ),
              title: t('pages.onboarding.pages.title3'),
              subtitle: t('pages.onboarding.pages.subtitle3'),
            },
          ]}
          DotComponent={Square}
          SkipButtonComponent={Skip}
          NextButtonComponent={Next}
          DoneButtonComponent={Done}
          bottomBarHeight={112}
          containerStyles={{
            height: 400,
            justifyContent: 'flex-start',
          }}
          titleStyles={{
            fontFamily: 'Mulish-Bold',
            color: COLORS.WHITE,
            marginBottom: 24,
          }}
          subTitleStyles={{
            fontFamily: 'Mulish-Regular',
            fontSize: 16,
            lineHeight: 24,
          }}
          onDone={() => navigation.navigate('Login')}
        />
      </View>
    </ScrollView>
  );
};

export default withNavigation(OnBoarding);
