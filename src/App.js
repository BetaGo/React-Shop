import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { HashRouter } from 'react-router-dom';
import AppBar from './components/AppBar';
import Content from './components/content';
import BottomNavigation from './components/BottomNavigation';


import './App.css'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <HashRouter>
          <div className="App-container">
            <div className="App-top-menu">
              <AppBar />
            </div>
            <div className="App-content-container">
              <Content />
            </div>
            <div className="App-bottom-menu">
              <BottomNavigation />
            </div>
          </div>
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
