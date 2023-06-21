import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  introduceOverview: {
    paddingVertical: 40,
  },
  avatar: {
    width: '100%',
    borderRadius: 12,
    marginBottom: 40,
  },
  titleTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 18,
    color: COLORS.WHITE,
    marginBottom: 16,
  },
  descTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: COLORS.TEXT_GRAY_1,
    marginBottom: 12,
  },
  moreBtn: {
    alignSelf: 'flex-end',
  },
  moreBtnTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 12,
    color: COLORS.WARNING,
  },
});
