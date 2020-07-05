import {Animated, Easing} from 'react-native';
import colors from '../../colors';

import {getTitleTopMargin, getBackgroundImgSize} from '../../utilities';

// animating the background image
spinValue = new Animated.Value(0);
Animated.loop(
  Animated.timing(spinValue, {
    toValue: 1,
    duration: 40000,
    easing: Easing.linear,
    useNativeDriver: true,
  }),
).start();

const spin = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});

const titleTopMargin = getTitleTopMargin();

export default {
  mainContentBackground: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  animatedBackground: {
    transform: [{rotate: spin}],
    width: getBackgroundImgSize(),
    marginLeft: -110,
    position: 'absolute',
    opacity: 0.3,
  },
  mainContent: {
    padding: titleTopMargin * 0.5,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    color: colors.almostBlack,
  },
  header: {
    marginTop: 5,
    marginBottom: 10,
  },
  name: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  role: {
    fontSize: 28,
    color: colors.reactBlue,
    fontWeight: 'bold',
    textAlign: 'center',
  },
};
