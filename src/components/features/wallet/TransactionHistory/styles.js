import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
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
  view: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.WARNING,
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF30',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  date: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
    color: COLORS.TEXT_GRAY_1,
  },
  tags: {
    minWidth: 175,
    marginBottom: -6,
  },
  tag: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  tagHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagAvatar: {
    width: 16,
    height: 16,
  },
  tagName: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.TEXT_GRAY_1,
    marginLeft: 4,
  },
  tagValue: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.TEXT_GRAY_1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: COLORS.BG_GRAY_2,
  },
  type: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    borderRadius: 20,
  },
  avatarBg: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    opacity: 0.2,
  },
  avatarImg: {
    position: 'absolute',
  },
  typeTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: COLORS.WHITE,
    marginBottom: 4,
  },
  dateTxt: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: COLORS.TEXT_GRAY_1,
  },
  valueTxt: {
    fontFamily: 'Mulish-Bold',
    fontSize: 16,
  },
});
