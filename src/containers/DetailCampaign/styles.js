import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    padding: 16,
  },
  header: {
    paddingTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  pageTitle: {
    fontFamily: 'Mulish-Bold',
    fontSize: 18,
    color: COLORS.WHITE,
    marginLeft: 4,
  },
  body: {
    paddingVertical: 24,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 34,
    borderRadius: 12,
    paddingHorizontal: 24,
  },
  tabTxt: {
    fontFamily: 'Mulish-Medium',
    fontSize: 14,
  },
});
