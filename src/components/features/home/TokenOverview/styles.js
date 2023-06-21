import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.BG_TOKEN_OVERVIEW,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
    position: 'relative',
    overflow: 'hidden',
  },
  leftImg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  rightImg: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  token: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tokenLogo: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tokenName: {
    marginLeft: 8,
    fontFamily: 'Mulish-Bold',
    fontSize: 16,
    color: COLORS.WHITE,
  },
  price: {
    alignItems: 'flex-end',
  },
  vanTxt: {
    fontFamily: 'Mulish-Bold',
    fontSize: 18,
    color: COLORS.WARNING,
    marginBottom: 4,
  },
  usdcTxt: {
    fontFamily: 'Mulish-Medium',
    fontSize: 14,
    color: COLORS.TEXT_GRAY_1,
    marginRight: 4,
  },
  rating: {
    fontFamily: 'Mulish-Medium',
    fontSize: 14,
    color: COLORS.SUCCESS,
  },
});
