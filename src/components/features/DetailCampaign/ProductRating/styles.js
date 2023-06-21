import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  overview: {
    paddingLeft: 12,
    paddingRight: 40,
    borderRightColor: COLORS.BORDER_POPUP,
    borderRightWidth: 1,
  },
  txt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.TEXT_GRAY_1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  progressBar: {
    minWidth: 160,
    height: 6,
    borderRadius: 8,
    backgroundColor: COLORS.BORDER_POPUP,
    overflow: 'hidden',
  },
  progress: {
    height: 6,
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
  },
  value: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: COLORS.WHITE,
  },
  star: {
    marginLeft: 2,
    marginRight: 8,
  },
});
