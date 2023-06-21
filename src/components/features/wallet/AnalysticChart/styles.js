import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  title: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 18,
    color: COLORS.WHITE,
    marginBottom: 24,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tab: {
    minWidth: 90,
    height: 34,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabTxt: {
    fontFamily: 'Mulish-Medium',
    fontSize: 14,
  },
});
