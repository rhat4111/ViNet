import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  header: {
    paddingTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerTitle: {
    fontFamily: 'NotoSerif-SemiBold',
    fontSize: 24,
    color: COLORS.WHITE,
    maxWidth: 294,
  },
  headerToolbar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    marginLeft: 16,
  },
  body: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  ads: {
    backgroundColor: COLORS.WARNING,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    paddingHorizontal: 16,
    paddingVertical: 40,
    marginBottom: 40,
  },
  adsContent: {
    maxWidth: 175,
    alignItems: 'center',
  },
  adsTitle: {
    fontFamily: 'NotoSerif-Medium',
    fontSize: 20,
    color: COLORS.TEXT_GRAY_4,
    lineHeight: 27,
    marginBottom: 16,
    textAlign: 'center',
  },
  watchNowButton: {
    height: 36,
    paddingHorizontal: 16,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  watchNowTxt: {
    fontFamily: 'Mulish-Medium',
    fontSize: 16,
    color: COLORS.WHITE,
  },
});
