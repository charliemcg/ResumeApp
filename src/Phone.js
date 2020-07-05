import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Dimensions,
  Animated,
} from 'react-native';
import colors from './colors';

import MainComponent from './Components/MainContent';
import Drawer from './Components/Drawer';

const closedDrawerPosition = -Dimensions.get('window').width * 0.65;

function Phone() {
  // need to know if the drawer is open in order to know when to change the hamburger color and blur the background
  const [isDrawerOpen, toggleDrawer] = useState(false);
  //the position of the drawer
  const [drawerPosition] = useState(new Animated.Value(closedDrawerPosition));

  function slideDrawer() {
    Animated.timing(drawerPosition, {
      // determine if opening or closing
      toValue: isDrawerOpen ? closedDrawerPosition : 0,
      duration: 500,
      useNativeDriver: false,
    }).start(
      // when opening the drawer the hamburger color change and background blur needs to trigger before the drawer animation begins
      // when closing the drawer the hamburger color change and background blur needs to trigger after the drawer animation begins
      isDrawerOpen ? () => toggleDrawer(false) : toggleDrawer(true),
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <MainComponent />
      </SafeAreaView>
      {/* blur the main content when drawer is open */}
      {isDrawerOpen && <View style={styles.transparentOverlay} />}
      <Animated.View
        style={[
          styles.animatedDrawer,
          // the drawer position is animatable via the 'left' property
          {left: drawerPosition},
        ]}>
        <Drawer
          toggleDrawer={() => slideDrawer()}
          isDrawerOpen={isDrawerOpen}
        />
      </Animated.View>
    </>
  );
}

const styles = {
  animatedDrawer: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
  },
  transparentOverlay: {
    backgroundColor: colors.linkBackground,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
};

export default Phone;
