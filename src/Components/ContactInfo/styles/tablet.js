import {getDeviceWidth} from '../../../utilities';

const deviceWidth = getDeviceWidth();

export default {
  contactWrapper: {
    height: '17%',
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
    width: deviceWidth * 0.03,
    height: deviceWidth * 0.03,
  },
  contact: {
    flex: 5,
    display: 'flex',
    justifyContent: 'center',
    color: 'black',
  },
};
