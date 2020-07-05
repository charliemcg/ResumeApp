import phone from './phone';
import tablet from './tablet';
import {isTablet} from '../../../utilities';
export default isTablet() ? tablet : phone;
