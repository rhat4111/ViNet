import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    marginBottom: 8
  },
  title: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 18,
    color: COLORS.WHITE,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER_POPUP,
  },
  name: {
    fontFamily: 'Mulish-Medium',
    fontSize: 14,
    color: COLORS.TEXT_GRAY_2,
  },
  value: {
    fontFamily: 'Mulish-Medium',
    fontSize: 14,
    color: COLORS.WHITE,
  },
});
