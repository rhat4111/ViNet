import React, {useState} from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

const ProgressBar = ({percent, color}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: `${percent}%`,
          height: '100%',
          backgroundColor: color,
        }}
      />
    </View>
  );
};

export default ProgressBar;
