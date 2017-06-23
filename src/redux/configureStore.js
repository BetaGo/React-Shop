import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import reducers from './reducers';

import goodsList from '../../public/api/goodsList.json';
import shoppingCartList from '../../public/api/shoppingCartList.json';
import orderList from '../../public/api/orderList.json';

const defaultState={
  goodsList,
  shoppingCartList,
  orderList
}

export const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  defaultState,
  applyMiddleware(middleware)
);

export default store;
