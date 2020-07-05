import React from 'react';
import {View, Text} from 'react-native';
import strings from '../../strings';
import styles from './styles';

const {workHistoryItems} = strings;

const getWorkHistoryItems = ({item, i}) => {
  return (
    <View key={i} style={styles.workHistoryItem}>
      <View style={styles.workHistoryItemWrapper}>
        <Text style={styles.workHistoryItemJob}>{item.job}</Text>
        <Text style={[styles.workHistoryItemDate, styles.date]}>
          {item.date}
        </Text>
      </View>
      <Text> {item.company}</Text>
      <View style={styles.workHistoryItemPoints}>
        {item.points.map((point, i) => (
          <View key={i} style={styles.workHistoryItemPointWrapper}>
            <Text style={{flex: 1}}>&#8226; </Text>
            <Text style={{flex: 16}}>{point}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default function WorkHistory() {
  return (
    <View style={styles.workHistoryWrapper}>
      <Text style={styles.title}>{strings.workHistoryTitle}</Text>
      {workHistoryItems.map((item, i) => getWorkHistoryItems({item, i}))}
    </View>
  );
}
