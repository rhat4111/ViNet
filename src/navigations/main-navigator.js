import React from 'react';
import {Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {COLORS} from '@/themes';

import Home from '@/containers/Home';
import Search from '@/containers/Search';
import Management from '@/containers/Management';
import Wallet from '@/containers/Wallet';
import SelectedWallet from '@/containers/Wallet/SelectedWallet';
import Send from '@/containers/Wallet/Send';
import Swap from '@/containers/Wallet/Swap';
import Receive from '@/containers/Wallet/Receive';
import Setting from '@/containers/Setting';
import QRCode from '@/containers/QRCode';

const TabNavigatorConfig = {
  initialRouteName: 'Receive',
  backBehavior: 'history',
  tabBarOptions: {
    style: {
      height: 96,
      borderTopWidth: 0,
      backgroundColor: COLORS.LIGHT_DARK,
    },
  },
};

const TabBarIcon = ({icons, focused, hasDot = true}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={focused ? icons.active : icons.normal}
        style={{marginBottom: 10}}
      />
      <View
        style={{
          width: 4,
          height: 4,
          backgroundColor: COLORS.WHITE,
          borderRadius: 4,
          opacity: focused && hasDot ? 1 : 0,
        }}
      />
    </View>
  );
};

const TabBarLabel = () => <Text style={{display: 'none'}}></Text>;

const RouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: props => (
        <TabBarIcon
          icons={{
            normal: require('@/assets/images/navigations/home_normal.png'),
            active: require('@/assets/images/navigations/home_active.png'),
          }}
          {...props}
        />
      ),
      tabBarLabel: props => <TabBarLabel {...props} />,
    },
  },
  Management: {
    screen: Management,
    navigationOptions: {
      tabBarIcon: props => (
        <TabBarIcon
          icons={{
            normal: require('@/assets/images/navigations/folder_normal.png'),
            active: require('@/assets/images/navigations/folder_active.png'),
          }}
          {...props}
        />
      ),
      tabBarLabel: props => <TabBarLabel {...props} />,
    },
  },
  QRCode: {
    screen: QRCode,
    navigationOptions: {
      tabBarIcon: props => (
        <TabBarIcon
          icons={{
            normal: require('@/assets/images/navigations/qrcode_active.png'),
            active: require('@/assets/images/navigations/qrcode_active.png'),
          }}
          hasDot={false}
          {...props}
        />
      ),
      tabBarLabel: props => <TabBarLabel {...props} />,
    },
  },
  Wallet: {
    screen: Wallet,
    navigationOptions: {
      tabBarIcon: props => (
        <TabBarIcon
          icons={{
            normal: require('@/assets/images/navigations/wallet_normal.png'),
            active: require('@/assets/images/navigations/wallet_normal.png'),
          }}
          {...props}
        />
      ),
      tabBarLabel: props => <TabBarLabel {...props} />,
    },
  },
  Setting: {
    screen: Setting,
    navigationOptions: {
      tabBarIcon: props => (
        <TabBarIcon
          icons={{
            normal: require('@/assets/images/navigations/setting_normal.png'),
            active: require('@/assets/images/navigations/setting_normal.png'),
          }}
          {...props}
        />
      ),
      tabBarLabel: props => <TabBarLabel {...props} />,
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarButtonComponent: () => null,
    },
  },
  SelectedWallet: {
    screen: SelectedWallet,
    navigationOptions: {
      tabBarButtonComponent: () => null,
    },
  },
  Swap: {
    screen: Swap,
    navigationOptions: {
      tabBarButtonComponent: () => null,
    },
  },
  Send: {
    screen: Send,
    navigationOptions: {
      tabBarButtonComponent: () => null,
    },
  },
  Receive: {
    screen: Receive,
    navigationOptions: {
      tabBarButtonComponent: () => null,
    },
  },
};

const MainNavigator = createBottomTabNavigator(
  RouteConfigs,
  TabNavigatorConfig,
);

export default MainNavigator;
