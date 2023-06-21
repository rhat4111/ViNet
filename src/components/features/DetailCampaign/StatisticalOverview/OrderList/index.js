import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const OrderList = () => {
  const orders = [
    {
      id: '#GS10029',
      user: {
        name: 'Nguyễn Văn An',
        avatar: require('@/assets/images/order_users/1.png'),
      },
      date: 'Hôm nay, 15:44',
    },
    {
      id: '#GS10029',
      user: {
        name: 'Nguyễn Văn An',
        avatar: require('@/assets/images/order_users/2.png'),
      },
      date: '03/03/2022, 15:44',
    },
    {
      id: '#GS10029',
      user: {
        name: 'Nguyễn Văn An',
        avatar: require('@/assets/images/order_users/3.png'),
      },
      date: '01/03/2022, 15:44',
    },
    {
      id: '#GS10029',
      user: {
        name: 'Nguyễn Văn An',
        avatar: require('@/assets/images/order_users/4.png'),
      },
      date: '01/03/2022, 15:44',
    },
    {
      id: '#GS10029',
      user: {
        name: 'Nguyễn Văn An',
        avatar: require('@/assets/images/order_users/5.png'),
      },
      date: '28/02/2022, 09:14',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t('pages.detailCampaign.statistical.orderList.title')}
      </Text>
      <View>
        {orders.map((order, index) => {
          return (
            <View style={styles.order} key={index}>
              <View style={styles.header}>
                <Text style={styles.headerTxt}>
                  {t('pages.detailCampaign.statistical.orderList.order')}{' '}
                  {order.id}
                </Text>
              </View>
              <View style={styles.body}>
                <View style={styles.user}>
                  <Image source={order.user.avatar} />
                  <Text style={styles.name}>{order.user.name}</Text>
                </View>
                <Text style={styles.date}>{order.date}</Text>
              </View>
            </View>
          );
        })}
      </View>
      <TouchableOpacity style={styles.seeMoreBtn}>
        <Text style={styles.seeMoreTxt}>{t('common.seeMore')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderList;
