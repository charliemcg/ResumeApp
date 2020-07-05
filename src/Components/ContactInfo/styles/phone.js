import {getDeviceWidth} from '../../../utilities';

const deviceWidth = getDeviceWidth();

export default {
  contactWrapper: {
    flex: 1,
  },
  touchableContacts: {
    marginTop: deviceWidth * 0.1,
    height: '50%',
    display: 'flex',
  },
  contactAttributeWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  iconWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactIcon: {
    width: deviceWidth * 0.05,
    height: deviceWidth * 0.05,
  },
  contact: {
    flex: 5,
    display: 'flex',
    justifyContent: 'center',
    color: 'black',
  },
};
