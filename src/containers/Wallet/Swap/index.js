import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {RadioButton, RadioButtonInput} from 'react-native-simple-radio-button';
import {withNavigation} from 'react-navigation';
import TokenOverview from '@/components/features/home/TokenOverview';
import Token from '@/components/features/wallet/Token';
import {COLORS} from '@/themes';
import styles from './styles';

const Swap = ({navigation}) => {
  const [selectedRecipient, setSelectedRecipient] = useState(0);
  const recipients = ['Ví trong ViRef', 'Ví cá nhân'];

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('SelectedWallet')}>
        <Image source={require('@/assets/images/icons/arrow-left.png')} />
        <Text style={styles.pageTitle}>{t('pages.swap.title')}</Text>
      </TouchableOpacity>
      <View style={styles.body}>
        <View style={{marginBottom: 40}}>
          <TokenOverview />
        </View>
        <Token
          coin="vref"
          stepbar={true}
          placeholder={t('pages.swap.placeholder')}
        />
        <TouchableOpacity style={styles.exchange}>
          <Image source={require('@/assets/images/icons/exchange.png')} />
        </TouchableOpacity>
        <View style={{marginBottom: 24}}>
          <Token coin="usdc" value="1.0" />
        </View>
        <View>
          <Text style={styles.recipientTitle}>
            {t('pages.swap.recipients')}
          </Text>
          {recipients.map((recipient, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.recipientItem}
                onPress={() => setSelectedRecipient(index)}>
                <Text style={styles.recipientTxt}>{recipient}</Text>
                <RadioButton>
                  <RadioButtonInput
                    isSelected={selectedRecipient === index}
                    borderWidth={1}
                    buttonInnerColor={COLORS.BG_RADIO}
                    buttonOuterColor={COLORS.BG_RADIO}
                    buttonSize={16}
                    buttonOuterSize={20}
                    buttonStyle={{}}
                  />
                </RadioButton>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <TouchableOpacity style={styles.convertButton}>
        <Text style={styles.convertButtonTxt}>{t('common.convert')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default withNavigation(Swap);
