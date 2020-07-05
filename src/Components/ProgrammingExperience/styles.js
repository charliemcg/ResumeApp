import {getTitleTopMargin} from '../../utilities';
import styles from '../styles';

export default {
  programmingExperienceWrapper: {
    marginTop: getTitleTopMargin(),
  },
  title: {
    ...styles.title,
  },
  programmingExperienceAppDeveloperWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  programmingExperienceAppDeveloper: {
    fontWeight: 'bold',
  },
  date: {
    ...styles.date,
  },
  programmingExperienceApps: {
    marginTop: 5,
  },
  programmingExperienceYoutubeWrapper: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  programmingExperienceYoutube: {
    fontWeight: 'bold',
  },
};
