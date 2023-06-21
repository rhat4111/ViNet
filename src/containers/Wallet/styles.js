import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    padding: 16
  },
  header: {
    paddingTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  pageTitle: {
    fontFamily: 'Mulish-Bold',
    fontSize: 18,
    color: COLORS.WHITE,
    marginLeft: 4,
  },
  tokenContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.BG_TOKEN_OVERVIEW,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
    position: 'relative',
    overflow: 'hidden',
  },
  leftImg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  rightImg: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  token: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tokenLogo: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tokenName: {
    marginLeft: 8,
    fontFamily: 'Mulish-Bold',
    fontSize: 16,
    color: COLORS.WHITE,
  },
  valueTxt: {
    fontFamily: 'Mulish-Bold',
    fontSize: 18,
    color: COLORS.WARNING,
  },
});
