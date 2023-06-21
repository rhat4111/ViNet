import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  avatar: {
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 12,
    position: 'relative',
  },
  nameTxt: {
    fontFamily: 'Mulish-Bold',
    fontSize: 14,
    color: COLORS.WHITE,
    marginBottom: 12,
  },
  vanButton: {
    position: 'absolute',
    top: 9.5,
    left: 8.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.WARNING,
    borderRadius: 24,
    backgroundColor: COLORS.BG_GRAY_5,
    height: 28,
    paddingHorizontal: 8,
    zIndex: 10,
  },
  vanTxt: {
    color: COLORS.WARNING,
    marginLeft: 4,
    fontFamily: 'Mulish-Bold',
    fontSize: 12,
  },
  labelTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.TEXT_GRAY_1,
  },
  valueTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 16,
    color: COLORS.WHITE,
    marginBottom: 8
  },
});
