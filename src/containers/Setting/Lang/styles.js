import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    padding: 16,
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
  langItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
    backgroundColor: COLORS.BG_GRAY_2,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  langTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: COLORS.WHITE,
    marginLeft: 8,
  },
});
