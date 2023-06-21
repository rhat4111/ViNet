import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {t} from 'i18next';

const PrizeInformation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t('pages.detailCampaign.information.prize.title')}
      </Text>
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.dot}></View>
          <Text style={styles.text}>
            Quỹ thưởng top đại lý sẽ được chia đều cho đại lý có số đơn hàng
            nhiều nhất và đại lý có số đơn hàng của đại lý cấp 1 nhiều nhất sau
            khi kết thúc chiến dịch.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.dot}></View>
          <Text style={styles.text}>
            Đơn hàng được tính là đơn hàng bán trực tiếp cho người tiêu dùng
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PrizeInformation;
