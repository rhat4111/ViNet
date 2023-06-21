import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  title: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 18,
    color: COLORS.WHITE,
    marginBottom: 8,
  },
  tip: {
    marginLeft: 4,
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.TEXT_GRAY_2,
  },
  ranking: {
    alignSelf: 'center',
  },
  updated: {
    alignSelf: 'center',
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.TEXT_GRAY_2,
  },
  orders: {
    marginTop: 32,
  },
  order: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailInfo: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.BG_GRAY_2,
    borderRadius: 200,
    paddingRight: 16,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 8,
  },
  orderTxt: {
    width: 42,
    fontFamily: 'Mulish-SemiBold',
    fontSize: 12,
    color: COLORS.TEXT_GRAY_2,
  },
  name: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: COLORS.WHITE,
  },
  count: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: COLORS.WARNING,
  },
});
