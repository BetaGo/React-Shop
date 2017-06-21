import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import GoodsList from './GoodsList';
import MyOrder from './MyOrder';
import ShoppingCart from './ShoppingCart';

import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

class Content extends Component {
  render() {
    return (
      <div>
          <Route path="/goods-list" component={GoodsList} />
          <Route path="/shopping-cart" component={ShoppingCart} />
          <Route path="/my-order" component={MyOrder} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
      </div>
    );
  }
}

export default Content;
