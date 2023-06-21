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
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageTitle: {
    fontFamily: 'Mulish-Bold',
    fontSize: 18,
    color: COLORS.WHITE,
    marginLeft: 4,
  },
  writeReview: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 12,
    color: COLORS.WARNING,
  },
  sortBtn: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    height: 32,
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    borderRadius: 10,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  sortTxt: {
    fontFamily: 'Mulish-Bold',
    fontSize: 12,
    color: COLORS.WHITE,
    marginLeft: 8,
  },
  leaveComment: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 24,
  },
  leaveInput: {
    flex: 1,
    marginLeft: 8,
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.TEXT_INPUT_BORDER,
    backgroundColor: COLORS.BG_GRAY_11,
    borderRadius: 24,
    paddingHorizontal: 12,
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: COLORS.WHITE,
  },
  popup: {
    paddingVertical: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: COLORS.BG_POPUP,
  },
  popupTitle: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 18,
    color: COLORS.WHITE,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER_POPUP,
  },
  units: {
    paddingHorizontal: 16, 
  },
  unitItem: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER_POPUP,
  },
  popupUnitTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 16,
    color: COLORS.WHITE,
  },
  draggableIcon: {
    position: 'absolute',
    top: -12,
    backgroundColor: COLORS.DRAGDOWN_ICON_COLOR,
    borderRadius: 4,
  },
});
