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
    marginBottom: 16,
  },
  agent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.BG_GRAY_2,
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 12,
  },
  name: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: COLORS.WHITE,
    marginBottom: 8,
    lineHeight: 20,
  },
  count: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.TEXT_GRAY_1,
    lineHeight: 15,
  },
  seeMoreBtn: {
    width: 104,
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    borderRadius: 12,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  seeMoreTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: COLORS.WHITE,
  },
});
