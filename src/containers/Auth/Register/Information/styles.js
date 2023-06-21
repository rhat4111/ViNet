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
    marginBottom: 40,
    fontFamily: 'Mulish-Regular',
    fontSize: 16,
    color: '#79787A',
    lineHeight: 20,
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
  modal: {
    backgroundColor: COLORS.BG_MODAL,
    borderRadius: 40,
    paddingTop: 32,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 40,
    alignItems: 'center',
  },
  modalTitle: {
    marginTop: 24,
    marginBottom: 8,
    fontFamily: 'Mulish-SemiBold',
    fontSize: 20,
    color: COLORS.WHITE,
  },
  modalDesc: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: COLORS.LIGHT,
    maxWidth: 280,
    textAlign: 'center',
    marginBottom: 40,
  },
  modalToolbar: {
    flexDirection: 'row',
    marginLeft: -4,
    marginRight: -4,
  },
  modalButton: {
    flex: 1,
    marginLeft: 4,
    marginRight: 4,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    flexShrink: 0,
  },
  modalButtonTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
  },
});
