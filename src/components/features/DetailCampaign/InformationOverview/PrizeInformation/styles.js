import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  title: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 18,
    color: COLORS.WHITE,
    marginBottom: 16,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 8,
    backgroundColor: COLORS.TEXT_GRAY_1,
    marginHorizontal: 10,
    marginTop: 10
  },
  text: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    lineHeight: 24,
    color: COLORS.TEXT_GRAY_1,
  },
  warningTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
    lineHeight: 24,
    color: COLORS.WARNING,
  },
});
