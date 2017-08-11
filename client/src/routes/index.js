import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Shell from '../views/Shell';
import Home from '../views/Home';
import ShoppingCart from '../views/ShoppingCart';
import MyOrder from '../views/MyOrder';

import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';


const routes = browserHistory => (
  <ConnectedRouter history={browserHistory}>
    <div>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/goods-list" />}
      />
      <Route exact path="/goods-list" component={Home} />
      <Route exact path="/shopping-cart" component={ShoppingCart} />
      <Route exact path="/my-order" component={MyOrder} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Shell />
    </div>
  </ConnectedRouter>
);

export default routes;
