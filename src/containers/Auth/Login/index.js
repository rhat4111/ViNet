import React, {useState} from 'react';
import {withNavigation} from 'react-navigation';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import TextField from '@/components/TextField';
import styles from './styles';
import PhoneNumberInput from '@/components/PhoneNumberInput';

const Login = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('email');
  let tabs = [
    {id: 'email', label: t('pages.login.email')},
    {id: 'phone', label: t('pages.login.phone')},
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header}>
        <Image source={require('@/assets/images/icons/arrow-left.png')} />
        <Text style={styles.pageTitle}>{t('pages.login.title')}</Text>
      </TouchableOpacity>
      <Text style={styles.description}>{t('pages.login.description')}</Text>
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
              placeholder={t('pages.login.emailAddress')}
              icon={
                <Image source={require('@/assets/images/icons/email.png')} />
              }
              hasError={false}
              helperText={t('pages.login.wrongEmailFormat')}
            />
          ) : (
            <PhoneNumberInput />
          )}
        </View>
        <View style={{marginBottom: 16}}>
          <TextField
            type="password"
            placeholder={t('pages.login.password')}
            icon={<Image source={require('@/assets/images/icons/lock.png')} />}
            hasError={false}
            helperText={t('pages.login.wrongPassword')}
          />
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>
              {t('pages.login.forgotPassword')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginButtonTxt}>{t('pages.login.title')}</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.noAccountTxt}>{t('pages.login.noAccount')}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerTxt}>{t('pages.login.register')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default withNavigation(Login);
