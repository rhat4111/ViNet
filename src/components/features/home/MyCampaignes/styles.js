import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 20,
    color: COLORS.WHITE,
  },
  campaignCard: {
    marginBottom: 32,
  },
});
