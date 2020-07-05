import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import email from 'react-native-email';
import styles from './styles';
import strings from '../../strings';
import colors from '../../colors';
import locationIcon from '../../Assets/pin.png';
import phoneIcon from '../../Assets/phone.png';
import emailIcon from '../../Assets/mail.png';

const contactItems = [
  {icon: locationIcon, label: strings.contactLocation},
  {icon: phoneIcon, label: strings.contactPhone},
  {icon: emailIcon, label: strings.contactEmail},
];

export default function ContactInfo() {
  return (
    <View style={styles.contactWrapper}>
      <TouchableHighlight
        style={styles.touchableContacts}
        underlayColor={colors.hamburgerHighlight}
        // clicking the contact info will open the email app
        onPress={() =>
          //TODO display error to user
          email(strings.contactEmail, {}).catch((err) => console.log(err))
        }>
        <>
          {contactItems.map((item, i) => {
            return (
              <View key={i} style={styles.contactAttributeWrapper}>
                <View style={styles.iconWrapper}>
                  <Image source={item.icon} alt="" style={styles.contactIcon} />
                </View>
                <View style={styles.contact}>
                  <Text>{item.label}</Text>
                </View>
              </View>
            );
          })}
        </>
      </TouchableHighlight>
    </View>
  );
}
