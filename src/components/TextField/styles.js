import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
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
  trackTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.TEXT_GRAY_1,
  },
  textField: {
    height: '100%',
    flex: 1,
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: COLORS.WHITE,
    paddingHorizontal: 12,
  },
  iconContainer: {
    width: 44,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusShowPassword: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    flexShrink: 0,
  },
  statusShowPasswordTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.PASSWORD_STATUS,
  },
  helperTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.DANGER,
    lineHeight: 15,
    marginTop: 8,
  },
  clearButton: {
    position: 'absolute',
    top: 14,
    right: 14,
  },
});
