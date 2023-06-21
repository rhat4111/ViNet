import React from 'react';
import {Text, View} from 'react-native';
import {COLORS} from '@/themes';
import styles from './styles';

const Stepbar = props => {
  return (
    <View style={styles.container}>
      {Array.from(Array(4).keys()).map(index => (
        <View style={styles.item}>
          <View
            style={[
              styles.bar,
              {
                backgroundColor:
                  Math.floor(props.value / 25) > index
                    ? COLORS.WARNING
                    : COLORS.BG_GRAY_8,
              },
            ]}></View>
          <Text
            style={[
              styles.txt,
              {
                color:
                  Math.floor(props.value / 25) > index
                    ? COLORS.WARNING
                    : COLORS.TEXT_GRAY_2,
              },
            ]}>
            {(index + 1) * 25}%
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Stepbar;
