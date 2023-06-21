import React, { useState } from 'react';
import { withNavigation } from 'react-navigation';
import OtpInputs from 'react-native-otp-inputs';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const OTP = ({ navigation }) => {
  const [otp, setOTP] = useState('');
  const getOtp = otp => {
    setOTP(otp);
  };
  const [isResend, setIsResend] = useState(false);
  const [timer, setTimer] = useState(60);
  const handleResendCode = () => {
    setIsResend(true);

    const timerInterval = setInterval(() => {
      setTimer(timer => timer - 1);
      console.log(timer);
    }, 1000);

    const endTimeOut = setTimeout(() => {
      setIsResend(false);
      setTimer(60);
      clearInterval(timerInterval);
      clearTimeout(endTimeOut);
    }, 60000);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('Register')}>
        <Image source={require('@/assets/images/icons/arrow-left.png')} />
        <Text style={styles.pageTitle}>{t('pages.register.otp.title')}</Text>
      </TouchableOpacity>
      <View style={styles.description}>
        <Text style={styles.descriptionTxt}>
          {t('pages.register.otp.description')}
        </Text>
        <Text style={styles.emailTxt}>
          {navigation.getParam('email')} {navigation.getParam('phone')}
        </Text>
      </View>
      <View style={styles.otp}>
        <OtpInputs
          style={styles.OTPContainerStyles}
          inputStyles={styles.OTPInputStyles}
          handleChange={code => console.log(code)}
          numberOfInputs={4}
        />
        <View>
          {isResend ? (
            <Text style={styles.timerTxt}>
              {t('pages.register.otp.resend')} {timer}{' '}
              {t('pages.register.otp.second')}
            </Text>
          ) : (
            <View style={styles.resendContainer}>
              <Text style={styles.notReceivedTxt}>
                {t('pages.register.otp.notReceivedCode')}
              </Text>
              <TouchableOpacity onPress={handleResendCode}>
                <Text style={styles.resendTxt}>
                  {t('pages.register.otp.resend')}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('AccountInformation')}>
          <Text style={styles.continueButtonTxt}>{t('common.continue')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default withNavigation(OTP);
