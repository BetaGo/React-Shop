import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';

import routes from './routes';
import store, { history } from './redux/configureStore';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          {routes(history)}
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
