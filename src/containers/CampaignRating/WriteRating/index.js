import React, {useState} from 'react';
import {withNavigation} from 'react-navigation';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Rating from '@/components/Rating';
import CheckBox from 'react-native-check-box';
import Modal from 'react-native-modal';
import TextField from '@/components/TextField';
import {COLORS} from '@/themes';
import styles from './styles';
import {t} from 'i18next';

const WriteRating = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.navigate('CampaignRating')}>
          <Image source={require('@/assets/images/icons/arrow-left.png')} />
          <Text style={styles.pageTitle}>
            {t('pages.campaignRating.writeRating.title')}
          </Text>
        </TouchableOpacity>
        <View style={styles.rating}>
          <Rating rating={3} />
        </View>
        <View style={{marginBottom: 24}}>
          <TextField
            placeholder={t('pages.campaignRating.writeRating.review.title')}
          />
        </View>
        <View style={{marginBottom: 8}}>
          <TextField
            placeholder={t(
              'pages.campaignRating.writeRating.review.description',
            )}
            multiline={true}
            style={{height: 400}}
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('@/assets/images/icons/info.png')} />
          <Text style={styles.tip}>
            {t('pages.campaignRating.writeRating.review.tip')}
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.policy}>
            <CheckBox
              onClick={() => setChecked(!checked)}
              isChecked={checked}
              checkedImage={
                <Image
                  source={require('@/assets/images/icons/checked_checkbox.png')}
                />
              }
              unCheckedImage={
                <Image
                  source={require('@/assets/images/icons/unchecked_checkbox.png')}
                />
              }
            />
            <Text style={styles.policyTxt}>
              Tôi hoàn toàn đồng ý với các{' '}
              <Text style={{color: COLORS.WARNING}}>Điều khoản sử dụng</Text>{' '}
              của ViRef. Tôi hoàn toàn chịu trách nhiệm về nội dung đánh giá do
              mình cung cấp.
            </Text>
          </View>
          <TouchableOpacity style={styles.submitBtn} onPress={handleOpen}>
            <Text style={styles.submitTxt}>
              {t('pages.campaignRating.writeRating.review.submit')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal isVisible={isOpen} onBackdropPress={handleClose}>
        <View style={styles.modal}>
          <Image source={require('@/assets/images/success.png')} />
          <Text style={styles.modalTitle}>
            {t('pages.campaignRating.writeRating.modal.title')}
          </Text>
          <Text style={styles.modalDesc}>
            {t('pages.campaignRating.writeRating.modal.desc')}
          </Text>
          <View style={styles.modalToolbar}>
            <TouchableOpacity
              onPress={handleClose}
              style={[
                styles.modalButton,
                {borderWidth: 1, borderColor: COLORS.WHITE},
              ]}>
              <Text style={[styles.modalButtonTxt, {color: COLORS.WHITE}]}>
                {t('pages.campaignRating.writeRating.modal.confirm')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleClose}
              style={[styles.modalButton, {backgroundColor: COLORS.WARNING}]}>
              <Text
                style={[styles.modalButtonTxt, {color: COLORS.LOGIN_BUTTON}]}>
                {t('pages.campaignRating.writeRating.modal.cancel')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default withNavigation(WriteRating);
