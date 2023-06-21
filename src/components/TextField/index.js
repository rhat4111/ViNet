import React, {useEffect, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {COLORS} from '@/themes';

const TextField = ({
  type = 'text',
  icon,
  align = 'left',
  placeholder,
  hasError,
  helperText,
  value,
  trackLength = false,
  label = null,
  handleChange,
  clearable = false,
  maxLength = null,
  multiline = false,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(type == 'password');
  return (
    <View>
      {(label || trackLength) && (
        <View style={styles.labelContainer}>
          {label && <Text style={styles.labelTxt}>{label}</Text>}
          {trackLength && (
            <Text style={styles.trackTxt}>{maxLength - value.length}</Text>
          )}
        </View>
      )}
      <View
        style={[
          styles.container,
          {borderColor: hasError ? COLORS.DANGER : COLORS.TEXT_INPUT_BORDER},
          {height: multiline ? 128 : 48},
        ]}>
        {icon && align === 'left' && (
          <View style={styles.iconContainer}>{icon}</View>
        )}
        <TextInput
          keyboardType={type === 'number' ? 'numeric' : 'default'}
          style={[
            styles.textField,
            {
              paddingRight: value !== '' && clearable ? 50 : 20,
              textAlignVertical: multiline ? 'top' : 'center',
            },
          ]}
          secureTextEntry={isShowPassword}
          placeholderTextColor={COLORS.TEXT_GRAY_3}
          placeholder={placeholder}
          value={value}
          onChangeText={handleChange}
          maxLength={maxLength}
          multiline={multiline}
          numberOfLines={5}
        />
        {icon && align === 'right' && (
          <View style={styles.iconContainer}>{icon}</View>
        )}
        {type === 'password' && (
          <TouchableOpacity
            style={styles.statusShowPassword}
            onPress={() => setIsShowPassword(!isShowPassword)}>
            <Text style={styles.statusShowPasswordTxt}>
              {isShowPassword
                ? t('components.textField.show')
                : t('components.textField.hide')}
            </Text>
          </TouchableOpacity>
        )}
        {clearable && value !== '' && (
          <TouchableOpacity
            onPress={() => handleChange('')}
            style={styles.clearButton}>
            <Image source={require('@/assets/images/icons/clear.png')} />
          </TouchableOpacity>
        )}
      </View>
      {hasError && <Text style={styles.helperTxt}>{helperText}</Text>}
    </View>
  );
};

export default TextField;
