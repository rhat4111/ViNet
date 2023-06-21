import React, {useState} from 'react';
import {withNavigation} from 'react-navigation';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import OtpInputs from 'react-native-otp-inputs';
import Modal from 'react-native-modal';
import styles from './styles';
import {COLORS} from '@/themes';
import {t} from 'i18next';

const Security = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [hasPasscode, setHasPasscode] = useState(false);
  const [pStep, setPStep] = useState(1);
  const handleClose = () => {
    setIsOpen(false);
    navigation.navigate('Setting');
  };
  const handleToggle = value => {
    setStep(3);
    setHasPasscode(value);
  };

  const handleBack = () => {
    pStep === 1 ? setStep(2) : setPStep(pStep - 1);
  };
  const handleNext = () => {
    console.log('dddd');
    if (hasPasscode) {
      pStep < 3 ? setPStep(pStep + 1) : setIsOpen(true);
    } else {
      pStep === 2 ? setIsOpen(true) : setPStep(2);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {step === 1 && (
          <>
            <TouchableOpacity
              style={styles.header}
              onPress={() => navigation.navigate('Setting')}>
              <Image source={require('@/assets/images/icons/arrow-left.png')} />
              <Text style={styles.pageTitle}>
                {t('pages.setting.security.security')}
              </Text>
            </TouchableOpacity>
            <View style={styles.body}>
              <TouchableOpacity
                onPress={() => setStep(2)}
                style={styles.redirectBtnToSetPasscodePage}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('@/assets/images/icons/password.png')}
                  />
                  <Text style={styles.setPasscodeTxt}>
                    {t('pages.setting.security.setPasscode')}
                  </Text>
                </View>
                <Image
                  source={require('@/assets/images/icons/arrow_right.png')}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
        {step === 2 && (
          <>
            <TouchableOpacity style={styles.header} onPress={() => setStep(1)}>
              <Image source={require('@/assets/images/icons/arrow-left.png')} />
              <Text style={styles.pageTitle}>
                {t('pages.setting.security.setPasscode')}
              </Text>
            </TouchableOpacity>
            <View style={styles.body}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.shortSetPasscodeTxt}>
                  {t('pages.setting.security.shortSetPasscode')}
                </Text>
                <ToggleSwitch
                  isOn={hasPasscode}
                  onColor={COLORS.BG_TOGGLE_ON}
                  offColor={COLORS.BG_TOGGLE_OFF}
                  onToggle={isOn => handleToggle(isOn)}
                />
              </View>
              {hasPasscode && (
                <TouchableOpacity
                  style={styles.updateButton}
                  onPress={() => setStep(3)}>
                  <Text style={styles.updateBtnTxt}>
                    {t('pages.setting.security.updateCode')}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </>
        )}
        {step === 3 && (
          <>
            <TouchableOpacity style={styles.header} onPress={handleBack}>
              <Image source={require('@/assets/images/icons/arrow-left.png')} />
              <Text style={styles.pageTitle}>
                {!hasPasscode ? (
                  <>
                    {pStep === 1
                      ? t('pages.setting.security.enterCode')
                      : t('pages.setting.security.reenterCode')}
                  </>
                ) : (
                  <>
                    {pStep === 1 &&
                      t('pages.setting.security.enterCurrentCode')}
                    {pStep === 2 && t('pages.setting.security.enterNewCode')}
                    {pStep === 3 && t('pages.setting.security.reenterNewCode')}
                  </>
                )}
              </Text>
            </TouchableOpacity>
            <View style={styles.body}>
              <OtpInputs
                style={styles.OTPContainerStyles}
                inputStyles={styles.OTPInputStyles}
                handleChange={code => console.log(code)}
                numberOfInputs={4}
              />
            </View>
          </>
        )}
        {step === 3 && (
          <TouchableOpacity style={styles.buttonStyle} onPress={handleNext}>
            <Text style={styles.buttonTxtStyle}>
              {(hasPasscode && pStep === 3) || (pStep === 2 && !hasPasscode)
                ? t('pages.setting.security.complete')
                : t('pages.setting.security.continue')}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <Modal isVisible={isOpen} onBackdropPress={handleClose}>
        <View style={styles.modal}>
          <Image
            source={require('@/assets/images/success_changed_password.png')}
          />
          <Text style={styles.modalTitle}>
            {t('pages.setting.security.modal.title')}
          </Text>
          <Text style={styles.modalDesc}>
            {t('pages.setting.security.modal.desc')}
          </Text>
          <TouchableOpacity onPress={handleClose} style={styles.modalButton}>
            <Text style={styles.modalButtonTxt}>
              {t('pages.setting.security.modal.button')}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default withNavigation(Security);
