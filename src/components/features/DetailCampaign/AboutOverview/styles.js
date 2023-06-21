import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  aboutOverview: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: COLORS.BORDER_POPUP,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER_POPUP,
    paddingVertical: 24,
  },
  aboutItem: {
    minWidth: 148,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  aboutTitle: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 12,
    color: COLORS.TEXT_GRAY_2,
  },
  aboutValue: {
    fontFamily: 'Mulish-Bold',
    fontSize: 20,
    color: COLORS.TEXT_GRAY_1,
  },
  aboutBody: {
    paddingVertical: 8,
  },
  aboutDesc: {
    fontFamily: 'Mulish-Medium',
    fontSize: 14,
    color: COLORS.TEXT_GRAY_2,
  },
  line: {
    width: 1,
    height: 48,
    backgroundColor: COLORS.BORDER_POPUP,
    position: 'absolute',
    top: 16,
    right: 0,
  },
});
