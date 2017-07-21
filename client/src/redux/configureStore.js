import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import ThunkMiddleware from 'redux-thunk';

import reducers from './reducers';


export const history = createHistory();

const RouterMiddleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(RouterMiddleware, ThunkMiddleware),
);

export default store;
