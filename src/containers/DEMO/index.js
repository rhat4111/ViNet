import React, {useState} from 'react';
import {withNavigation} from 'react-navigation';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const DEMO = ({navigation}) => {
  return <ScrollView style={styles.container}></ScrollView>;
};

export default withNavigation(DEMO);
