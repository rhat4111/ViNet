import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '@/themes';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND,
  },
  cameraContainerStyle: {
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
  cameraStyle: {
    height: height - 96,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 22,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageTitle: {
    fontFamily: 'NotoSerif-SemiBold',
    fontSize: 24,
    color: COLORS.WHITE,
    maxWidth: 294,
  },
  flashIcon: {
    width: 32,
    height: 32,
    borderRadius: 24,
    backgroundColor: COLORS.BG_GRAY_2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toCenterTxt: {
    backgroundColor: '#14131660',
    borderRadius: 12,
    maxWidth: 296,
    padding: 8,
    fontFamily: 'Mulish-Medium',
    fontSize: 14,
    lineHeight: 17.5,
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  footer: {
    width: 265,
    position: 'absolute',
    bottom: 40,
  },
  qrScanResult: {
    width: '100%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.WHITE,
    marginLeft: 4,
  },
  detailInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailAvatar: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 16,
  },
  downloadTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.TEXT_GRAY_3,
    marginBottom: 4,
  },
  photoLibTxt: {
    fontFamily: 'Mulish-Medium',
    fontSize: 16,
    color: COLORS.BLACK,
  },
  uploadButton: {
    width: 40,
    height: 40,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BG_GRAY_2,
  },
  modal: {
    backgroundColor: COLORS.BG_MODAL,
    borderRadius: 40,
    paddingTop: 32,
    paddingHorizontal: 24,
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
  modalButton: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: COLORS.WARNING,
  },
  modalButtonTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: COLORS.SECONDARY,
  },
});
