import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '../components/AppBar';
import BottomNavigation from '../components/BottomNavigation';

import './Frame.css';

function Frame(props) {
  return (
    <div className="Frame-container">
      <div className="Frame-top-menu">
        <AppBar />
      </div>
      <div className="Frame-content-container">
        {props.children}
      </div>
      <div className="Frame-bottom-menu">
        <BottomNavigation />
      </div>
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
