import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@/themes';
import styles from './styles';
import {t} from 'i18next';

const AgentList = () => {
  const agents = [
    {
      name: 'Nguyễn Phan Anh',
      avatar: require('@/assets/images/agents/1.png'),
      count: 54,
    },
    {
      name: 'Nguyễn Phan Anh',
      avatar: require('@/assets/images/agents/2.png'),
      count: 54,
    },
    {
      name: 'Nguyễn Phan Anh',
      avatar: require('@/assets/images/agents/3.png'),
      count: 54,
    },
    {
      name: 'Nguyễn Phan Anh',
      avatar: require('@/assets/images/agents/4.png'),
      count: 54,
    },
    {
      name: 'Nguyễn Phan Anh',
      avatar: require('@/assets/images/agents/5.png'),
      count: 54,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t('pages.detailCampaign.statistical.agents.title')} 1{' '}
        <Text style={{fontFamily: 'Mulish-Regular', color: COLORS.TEXT_GRAY_2}}>
          (12)
        </Text>
      </Text>
      <View>
        {agents.map((agent, index) => {
          return (
            <View style={styles.agent} key={index}>
              <View style={styles.user}>
                <Image source={agent.avatar} style={styles.avatar} />
                <View>
                  <Text style={styles.name}>{agent.name}</Text>
                  <Text style={styles.count}>
                    {agent.count}{' '}
                    {t('pages.detailCampaign.statistical.agents.agent')}
                  </Text>
                </View>
              </View>
              <Image source={require('@/assets/images/icons/login.png')} />
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

export default AgentList;
