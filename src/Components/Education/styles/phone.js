import {getTitleTopMargin} from '../../../utilities';
import styles from '../../styles';

export default {
  educationWrapper: {
    marginTop: getTitleTopMargin(),
  },
  title: {
    ...styles.title,
  },
  educationDegreeWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  date: {
    ...styles.date,
  },
};
