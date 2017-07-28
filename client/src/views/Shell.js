import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from '../components/Shell/AppBar';
import BottomNavigation from '../components/Shell/BottomNavigation';
import Drawer from '../components/Shell/Drawer';

import * as appBarActions from '../components/Shell/AppBarRedux';
import * as bottomNavigationActions from '../components/Shell/BottomNavigationRedux';

function Shell(props) {
  return (
    <div>
      <AppBar {...props.appBar} />
      <BottomNavigation {...props.bottomNavigation} />
      <Drawer />
    </div>
  );
}

Shell.propTypes = {
  appBar: PropTypes.object.isRequired,
  bottomNavigation: PropTypes.object.isRequired,
};


export default connect(
  state => ({
    appBar: state.shell.appBar,
    bottomNavigation: state.shell.bottomNavigation,
  }),
  dispatch => ({
    appBarActions: bindActionCreators(appBarActions, dispatch),
    bottomNavigationActions: bindActionCreators(bottomNavigationActions, dispatch),
  }),
)(Shell);

// export default Shell;
