import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const ProductReview = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/review_rating.png')} />
        <Text style={styles.date}>20/12/2021</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={1}>
          Giao diện dễ thương, dễ ưng, nói chung là rấ...
        </Text>
        <Text style={styles.desc} numberOfLines={3}>
          Lần đầu biết tới ứng dụng này là qua một bài quảng cáo trên face, mình
          tò mò tải về thử không ngờ bị mê đến bây giờ. Vốn dĩ mình là tự doanh
          tại nhà thườn...
        </Text>
        <Text style={styles.seeMore}>{t('common.seeMore')}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.user}>
          <Image source={require('@/assets/images/review_user.png')} />
          <Text style={styles.name}>Hoàng Thị Thuỳ Linh</Text>
        </View>
        <View style={styles.like}>
          <TouchableOpacity style={styles.likeBtn}>
            <Image source={require('@/assets/images/icons/like_white.png')} />
          </TouchableOpacity>
          <Text style={styles.likeCount}>1</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductReview;
