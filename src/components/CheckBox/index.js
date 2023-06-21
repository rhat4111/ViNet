import React, {useState} from 'react';
import {Image, View} from 'react-native';
import RNCheckBox from 'react-native-check-box';
import styles from './styles';

const CheckBox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <RNCheckBox
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
    </View>
  );
};

export default CheckBox;
