import React, {useState} from 'react';
import {withNavigation} from 'react-navigation';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {RadioButton, RadioButtonInput} from 'react-native-simple-radio-button';
import {COLORS} from '@/themes';
import styles from './styles';

const Lang = ({navigation}) => {
  const [selectedLang, setSelectedLang] = useState('vn');
  const langs = [
    {
      id: 'vn',
      label: 'Tiếng Việt',
      icon: require('@/assets/images/flags/vn.png'),
    },
    {
      id: 'en',
      label: 'English',
      icon: require('@/assets/images/flags/en.png'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('Setting')}>
        <Image source={require('@/assets/images/icons/arrow-left.png')} />
        <Text style={styles.pageTitle}>
          {t('pages.setting.language.language')}
        </Text>
      </TouchableOpacity>
      <View style={styles.body}>
        {langs.map(lang => {
          return (
            <TouchableOpacity
              key={lang.id}
              style={styles.langItem}
              onPress={() => setSelectedLang(lang.id)}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={lang.icon} />
                <Text style={styles.langTxt}>{lang.label}</Text>
              </View>
              <RadioButton>
                <RadioButtonInput
                  isSelected={selectedLang === lang.id}
                  borderWidth={1}
                  buttonInnerColor={COLORS.BG_RADIO}
                  buttonOuterColor={COLORS.BG_RADIO}
                  buttonSize={16}
                  buttonOuterSize={20}
                  buttonStyle={{}}
                />
              </RadioButton>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default withNavigation(Lang);
