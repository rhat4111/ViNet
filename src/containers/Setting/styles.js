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
    display: 'flex',
    alignItems: 'center',
    marginBottom: 40,
  },
  pageTitle: {
    alignSelf: 'flex-start',
    fontFamily: 'Mulish-Bold',
    fontSize: 18,
    color: COLORS.WHITE,
    marginBottom: 24,
  },
  avatarContainer: {
    width: 160,
    height: 160,
    borderRadius: 160,
    position: 'relative',
    marginBottom: 16,
  },
  cameraBtn: {
    width: 32,
    height: 32,
    borderRadius: 32,
    position: 'absolute',
    backgroundColor: COLORS.BG_GRAY_2,
    alignItems: 'center',
    justifyContent: 'center',
    right: 6,
    bottom: 6,
  },
  nameTxt: {
    fontFamily: 'Mulish-Bold',
    fontSize: 24,
    color: COLORS.WHITE,
  },
  menuItem: {
    height: 48,
    borderRadius: 8,
    backgroundColor: COLORS.BG_GRAY_2,
    marginBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuNameContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: COLORS.WHITE,
    marginLeft: 8
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
