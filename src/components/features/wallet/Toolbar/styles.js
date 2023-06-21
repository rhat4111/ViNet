import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  toolbarItem: {
    width: 48,
    alignItems: 'center',
    marginHorizontal: 16,
    position: 'relative',
  },
  toolbarBtn: {
    width: 48,
    height: 48,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BG_GRAY_2,
    marginBottom: 8,
  },
  toolbarTxt: {
    width: 72,
    textAlign: 'center',
    fontFamily: 'Mulish-Medium',
    fontSize: 16,
    color: COLORS.WHITE,
  },
});
