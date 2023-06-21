import React, {useState} from 'react';
import {withNavigation} from 'react-navigation';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import TextField from '@/components/TextField';
import styles from './styles';

const Account = ({navigation}) => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  const handleBack = () => {
    step === 1 ? navigation.navigate('Setting') : setStep(1);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.header} onPress={handleBack}>
          <Image source={require('@/assets/images/icons/arrow-left.png')} />
          {step === 1 ? (
            <Text style={styles.pageTitle}>
              {t('pages.setting.account.setting')}
            </Text>
          ) : (
            <Text style={styles.pageTitle}>
              {t('pages.setting.account.changePassword')}
            </Text>
          )}
        </TouchableOpacity>
        {step === 1 ? (
          <View style={styles.body}>
            <View style={{marginBottom: 24}}>
              <TextField
                label={t('pages.setting.account.name')}
                placeholder="Nguyễn Thị Thuý Quỳnh"
              />
            </View>
            <View style={{marginBottom: 24}}>
              <TextField
                label={t('pages.setting.account.email')}
                placeholder="thuyquynhng@gmail.com"
              />
            </View>
            <View style={{marginBottom: 24}}>
              <TextField
                type="number"
                label={t('pages.setting.account.phone')}
                placeholder="013452689"
              />
            </View>
            <TouchableOpacity
              style={styles.changePasswordBtn}
              onPress={() => setStep(2)}>
              <Text style={styles.changePasswordTxt}>
                {t('pages.setting.account.changePassword')}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.body}>
            <View style={{marginBottom: 24}}>
              <TextField
                type="password"
                label={t('pages.setting.account.currentPassword')}
                placeholder={t('pages.setting.account.currentPwdPlaceholder')}
              />
            </View>
            <View style={{marginBottom: 24}}>
              <TextField
                type="password"
                label={t('pages.setting.account.newPassword')}
                placeholder={t('pages.setting.account.newPwdPlaceholder')}
              />
              <View style={styles.notMatchContainer}>
                <Image source={require('@/assets/images/icons/info.png')} />
                <Text style={styles.notMatchPwds}>
                  {t('pages.setting.account.notMatchPwds')}
                </Text>
              </View>
            </View>
            <View style={{marginBottom: 24}}>
              <TextField
                type="password"
                label={t('pages.setting.account.repeatNewPassword')}
                placeholder={t('pages.setting.account.repeatNewPwdPlaceholder')}
              />
            </View>
          </View>
        )}
        {step === 1 && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Setting')}>
            <Text style={styles.buttonTxt}>
              {t('pages.setting.account.save')}
            </Text>
          </TouchableOpacity>
        )}
        {step === 2 && (
          <TouchableOpacity style={styles.button} onPress={handleOpen}>
            <Text style={styles.buttonTxt}>
              {t('pages.setting.account.update')}
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
            {t('pages.setting.account.modal.title')}
          </Text>
          <Text style={styles.modalDesc}>
            {t('pages.setting.account.modal.desc')}
          </Text>
          <TouchableOpacity onPress={handleClose} style={styles.modalButton}>
            <Text style={styles.modalButtonTxt}>
              {t('pages.setting.account.modal.button')}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default withNavigation(Account);
