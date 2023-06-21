import React from 'react';
import {Image, Text, View} from 'react-native';
import {COLORS} from '@/themes';
import styles from './styles';

const ProductRating = () => {
  const rates = [
    {id: 1, value: 5, percent: 80},
    {id: 1, value: 4, percent: 95},
    {id: 1, value: 3, percent: 60},
    {id: 1, value: 2, percent: 0},
    {id: 1, value: 1, percent: 15},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.overview}>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Text
            style={{
              fontFamily: 'Mulish-ExtraBold',
              fontSize: 32,
              color: COLORS.WHITE,
            }}>
            4.4
          </Text>
          <Text style={[styles.txt, {marginLeft: 8, marginBottom: 5}]}>/5</Text>
        </View>
        <Text style={styles.txt}>1,021 đánh giá</Text>
      </View>
      <View>
        {rates.map(rate => {
          return (
            <View style={styles.item}>
              <Text style={styles.value}>{rate.value}</Text>
              <Image
                source={require('@/assets/images/icons/star.png')}
                style={styles.star}
              />
              <View style={styles.progressBar}>
                <View style={[styles.progress, {width: `${rate.percent}%`}]} />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ProductRating;
