import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    width: width - 32,
    backgroundColor: COLORS.BG_GRAY_2,
    borderRadius: 16,
    paddingHorizontal: 12,
    marginRight: 16,
  },
  header: {
    paddingTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {
    paddingVertical: 16,
    borderBottomColor: COLORS.BG_GRAY_8,
    borderBottomWidth: 1,
  },
  date: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.TEXT_GRAY_1,
  },
  title: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: COLORS.WHITE,
    marginBottom: 16,
  },
  desc: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: COLORS.TEXT_GRAY_1,
    lineHeight: 17.5,
    marginBottom: 8,
  },
  seeMore: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 12,
    color: COLORS.WARNING,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 12,
    color: COLORS.WHITE,
    marginLeft: 4,
  },
  like: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeBtn: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BG_GRAY_9,
  },
  likeCount: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: COLORS.WHITE,
    marginLeft: 8,
  },
});
