import React, {useState} from 'react';
import {Image, View} from 'react-native';
import CountryPicker from 'react-native-region-country-picker';
import TextField from '@/components/TextField';
import styles from './styles';

const PhoneNumberInput = ({placeholder, handleChange}) => {
  const [countryCode, setCountryCode] = useState('84');
  const [phone, setPhone] = useState('');
  const handleChangeCountryCode = index => {
    handleChange(`+${countryCode} ${phone}`);
    setCountryCode(index);
  };

  const handleChangePhoneNumber = text => {
    setPhone(text);
    handleChange(`+${countryCode} ${text}`);
  };

  let countryPickerRef = undefined;
  countryPickerRef.open();
  countryPickerRef.close();

  return (
    <View style={styles.container}>
      <CountryPicker
        countryPickerRef={ref => {
          countryPickerRef = ref;
        }}
        enable={true}
        darkMode={false}
        countryCode={'US'}
        containerConfig={{
          showFlag: true,
          showCallingCode: true,
          showCountryName: true,
          showCountryCode: true,
        }}
        modalConfig={{
          showFlag: true,
          showCallingCode: true,
          showCountryName: true,
          showCountryCode: true,
        }}
        onSelectCountry={data => {
          console.log('DATA', data);
        }}
        onInit={data => {
          console.log('DATA', data);
        }}
        onOpen={() => {
          console.log('Open');
        }}
        onClose={() => {
          console.log('Close');
        }}
        containerStyle={{
          container: {},
          flagStyle: {},
          callingCodeStyle: {},
          countryCodeStyle: {},
          countryNameStyle: {},
        }}
        modalStyle={{
          container: {},
          searchStyle: {},
          tileStyle: {},
          itemStyle: {
            itemContainer: {},
            flagStyle: {},
            countryCodeStyle: {},
            countryNameStyle: {},
            callingNameStyle: {},
          },
        }}
        title={'Country'}
        searchPlaceholder={'Search'}
        showCloseButton={true}
        showModalTitle={true}
      />
      ;
      <View style={{flex: 1}}>
        <TextField
          type="number"
          handleChange={handleChangePhoneNumber}
          icon={<Image source={require('@/assets/images/icons/phone.png')} />}
          placeholder={placeholder || t('components.phoneNumberInput.phone')}
        />
      </View>
    </View>
  );
};

export default PhoneNumberInput;
