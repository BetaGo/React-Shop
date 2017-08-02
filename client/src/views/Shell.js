import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from '../components/Shell/AppBar';
import BottomNavigation from '../components/Shell/BottomNavigation';
import Drawer from '../components/Shell/Drawer';

import * as appBarActions from '../components/Shell/AppBarRedux';
import * as bottomNavigationActions from '../components/Shell/BottomNavigationRedux';
import * as drawerActions from '../components/Shell/DrawerRedux';

function Shell(props) {
  return (
    <div>
      <AppBar {...props.appBar} {...props.appBarActions} />
      <BottomNavigation {...props.bottomNavigation} />
      <Drawer {...props.drawer} {...props.drawerActions} />
    </div>
  );
}

Shell.propTypes = {
  appBar: PropTypes.object.isRequired,
  appBarActions: PropTypes.object.isRequired,
  bottomNavigation: PropTypes.object.isRequired,
  drawer: PropTypes.object.isRequired,
  drawerActions: PropTypes.object.isRequired,
};


export default connect(
  state => ({
    appBar: state.shell.appBar,
    bottomNavigation: state.shell.bottomNavigation,
    drawer: state.shell.drawer,
  }),
  dispatch => ({
    appBarActions: bindActionCreators(appBarActions, dispatch),
    bottomNavigationActions: bindActionCreators(bottomNavigationActions, dispatch),
    drawerActions: bindActionCreators(drawerActions, dispatch),
  }),
)(Shell);

// export default Shell;
