import { combineReducers } from 'redux';

import appBar from '../components/Shell/AppBarRedux';
import bottomNavigation from '../components/Shell/BottomNavigationRedux';
import drawer from '../components/Shell/DrawerRedux';

export default combineReducers({
  appBar,
  bottomNavigation,
  drawer,
});
