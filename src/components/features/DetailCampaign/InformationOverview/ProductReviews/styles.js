import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  title: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 18,
    color: COLORS.WHITE,
  },
  editReview: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  editReviewTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
    color: COLORS.WARNING,
    marginLeft: 4,
  },
});
