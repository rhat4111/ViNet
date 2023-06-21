import React, {useState} from 'react';
import {withNavigation} from 'react-navigation';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {RadioButton, RadioButtonInput} from 'react-native-simple-radio-button';
import ProductRating from '../../components/features/DetailCampaign/ProductRating';
import ProductReview from '../../components/features/DetailCampaign/ProductReview';
import {COLORS} from '@/themes';
import styles from './styles';

const CampaignRating = ({navigation}) => {
  const [sortBy, setSortBy] = useState('latest');
  const units = [
    {id: 'latest', label: t('pages.campaignRating.latest')},
    {id: 'oldest', label: t('pages.campaignRating.oldest')},
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate('Home')}>
          <Image source={require('@/assets/images/icons/arrow-left.png')} />
          <Text style={styles.pageTitle}>
            {t('pages.campaignRating.allReview')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('WriteRating')}>
          <Text style={styles.writeReview}>
            {t('pages.campaignRating.writeReview')}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 24}}>
        <ProductRating />
      </View>
      <TouchableOpacity
        style={styles.sortBtn}
        onPress={() => this.RBSheet.open()}>
        <Image source={require('@/assets/images/icons/filter.png')} />
        <Text style={styles.sortTxt}>
          {sortBy === 'latest'
            ? t('pages.campaignRating.latest')
            : t('pages.campaignRating.oldest')}
        </Text>
      </TouchableOpacity>
      {Array.from(Array(6).keys()).map(item => {
        return (
          <View key={item}>
            <ProductReview />
            <View style={styles.leaveComment}>
              <Image source={require('@/assets/images/gs-logo.png')} />
              <TextInput
                style={styles.leaveInput}
                placeholder="Phản hồi bình luận"
                placeholderTextColor={COLORS.TEXT_PLACEHOLDER}
              />
            </View>
          </View>
        );
      })}
      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        openDuration={250}
        closeOnDragDown={true}
        customStyles={{
          container: styles.popup,
          draggableIcon: styles.draggableIcon,
        }}>
        <Text style={styles.popupTitle}>
          {t('pages.campaignRating.sortby')}
        </Text>
        <View style={styles.units}>
          {units.map(unit => {
            return (
              <TouchableOpacity
                key={unit.id}
                style={styles.unitItem}
                onPress={() => setSortBy(unit.id)}>
                <Text style={styles.popupUnitTxt}>{unit.label}</Text>
                <RadioButton>
                  <RadioButtonInput
                    isSelected={sortBy === unit.id}
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
      </RBSheet>
    </ScrollView>
  );
};

export default withNavigation(CampaignRating);
