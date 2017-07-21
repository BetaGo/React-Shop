import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';

import routes from './routes';
import store, { history } from './redux/configureStore';


function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        {routes(history)}
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
