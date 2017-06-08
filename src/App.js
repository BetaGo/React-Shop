import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from './components/AppBar';
import Content from './components/content/goodsList';
import BottomNavigation from './components/BottomNavigation';

import './App.css'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App-container">
          <div className="App-top-menu">
            <AppBar />
          </div>
          <Content />
          <div className="App-bottom-menu">
            <BottomNavigation />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
