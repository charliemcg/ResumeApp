import React from 'react';
import {StatusBar, View} from 'react-native';
import colors from './colors';
import {getTabletMainContentWidth} from './utilities';

import MainContent from './Components/MainContent';
import ContactInfo from './Components/ContactInfo';
import Links from './Components/Links';
import Education from './Components/Education';
import Skills from './Components/Skills';

function Tablet() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.tabletWrapper}>
        <View style={styles.sidebarWrapper}>
          <ContactInfo />
          <Links />
          <Education />
          <Skills />
        </View>
        <View style={styles.mainContentWrapper}>
          <MainContent />
        </View>
      </View>
    </>
  );
}

const styles = {
  tabletWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  sidebarWrapper: {
    flex: 1,
    backgroundColor: colors.reactBlue,
  },
  mainContentWrapper: {
    width: getTabletMainContentWidth(),
  },
};

export default Tablet;
