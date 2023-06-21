import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const TokenOverview = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/token_overview/bg_left.png')}
        style={styles.leftImg}
      />
      <Image
        source={require('@/assets/images/token_overview/bg_right.png')}
        style={styles.rightImg}
      />
      <View style={styles.token}>
        <View style={styles.tokenLogo}>
          <Image
            source={require('@/assets/images/token_overview/vinet_token_logo.png')}
          />
        </View>
        <Text style={styles.tokenName}>ViNext</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.vanTxt}>452,316.00005 VAN</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.usdcTxt}>≈ $104.59 USDC</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('@/assets/images/icons/arrow_up.png')} />
            <Text style={styles.rating}>1.4%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TokenOverview;
