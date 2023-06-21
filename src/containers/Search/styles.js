import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  pageTitle: {
    fontFamily: 'Mulish-Bold',
    fontSize: 24,
    color: COLORS.WHITE,
    marginLeft: 4,
  },
  toolbar: {
    marginBottom: 24,
  },
  notFoundContainer: {
    paddingTop: 56,
    alignItems: 'center',
  },
  notFoundTitle: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: COLORS.WHITE,
    marginTop: 24,
    marginBottom: 8,
  },
  notFoundDesc: {
    maxWidth: 254,
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: COLORS.TEXT_GRAY_1,
    textAlign: 'center',
  },
  body: {
    marginBottom: 40,
  },
});
