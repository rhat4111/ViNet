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
    marginBottom: 16,
  },
  pageTitle: {
    fontFamily: 'Mulish-Bold',
    fontSize: 24,
    color: COLORS.WHITE,
    marginLeft: 4,
  },
  description: {
    fontFamily: 'Mulish-Regular',
    fontSize: 16,
    color: '#79787A',
    lineHeight: 20,
    marginBottom: 40,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  tab: {
    marginRight: 16,
  },
  tabLabel: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: COLORS.WHITE,
    opacity: 0.5,
    marginBottom: 8,
  },
  activeTabLabel: {
    fontFamily: 'Mulish-SemiBold',
    opacity: 1,
  },
  underline: {
    height: 2,
    backgroundColor: COLORS.WARNING,
    borderRadius: 4,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    bottom: 16,
  },
  continueButton: {
    height: 48,
    borderRadius: 12,
    backgroundColor: COLORS.WARNING,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  continueButtonTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: COLORS.LOGIN_BUTTON,
  },
  noAccountTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.WHITE,
  },
  registerTxt: {
    marginLeft: 6,
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.WARNING,
  },
});
