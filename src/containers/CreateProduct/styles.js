import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    padding: 16,
    height
  },
  header: {
    paddingTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  pageTitle: {
    fontFamily: 'Mulish-Bold',
    fontSize: 18,
    color: COLORS.WHITE,
    marginLeft: 4,
  },
  saveBtn: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 32,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WARNING,
    borderRadius: 12,
  },
  saveBtnTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: COLORS.SECONDARY,
  },
});
