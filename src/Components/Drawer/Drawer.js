import React from 'react';
import {View, SafeAreaView, Image, TouchableHighlight} from 'react-native';
import styles from './styles';
import colors from '../../colors';
import hamburgerIcon from '../../Assets/hamburger.png';

import ContactInfo from '../ContactInfo';
import Links from '../Links';

export default function Drawer(props) {
  const {toggleDrawer, isDrawerOpen} = props;
  return (
    <View style={styles.drawerWithBurger}>
      <View style={styles.drawerWrapper}>
        <SafeAreaView>
          <View style={styles.drawerSafeArea}>
            <ContactInfo />
            <Links />
          </View>
        </SafeAreaView>
      </View>
      <SafeAreaView>
        <TouchableHighlight
          style={[
            styles.hamburger,
            {
              // hamburger image needs to be the same color as the drawer but only when the drawer is visible (open)
              backgroundColor: isDrawerOpen ? '#61dbfb' : 'white',
            },
          ]}
          onPress={() => toggleDrawer()}
          underlayColor={colors.hamburgerHighlight}>
          <Image source={hamburgerIcon} alt="" style={styles.hamburgerIcon} />
        </TouchableHighlight>
      </SafeAreaView>
    </View>
  );
}
