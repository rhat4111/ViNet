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
  exchange: {
    width: 32,
    height: 32,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BG_GRAY_10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 12,
  },
  recipientTitle: {
    fontFamily: 'Mulish-Medium',
    fontSize: 16,
    color: COLORS.WHITE,
    marginBottom: 8,
  },
  recipientItem: {
    height: 48,
    paddingHorizontal: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLORS.DRAGDOWN_ICON_COLOR,
    backgroundColor: COLORS.BG_GRAY_11,
  },
  recipientTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 16,
    color: COLORS.WHITE,
  },
  convertButton: {
    height: 48,
    borderRadius: 12,
    backgroundColor: COLORS.WARNING,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  convertButtonTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: COLORS.LOGIN_BUTTON,
  },
});
