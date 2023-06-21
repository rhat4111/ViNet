import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 20,
    color: COLORS.WHITE,
  },
  body: {
    marginBottom: 8,
  },
  footer: {
    alignItems: 'center',
  },
  seeMoreButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    paddingHorizontal: 14,
  },
  seeMoreTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: COLORS.WHITE,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 34,
    borderRadius: 12,
    paddingHorizontal: 18,
  },
  tabTxt: {
    fontFamily: 'Mulish-Medium',
    fontSize: 14,
  },
});
