import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: -4,
  },
  item: {
    flex: 1,
    paddingHorizontal: 4,
  },
  bar: {
    height: 8,
    marginBottom: 4,
    borderRadius: 24,
  },
  txt: {
    fontFamily: 'Mulish-Medium',
    fontSize: 12,
    textAlign: 'center',
  },
});
