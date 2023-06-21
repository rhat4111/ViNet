import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '@/themes';
import {ColorSpace} from 'react-native-reanimated';

const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    minHeight: height,
    backgroundColor: COLORS.BACKGROUND,
    padding: 16,
  },
  header: {
    paddingTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  pageTitle: {
    fontFamily: 'Mulish-Bold',
    fontSize: 18,
    color: COLORS.WHITE,
    marginLeft: 4,
  },
  rating: {
    alignItems: 'center',
    marginBottom: 24,
  },
  tip: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.TEXT_GRAY_1,
    marginLeft: 4,
  },
  footer: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 32,
  },
  submitBtn: {
    backgroundColor: COLORS.WARNING,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: COLORS.SECONDARY,
  },
  policy: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  policyTxt: {
    marginLeft: 8,
    fontFamily: 'Mulish-Regular',
    fontSize: 11,
    color: COLORS.WHITE,
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
