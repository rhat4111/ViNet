import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.BG_GRAY_2,
    overflow: 'hidden',
    borderRadius: 12,
    height: 48,
    borderWidth: 1,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  labelTxt: {
    fontFamily: 'Mulish-Medium',
    fontSize: 16,
    color: COLORS.WHITE,
  },
  textField: {
    flex: 1,
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: COLORS.WHITE,
    paddingHorizontal: 12,
  },
  helperTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.DANGER,
    lineHeight: 15,
    marginTop: 8,
  },
  unit: {
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderLeftColor: COLORS.WHITE,
    paddingHorizontal: 12,
    marginRight: 2,
  },
  unitTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: COLORS.WHITE,
    marginRight: 4,
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
