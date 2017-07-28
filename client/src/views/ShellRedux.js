import { combineReducers } from 'redux';

import appBar from '../components/Shell/AppBarRedux';
import bottomNavigation from '../components/Shell/BottomNavigationRedux';

export default combineReducers({
  appBar,
  bottomNavigation,
});
