import {Dimensions, StyleSheet} from 'react-native';
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
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: -4,
    marginBottom: 16,
  },
  tab: {
    height: 34,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
  },
  chart: {
    width: '100%',
    resizeMode: 'contain',
  },
});
