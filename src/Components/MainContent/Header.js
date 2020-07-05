import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import strings from '../../strings';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.name}>{strings.name}</Text>
      <Text style={styles.role}>{strings.role}</Text>
    </View>
  );
}
