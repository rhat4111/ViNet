import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 20,
    color: COLORS.WHITE,
  },
  campaignCard: {
    marginRight: 16,
    maxWidth: 366,
    backgroundColor: COLORS.BG_GRAY_4,
    borderRadius: 24,
    padding: 12,
    paddingBottom: 24,
  },
});
