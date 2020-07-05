import {getTitleTopMargin} from '../../../utilities';
import styles from '../../styles';

export default {
  skillsWrapper: {
    marginTop: getTitleTopMargin(),
  },
  title: {
    ...styles.title,
  },
  skillPointsWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  skillColumn: {
    flex: 1,
    marginLeft: 10,
  },
  skillPoint: {
    padding: 2,
  },
};
