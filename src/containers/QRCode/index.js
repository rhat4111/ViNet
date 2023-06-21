import React, {useState} from 'react';
import {withNavigation} from 'react-navigation';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import styles from './styles';
import {t} from 'i18next';

const QRCode = ({navigation}) => {
  const [isFlash, setIsFlash] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState({
    title: t('pages.qrcode.modal.success.title'),
    description: t('pages.qrcode.modal.success.description'),
    image: <Image source={require('@/assets/images/qrcode/success.png')} />,
  });
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSuccess = () => {
    setIsOpen(true);
    setModal({
      title: t('pages.qrcode.modal.success.title'),
      description: t('pages.qrcode.modal.success.description'),
      image: <Image source={require('@/assets/images/qrcode/success.png')} />,
    });
  };

  const handleError = () => {
    setIsOpen(true);
    setModal({
      title: t('pages.qrcode.modal.error.title'),
      description: t('pages.qrcode.modal.error.description'),
      image: <Image source={require('@/assets/images/qrcode/error.png')} />,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Home')}>
          <Image source={require('@/assets/images/icons/arrow-left.png')} />
          <Text style={styles.pageTitle}>{t('pages.qrcode.title')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.flashIcon}
          onPress={() => setIsFlash(!isFlash)}>
          {isFlash ? (
            <Image source={require('@/assets/images/icons/flash_filled.png')} />
          ) : (
            <Image
              source={require('@/assets/images/icons/flash_outline.png')}
            />
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.toCenterTxt}>{t('pages.qrcode.toCenter')}</Text>
      <View style={styles.footer}>
        <View style={styles.qrScanResult}>
          <View style={styles.detailInfo}>
            <Image
              source={require('@/assets/images/qr_scan_product.png')}
              style={styles.detailAvatar}
            />
            <View>
              <Text style={styles.downloadTxt}>
                {t('pages.qrcode.download')}
              </Text>
              <Text style={styles.photoLibTxt}>
                {t('pages.qrcode.photoLib')}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.uploadButton}>
            <Image source={require('@/assets/images/icons/upload.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <Image source={require('@/assets/images/icons/info_circle.png')} />
          <Text style={styles.infoTxt}>{t('pages.qrcode.info')}</Text>
        </View>
      </View>
      <QRCodeScanner
        onRead={handleSuccess}
        containerStyle={styles.cameraContainerStyle}
        showMarker={true}
        customMarker={
          <Image
            source={require('@/assets/images/frame.png')}
            style={styles.frame}
          />
        }
        cameraStyle={styles.cameraStyle}
        flashMode={RNCamera.Constants.FlashMode.torch}
      />
      <Modal isVisible={isOpen} onBackdropPress={handleClose}>
        <View style={styles.modal}>
          {modal.image}
          <Text style={styles.modalTitle}>{modal.title}</Text>
          <Text style={styles.modalDesc}>{modal.description}</Text>
          <TouchableOpacity onPress={handleClose} style={styles.modalButton}>
            <Text style={styles.modalButtonTxt}>
              {t('pages.qrcode.confirm')}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default withNavigation(QRCode);
