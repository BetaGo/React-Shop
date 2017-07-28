import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Shell from '../views/Shell';
import Home from '../views/Home';
import ShoppingCart from '../views/ShoppingCart';
import MyOrder from '../views/MyOrder';

import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';


const routes = browserHistory => (
  <BrowserRouter history={browserHistory}>
    <div>
      <Route path="/goods-list" component={Home} />
      <Route path="/shopping-cart" component={ShoppingCart} />
      <Route path="/my-order" component={MyOrder} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Shell />
    </div>
  </BrowserRouter>
);

export default routes;
