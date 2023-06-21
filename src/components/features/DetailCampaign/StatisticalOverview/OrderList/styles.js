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
  order: {
    backgroundColor: COLORS.BG_GRAY_2,
    borderRadius: 16,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BG_GRAY_10,
    paddingTop: 12,
    paddingBottom: 8,
  },
  headerTxt: {
    fontFamily: 'Mulish-Bold',
    fontSize: 16,
    color: COLORS.WHITE,
  },
  body: {
    paddingTop: 8,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    marginLeft: 4,
    color: COLORS.WHITE,
  },
  date: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.TEXT_GRAY_2,
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
