import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    marginBottom: 40,
    backgroundColor: COLORS.BG_GRAY_7,
    borderRadius: 16,
    padding: 12,
    paddingBottom: 0,
  },
  title: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
    color: COLORS.WHITE,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BG_GRAY_8,
  },
  name: {
    fontFamily: 'Mulish-Medium',
    fontSize: 14,
    color: COLORS.TEXT_GRAY_2,
  },
  value: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: COLORS.TEXT_GRAY_1,
  },
  vref: {
    width: 100,
    height: 28,
    backgroundColor: COLORS.PURPLE,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vrefTxt: {
    marginLeft: 8,
    fontFamily: 'Mulish-Bold',
    fontSize: 12,
    color: COLORS.WHITE,
  },
});
