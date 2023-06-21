import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  gsOverview: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  gsTitle: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: COLORS.WHITE,
    marginTop: 16,
    marginBottom: 8,
    maxWidth: 280,
    textAlign: 'center',
  },
  gsDesc: {
    fontFamily: 'Mulish-Medium',
    fontSize: 14,
    color: COLORS.BROWN,
    marginBottom: 24,
  },
  gsActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  gsButton: {
    marginHorizontal: 8,
    height: 40,
    borderRadius: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gsButtonTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
  },
});
