import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { Provider } from 'react-redux';

import routes from './routes';
import store, { history } from './redux/configureStore';

const theme = createMuiTheme({
  palette: createPalette({
    type: 'light',
  }),
});

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        {routes(history)}
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
