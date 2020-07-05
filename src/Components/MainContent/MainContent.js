import React from 'react';
import {View, ScrollView, Animated} from 'react-native';
import styles from './styles.js';
import Background from './Background';
import {getBackgroundImgSize} from '../../utilities';

import Header from './Header';
import Summary from '../Summary';
import Skills from '../Skills';
import Education from '../Education';
import ProgrammingExperience from '../ProgrammingExperience';
import WorkHistory from '../WorkHistory';
import {isTablet} from '../../utilities';

const backgroundImgSize = getBackgroundImgSize();
const tablet = isTablet();

function MainContent() {
  return (
    <View style={styles.mainContentBackground}>
      {/* background consists of a spinning React logo */}
      <Animated.View style={styles.animatedBackground}>
        <Background width={backgroundImgSize} height={backgroundImgSize} />
      </Animated.View>
      <View style={styles.mainContent}>
        <Header />
        {/* need a scrollview when not on tablet */}
        {tablet ? (
          <View
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Summary />
            <ProgrammingExperience />
            <WorkHistory />
          </View>
        ) : (
          <ScrollView>
            <Summary />
            <Skills />
            <Education />
            <ProgrammingExperience />
            <WorkHistory />
          </ScrollView>
        )}
      </View>
    </View>
  );
}

export default MainContent;
