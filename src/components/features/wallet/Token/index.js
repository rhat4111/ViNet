import React from 'react';
import {Image, Text, View} from 'react-native';
import PriceInput from '@/components/PriceInput';
import Stepbar from '@/components/Stepbar';
import styles from './styles';

const Token = props => {
  const tokens = {
    vref: {
      name: 'VREF',
      avatar: require('@/assets/images/token/viref.png'),
    },
    usdc: {
      name: 'USDC',
      avatar: require('@/assets/images/token/usdc.png'),
    },
  };
  const selectedToken = tokens[props.coin];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Image source={selectedToken.avatar} />
        </View>
        <Text style={styles.labelTxt}>{selectedToken.name}</Text>
      </View>
      <View>
        <PriceInput
          placeholder={props.placeholder}
          selectable={false}
          value={12}
          units={[selectedToken.name]}
        />
        {props.stepbar && (
          <View style={{marginTop: 8}}>
            <Stepbar value={26} />
          </View>
        )}
      </View>
    </View>
  );
};

export default Token;
