import {Dimensions} from 'react-native';
import Device from 'react-native-device-detection';

export function isTablet() {
  return Device.isTablet;
}

export function getDeviceWidth() {
  return Dimensions.get('window').width;
}

export function getBackgroundImgSize() {
  return isTablet()
    ? getTabletMainContentWidth() * 2.2
    : getDeviceWidth() * 2.2;
}

export function getTitleTopMargin() {
  return getDeviceWidth() * 0.06;
}

export function getTabletMainContentWidth() {
  return getDeviceWidth() * 0.67;
}
