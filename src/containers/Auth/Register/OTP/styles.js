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
    fontSize: 24,
    color: COLORS.WHITE,
    marginLeft: 4,
  },
  description: {
    marginBottom: 64,
  },
  descriptionTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 16,
    color: '#79787A',
    lineHeight: 20,
  },
  emailTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 16,
    lineHeight: 20,
    color: COLORS.WHITE,
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
  otp: {
    alignItems: 'center',
  },
  OTPContainerStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  OTPInputStyles: {
    width: 52,
    height: 62,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: COLORS.TEXT_INPUT_BORDER,
    backgroundColor: COLORS.WARNING,
    fontFamily: 'Mulish-Bold',
    fontSize: 24,
    color: COLORS.LOGIN_BUTTON,
    textAlign: 'center',
    marginLeft: 12,
    marginRight: 12,
  },
  timerTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.WHITE,
    opacity: 0.8,
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notReceivedTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.WHITE,
  },
  resendTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.WARNING,
    marginLeft: 4
  },
});
