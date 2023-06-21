import React, {useEffect} from 'react';
import {BackHandler, LogBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Navigation from '@/navigations';
LogBox.ignoreAllLogs();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Navigation />;
};

export default App;
