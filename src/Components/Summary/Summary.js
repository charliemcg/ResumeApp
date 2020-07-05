import React from 'react';
import {View, Text} from 'react-native';
import strings from '../../strings';
import styles from './styles';

export default function Summary() {
  return (
    <View>
      <Text style={styles.title}>{strings.summaryTitle}</Text>
      <Text>{strings.summaryContent}</Text>
    </View>
  );
}
