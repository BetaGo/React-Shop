import React, { Component } from 'react';
import AppBar from '../components/AppBar';
import BottomNavigation from '../components/BottomNavigation';
import Drawer from '../components/Drawer';

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
          {this.props.children}
        </div>
        <div className="Frame-bottom-menu">
          <BottomNavigation />
        </div>
      </div>
    );
  }
}

export default Frame;