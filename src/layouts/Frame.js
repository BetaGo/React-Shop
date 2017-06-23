import React, { Component } from 'react';
import AppBar from './AppBar';
import BottomNavigation from './BottomNavigation';
import Drawer from './Drawer';

import "./Frame.css"

class Frame extends Component {
  render() {
    return (
      <div className="Frame-container">
        <div className="Frame-top-menu">
          <AppBar />
          <Drawer />
        </div>
        <div className="Frame-content-container">
          {this.props.child}
        </div>
        <div className="Frame-bottom-menu">
          <BottomNavigation />
        </div>
      </div>
    );
  }
}

export default Frame;