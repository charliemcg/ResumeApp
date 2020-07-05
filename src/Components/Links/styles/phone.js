import colors from '../../../colors';
import {getDeviceWidth} from '../../../utilities';

const deviceWidth = getDeviceWidth();

export default {
  linksWrapper: {
    flex: 3,
  },
  linkAttributeWrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: '15%',
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
    height: deviceWidth * 0.1,
    width: deviceWidth * 0.1,
  },
  linkLabel: {
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
  },
};
