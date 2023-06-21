import {createStackNavigator} from 'react-navigation-stack';
import MainNavigator from './main-navigator';
import OnBoarding from '@/containers/OnBoarding';
import Login from '@/containers/Auth/Login';
import Register from '@/containers/Auth/Register';
import OTP from '@/containers/Auth/Register/OTP';
import CreateProduct from '@/containers/CreateProduct';
import Information from '@/containers/Auth/Register/Information';
import AccountSetting from '@/containers/Setting/Account';
import LangSetting from '@/containers/Setting/Lang';
import NotificationSetting from '@/containers/Setting/Notification';
import SecuritySetting from '@/containers/Setting/Security';
import DetailCampaign from '@/containers/DetailCampaign';
import CampaignRating from '@/containers/CampaignRating';
import WriteRating from '@/containers/CampaignRating/WriteRating';

const AuthNavConfig = {
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Main: MainNavigator,
  OnBoarding: OnBoarding,
  Login: Login,
  Register: Register,
  OTP: OTP,
  AccountInformation: Information,
  CreateProduct: CreateProduct,
  AccountSetting: AccountSetting,
  LangSetting: LangSetting,
  NotificationSetting: NotificationSetting,
  SecuritySetting: SecuritySetting,
  DetailCampaign: DetailCampaign,
  CampaignRating: CampaignRating,
  WriteRating: WriteRating,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavConfig);

export default AuthNavigator;
