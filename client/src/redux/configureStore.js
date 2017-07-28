import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import ThunkMiddleware from 'redux-thunk';

import reducers from './reducers';


export const history = createHistory();

const RouterMiddleware = routerMiddleware(history);

// 全部的 reducer
const allReducers = combineReducers({
  ...reducers,
  router: routerReducer,
});

// Redux Dev Tool:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(allReducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(RouterMiddleware, ThunkMiddleware),
  ));

// const store = createStore(
//   combineReducers({
//     ...reducers,
//     router: routerReducer,
//   }),
//   applyMiddleware(RouterMiddleware, ThunkMiddleware),
// );

export default store;
