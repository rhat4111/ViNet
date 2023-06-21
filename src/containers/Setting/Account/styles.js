import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    position: 'relative',
    padding: 16,
    height,
    backgroundColor: COLORS.BACKGROUND,
  },
  header: {
    paddingTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 27,
  },
  pageTitle: {
    fontFamily: 'Mulish-Bold',
    fontSize: 18,
    color: COLORS.WHITE,
    marginLeft: 4,
  },
  changePasswordBtn: {
    height: 48,
    borderRadius: 12,
    backgroundColor: COLORS.BG_GRAY_2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  changePasswordTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: COLORS.WHITE,
  },
  button: {
    position: 'absolute',
    bottom: 32,
    left: 16,
    right: 16,
    height: 48,
    borderRadius: 12,
    backgroundColor: COLORS.WARNING,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: COLORS.SECONDARY,
  },
  notMatchContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  notMatchPwds: {
    marginLeft: 4,
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.TEXT_GRAY_1,
  },
  modal: {
    backgroundColor: COLORS.BG_MODAL,
    borderRadius: 40,
    paddingTop: 32,
    paddingBottom: 40,
    paddingHorizontal: 24,
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
  modalButton: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    flexShrink: 0,
    backgroundColor: COLORS.WARNING,
  },
  modalButtonTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: COLORS.SECONDARY,
  },
});
