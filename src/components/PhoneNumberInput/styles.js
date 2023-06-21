import { StyleSheet } from 'react-native';
import { COLORS } from '@/themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  pickerStyle: {
    height: 48,
    backgroundColor: COLORS.BG_GRAY_2,
    borderWidth: 1,
    borderColor: COLORS.TEXT_INPUT_BORDER,
    marginRight: 8,
    borderRadius: 12,
    paddingLeft: 12,
    paddingRight: 0,
    justifyContent: 'center',
  },
  selectedCountryTextStyle: {
    marginLeft: 8,
    fontFamily: 'Mulish-Regular',
    fontSize: 16,
    color: COLORS.WHITE,
  },
  countryNameTextStyle: {
    backgroundColor: '#000'
  }
});
