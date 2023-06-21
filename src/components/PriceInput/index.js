import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {RadioButton, RadioButtonInput} from 'react-native-simple-radio-button';
import {COLORS} from '@/themes';
import styles from './styles';

const TextField = ({
  icon,
  placeholder,
  hasError,
  helperText,
  value,
  label = null,
  handleChange,
  units,
  selectable = true,
}) => {
  const [selectedUnit, setSelectedUnit] = useState(0);
  const handleOpen = () => {
    selectable && this.RBSheet.open();
  };

  return (
    <View>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={styles.labelTxt}>{label}</Text>
        </View>
      )}
      <View
        style={[
          styles.container,
          {borderColor: hasError ? COLORS.DANGER : COLORS.TEXT_INPUT_BORDER},
        ]}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <TextInput
          keyboardType="numeric"
          style={styles.textField}
          placeholderTextColor={COLORS.TEXT_GRAY_3}
          placeholder={placeholder}
          value={value}
          onChangeText={handleChange}
        />
        <TouchableOpacity style={styles.unit} onPress={handleOpen}>
          <Text style={styles.unitTxt}>{units[selectedUnit]}</Text>
          {selectable && (
            <Image source={require('@/assets/images/icons/arrow_down.png')} />
          )}
        </TouchableOpacity>
      </View>
      {hasError && <Text style={styles.helperTxt}>{helperText}</Text>}

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
          {t('pages.createProduct.product.unit')}
        </Text>
        <View style={styles.units}>
          {units.map((unit, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.unitItem}
                onPress={() => setSelectedUnit(index)}>
                <Text style={styles.popupUnitTxt}>{unit}</Text>
                <RadioButton>
                  <RadioButtonInput
                    isSelected={selectedUnit === index}
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
    </View>
  );
};

export default TextField;
