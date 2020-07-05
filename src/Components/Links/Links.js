import React from 'react';
import {View, Text, Image, TouchableHighlight, Linking} from 'react-native';
import styles from './styles';
import strings from '../../strings';
import colors from '../../colors';
import playStoreIcon from '../../Assets/PlayStoreIcon.png';
import appStoreIcon from '../../Assets/AppStoreIcon.png';
import githubIcon from '../../Assets/GithubIcon.png';
import youtubeIcon from '../../Assets/YoutubeIcon.png';

const linkItems = [
  {
    icon: playStoreIcon,
    label: strings.linkAndroid,
    link: strings.links.android,
  },
  {icon: appStoreIcon, label: strings.linkIos, link: strings.links.ios},
  {
    icon: githubIcon,
    label: strings.linkGithub,
    link: strings.links.github,
  },
  {
    icon: youtubeIcon,
    label: strings.linkYoutube,
    link: strings.links.youtube,
  },
];

export default function Link() {
  return (
    <View style={styles.linksWrapper}>
      {linkItems.map((item, i) => {
        return (
          <TouchableHighlight
            key={i}
            style={styles.linkAttributeWrapper}
            underlayColor={colors.hamburgerHighlight}
            //open webpage in browser
            onPress={() => {
              //TODO inform user of error
              Linking.openURL(item.link).catch((err) => console.log(err));
            }}>
            <>
              <View style={styles.linkIconWrapper}>
                <Image source={item.icon} alt="" style={styles.linkIcon} />
              </View>
              <View style={styles.linkLabel}>
                <Text>{item.label}</Text>
              </View>
            </>
          </TouchableHighlight>
        );
      })}
    </View>
  );
}
