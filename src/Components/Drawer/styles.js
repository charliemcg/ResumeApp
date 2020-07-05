import {Dimensions} from 'react-native';
import colors from '../../colors';

const deviceWidth = Dimensions.get('window').width;

export default {
  drawerWithBurger: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
  },
  drawerWrapper: {
    width: '65%',
    height: '100%',
    backgroundColor: colors.reactBlue,
  },
  hamburger: {
    height: deviceWidth * 0.11,
    width: deviceWidth * 0.11,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  hamburgerIcon: {
    height: '70%',
    width: '70%',
  },
  drawerSafeArea: {
    height: '100%',
  },
};
