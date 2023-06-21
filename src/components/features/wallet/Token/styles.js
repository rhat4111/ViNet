import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.BG_GRAY_2,
    borderRadius: 16,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  labelTxt: {
    fontFamily: 'Mulish-Bold',
    fontSize: 16,
    color: COLORS.WHITE,
    marginLeft: 8,
  },
});
