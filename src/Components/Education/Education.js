import React from 'react';
import {View, Text} from 'react-native';
import strings from '../../strings';
import styles from './styles';

export default function Education() {
  return (
    <View style={styles.educationWrapper}>
      <Text style={styles.title}>{strings.educationTitle}</Text>
      <View style={styles.educationDegreeWrapper}>
        <Text>{strings.educationDegree}</Text>
        <Text style={styles.date}>{strings.educationDegreeDate}</Text>
      </View>
      <Text>{strings.educationInstitution}</Text>
      <Text>{strings.educationGpa}</Text>
    </View>
  );
}
