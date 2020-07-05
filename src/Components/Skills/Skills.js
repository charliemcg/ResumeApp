import React from 'react';
import {View, Text} from 'react-native';
import strings from '../../strings';
import styles from './styles';
import {isTablet} from '../../utilities';

const skillColumn = (skills) => {
  return (
    <View style={styles.skillColumn}>
      {skills.map((skill, i) => (
        <Text key={i} style={styles.skillPoint}>
          &#8226; {skill}
        </Text>
      ))}
    </View>
  );
};

export default function Skills() {
  return (
    <View style={styles.skillsWrapper}>
      <View style={styles.title}>
        <Text style={styles.title}>{strings.skillsTitle}</Text>
      </View>
      <View style={styles.skillPointsWrapper}>
        {/* one column for tablet, two for phone */}
        {isTablet() &&
          skillColumn([...strings.skillsColumnOne, ...strings.skillsColumnTwo])}
        {!isTablet() && (
          <>
            {skillColumn(strings.skillsColumnOne)}
            {skillColumn(strings.skillsColumnTwo)}
          </>
        )}
      </View>
    </View>
  );
}
