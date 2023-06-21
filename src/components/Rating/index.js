import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

const Rating = ({rating, handleChange}) => {
  return (
    <View style={styles.container}>
      {Array.from(Array(rating).keys()).map(item => {
        return (
          <TouchableOpacity style={styles.star} key={item}>
            <Image source={require('@/assets/images/icons/star_filled.png')} />
          </TouchableOpacity>
        ); 
      })}
      {Array.from(Array(5 - rating).keys()).map(item => {
        return (
          <TouchableOpacity style={styles.star} key={item}>
            <Image source={require('@/assets/images/icons/star_outline.png')} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Rating;
