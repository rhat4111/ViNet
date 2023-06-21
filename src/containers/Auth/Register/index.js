import React, {useEffect, useState} from 'react';
import {withNavigation} from 'react-navigation';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import TextField from '@/components/TextField';
import styles from './styles';
import PhoneNumberInput from '@/components/PhoneNumberInput';

const Register = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [selectedTab, setSelectedTab] = useState('email');
  let tabs = [
    {id: 'email', label: t('pages.register.index.email')},
    {id: 'phone', label: t('pages.register.index.phone')},
  ];

  const handleChangeEmail = text => {
    setEmail(text);
  };

  const handleChangePhone = text => {
    setPhone(text);
  };

  useEffect(() => {
    setEmail(null);
    setPhone(null);
  }, [selectedTab]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('Login')}>
        <Image source={require('@/assets/images/icons/arrow-left.png')} />
        <Text style={styles.pageTitle}>{t('pages.register.index.title')}</Text>
      </TouchableOpacity>
      <Text style={styles.description}>
        {t('pages.register.index.description')}
      </Text>
      <View style={styles.tabs}>
        {tabs.map(tab => {
          return (
            <TouchableOpacity
              onPress={() => setSelectedTab(tab.id)}
              key={tab.id}
              style={styles.tab}>
              <Text
                style={[
                  styles.tabLabel,
                  selectedTab === tab.id && styles.activeTabLabel,
                ]}>
                {tab.label}
              </Text>
              {selectedTab === tab.id && <View style={styles.underline}></View>}
            </TouchableOpacity>
          );
        })}
      </View>
      <View>
        <View style={{marginBottom: 24}}>
          {selectedTab === 'email' ? (
            <TextField
              placeholder={t('pages.register.index.emailAddress')}
              icon={
                <Image source={require('@/assets/images/icons/email.png')} />
              }
              hasError={false}
              helperText={t('pages.register.index.wrongEmailFormat')}
              value={email}
              handleChange={handleChangeEmail}
            />
          ) : (
            <PhoneNumberInput handleChange={handleChangePhone} />
          )}
        </View>
      </View>
      <View style={styles.footer}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: 320,
            marginBottom: 12,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <Text style={styles.noAccountTxt}>
            {t('pages.register.index.continueText')}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerTxt}>
              {t('pages.register.index.termsOfService')}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() =>
            navigation.navigate('OTP', {
              type: selectedTab,
              email,
              phone,
            })
          }>
          <Text style={styles.continueButtonTxt}>{t('common.continue')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default withNavigation(Register);
