import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import Modal from 'react-native-modal';
import TextField from '@/components/TextField';
import styles from './styles';
import {COLORS} from '@/themes';

const Information = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}>
        <Image source={require('@/assets/images/icons/arrow-left.png')} />
        <Text style={styles.pageTitle}>
          {t('pages.register.information.title')}
        </Text>
      </TouchableOpacity>
      <Text style={styles.description}>
        {t('pages.register.information.description')}
      </Text>
      <View>
        <View style={{marginBottom: 24}}>
          <TextField
            icon={<Image source={require('@/assets/images/icons/user.png')} />}
            placeholder={t('pages.register.information.displayName')}
          />
        </View>
        <View style={{marginBottom: 24}}>
          <TextField
            type="password"
            icon={<Image source={require('@/assets/images/icons/lock.png')} />}
            placeholder={t('pages.register.information.password')}
          />
        </View>
        <View style={{marginBottom: 24}}>
          <TextField
            type="password"
            icon={<Image source={require('@/assets/images/icons/lock.png')} />}
            placeholder={t('pages.register.information.repassword')}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.continueButton} onPress={handleOpen}>
          <Text style={styles.continueButtonTxt}>
            {t('pages.register.information.completed')}
          </Text>
        </TouchableOpacity>
      </View>

      <Modal isVisible={isOpen} onBackdropPress={handleClose}>
        <View style={styles.modal}>
          <Image source={require('@/assets/images/success.png')} />
          <Text style={styles.modalTitle}>
            {t('pages.register.information.modalTitle')}
          </Text>
          <Text style={styles.modalDesc}>
            {t('pages.register.information.modalDesc')}
          </Text>
          <View style={styles.modalToolbar}>
            <TouchableOpacity
              onPress={handleClose}
              style={[
                styles.modalButton,
                {borderWidth: 1, borderColor: COLORS.WHITE},
              ]}>
              <Text style={[styles.modalButtonTxt, {color: COLORS.WHITE}]}>
                {t('pages.register.information.confirm')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleClose}
              style={[styles.modalButton, {backgroundColor: COLORS.WARNING}]}>
              <Text
                style={[styles.modalButtonTxt, {color: COLORS.LOGIN_BUTTON}]}>
                {t('pages.register.information.cancel')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default withNavigation(Information);
