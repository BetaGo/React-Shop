import { combineReducers } from 'redux';

import appBar from '../components/Shell/AppBarRedux';
import bottomNavigation from '../components/Shell/BottomNavigationRedux';
import drawer from '../components/Shell/DrawerRedux';
import notice from '../components/Shell/NoticeRedux';

export default combineReducers({
  appBar,
  bottomNavigation,
  drawer,
  notice,
});
