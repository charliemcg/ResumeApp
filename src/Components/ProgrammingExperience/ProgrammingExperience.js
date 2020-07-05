import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import strings from '../../strings';

export default function ProgrammingExperience() {
  return (
    <View style={styles.programmingExperienceWrapper}>
      <Text style={styles.title}>{strings.programmingExperienceTitle}</Text>
      <View style={styles.programmingExperienceAppDeveloperWrapper}>
        <Text style={styles.programmingExperienceAppDeveloper}>
          {strings.programmingExperienceAppDeveloper}
        </Text>
        <Text
          style={[styles.programmingExperienceAppDeveloperDate, styles.date]}>
          {strings.programmingExperienceAppDeveloperDate}
        </Text>
      </View>
      <View style={styles.programmingExperienceApps}>
        {strings.programmingExperienceApps.map((point, i) => (
          <Text key={i}> {point}</Text>
        ))}
      </View>
      <View style={styles.programmingExperienceYoutubeWrapper}>
        <Text style={styles.programmingExperienceYoutube}>
          {strings.programmingExperienceYoutube}
        </Text>
        <Text style={[styles.programmingExperienceYoutubeDate, styles.date]}>
          {strings.programmingExperienceYoutubeDate}
        </Text>
      </View>
      <Text>{`  ${strings.programmingExperienceYoutubeDescription}`}</Text>
    </View>
  );
}
