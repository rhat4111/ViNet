import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 18,
    color: COLORS.WHITE,
  },
  campaignCard: {
    backgroundColor: COLORS.BG_GRAY_4,
    borderRadius: 24,
    marginRight: 16,
    padding: 12,
    paddingBottom: 24,
    width: width - 32,
  },
});
