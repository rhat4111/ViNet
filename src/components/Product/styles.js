import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.BG_GRAY_2,
    borderRadius: 16,
    padding: 8,
  },
  avatar: {
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 12,
  },
  detailInfo: {
    flex: 1,
  },
  nameTxt: {
    fontFamily: 'Mulish-Bold',
    fontSize: 14,
    color: COLORS.WHITE,
    marginBottom: 6,
  },
  typeTxt: {
    fontFamily: 'Mulish-Medium',
    fontSize: 14,
    color: COLORS.TEXT_GRAY_1,
    marginBottom: 8,
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rateTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: COLORS.WHITE,
    marginLeft: 4,
  },
  vanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.WARNING,
    borderRadius: 24,
    height: 28,
    paddingHorizontal: 8,
  },
  vanTxt: {
    color: COLORS.WARNING,
    marginLeft: 4,
    fontFamily: 'Mulish-Bold',
    fontSize: 12,
  },
});
