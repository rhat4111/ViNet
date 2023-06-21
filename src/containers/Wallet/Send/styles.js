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
    marginBottom: 24,
  },
  body: {
    marginBottom: 36,
  },
  pageTitle: {
    fontFamily: 'Mulish-Bold',
    fontSize: 18,
    color: COLORS.WHITE,
    marginLeft: 4,
  },
  footer: {},
  received: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  labelTxt: {
    fontFamily: 'Mulish-Medium',
    fontSize: 16,
    color: COLORS.WHITE,
  },
  valueTxt: {
    fontFamily: 'Mulish-Bold',
    fontSize: 24,
    color: COLORS.WARNING,
  },
  sendButton: {
    height: 48,
    borderRadius: 12,
    backgroundColor: COLORS.WARNING,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  sendButtonTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: COLORS.LOGIN_BUTTON,
  },
});
