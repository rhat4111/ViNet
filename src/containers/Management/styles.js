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
  },
  headerToolbar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    marginLeft: 16,
  },
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  tab: {
    marginHorizontal: 8,
  },
  tabTxt: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
    color: COLORS.WHITE,
    marginBottom: 8,
  },
  bar: {
    width: '100%',
    height: 2,
    borderRadius: 4,
    backgroundColor: COLORS.WARNING,
  },
  body: {
    paddingHorizontal: 16,
  },
  joinedCampaignCard: {
    borderRadius: 24,
    padding: 12,
    paddingBottom: 24,
    marginBottom: 16,
    backgroundColor: COLORS.BG_GRAY_4,
  },
  plusIcon: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    width: 48,
    height: 48,
    borderRadius: 48,
    backgroundColor: COLORS.WARNING,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
