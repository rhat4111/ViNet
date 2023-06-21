import React, {useState} from 'react';
import {withNavigation} from 'react-navigation';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import {COLORS} from '@/themes';

const Setting = ({navigation}) => {
  const [name, setName] = useState('Nguyễn Thị Thuý Quỳnh');
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  const menu = [
    {
      id: 'account',
      name: t('pages.setting.index.account'),
      icon: require('@/assets/images/icons/account.png'),
      action: () => navigation.navigate('AccountSetting'),
      arrow: true,
    },
    {
      id: 'language',
      name: t('pages.setting.index.language'),
      icon: require('@/assets/images/icons/language.png'),
      action: () => navigation.navigate('LangSetting'),
      arrow: true,
    },
    {
      id: 'notification',
      name: t('pages.setting.index.notification'),
      icon: require('@/assets/images/icons/notification.png'),
      action: () => navigation.navigate('NotificationSetting'),
      arrow: true,
    },
    {
      id: 'security',
      name: t('pages.setting.index.security'),
      icon: require('@/assets/images/icons/security.png'),
      action: () => navigation.navigate('SecuritySetting'),
      arrow: true,
    },
    {
      id: 'logout',
      name: t('pages.setting.index.logout'),
      icon: require('@/assets/images/icons/logout.png'),
      action: handleOpen,
      arrow: false,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>{t('pages.setting.index.title')}</Text>
        <View style={styles.avatarContainer}>
          <Image source={require('@/assets/images/profile_avatar.png')} />
          <TouchableOpacity style={styles.cameraBtn}>
            <Image source={require('@/assets/images/icons/camera.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.nameTxt}>{name}</Text>
      </View>
      <View style={styles.body}>
        {menu.map(item => {
          return (
            <TouchableOpacity style={styles.menuItem} onPress={item.action}>
              <View style={styles.menuNameContainer}>
                <Image source={item.icon} />
                <Text
                  style={[
                    styles.menuTxt,
                    {
                      color:
                        item.id === 'logout' ? COLORS.DANGER : COLORS.WHITE,
                    },
                  ]}>
                  {item.name}
                </Text>
              </View>
              {item.arrow && (
                <Image
                  source={require('@/assets/images/icons/arrow_right.png')}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
      <Modal isVisible={isOpen} onBackdropPress={handleClose}>
        <View style={styles.modal}>
          <Image source={require('@/assets/images/success.png')} />
          <Text style={styles.modalTitle}>
            {t('pages.setting.index.modal.title')}
          </Text>
          <Text style={styles.modalDesc}>
            {t('pages.setting.index.modal.desc')}
          </Text>
          <View style={styles.modalToolbar}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={[
                styles.modalButton,
                {borderWidth: 1, borderColor: COLORS.WHITE},
              ]}>
              <Text style={[styles.modalButtonTxt, {color: COLORS.WHITE}]}>
                {t('pages.setting.index.modal.confirm')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleClose}
              style={[styles.modalButton, {backgroundColor: COLORS.WARNING}]}>
              <Text
                style={[styles.modalButtonTxt, {color: COLORS.LOGIN_BUTTON}]}>
                {t('pages.setting.index.modal.cancel')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default withNavigation(Setting);
