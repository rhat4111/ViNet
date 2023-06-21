import {AppRegistry} from 'react-native';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import 'react-native-gesture-handler';
import App from './src/App';
import {name as appName} from './app.json';
import en from '@/i18n/en';
import vn from '@/i18n/vn';

i18n.use(initReactI18next).init({
  lng: 'vn',
  fallbackLng: 'vn',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    vn: {
      translation: vn,
    },
  },
});

global.t = i18n.t;

AppRegistry.registerComponent(appName, () => App);
