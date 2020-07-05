import {getTitleTopMargin} from '../../utilities';
import styles from '../styles';

const titleTopMargin = getTitleTopMargin();

export default {
  workHistoryWrapper: {
    marginTop: titleTopMargin,
  },
  title: {
    ...styles.title,
  },
  workHistoryItem: {
    marginBottom: titleTopMargin * 0.5,
  },
  workHistoryItemWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  workHistoryItemJob: {
    fontWeight: 'bold',
  },
  date: {
    ...styles.date,
  },
  workHistoryItemPoints: {
    marginTop: 5,
  },
  workHistoryItemPointWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
};
