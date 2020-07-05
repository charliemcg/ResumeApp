import colors from '../../../colors';
import {getDeviceWidth} from '../../../utilities';

const deviceWidth = getDeviceWidth();

export default {
  linksWrapper: {
    height: '24%',
    display: 'flex',
    justifyContent: 'center',
  },
  linkAttributeWrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: '24%',
    backgroundColor: colors.linkBackground,
    marginTop: 1,
  },
  linkIconWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkIcon: {
    height: deviceWidth * 0.05,
    width: deviceWidth * 0.05,
  },
  linkLabel: {
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
  },
};
