import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '../components/AppBar';
import BottomNavigation from '../components/BottomNavigation';

import './Frame.css';

function Frame(props) {
  return (
    <div>
      <div className="Frame-content-container">
        {props.children}
      </div>
      <AppBar />
      <BottomNavigation />
    </div>
  );
}

Frame.defaultProps = {
  children: '',
};

Frame.propTypes = {
  children: PropTypes.node,
};

export default Frame;
