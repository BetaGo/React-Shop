import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import GoodsList from './GoodsList';
import MyOrder from './MyOrder';
import ShoppingCart from './ShoppingCart';

class Content extends Component {
  render() {
    return (
      <div>
          <Route path="/goods-list" component={GoodsList} />
          <Route path="/shopping-cart" component={ShoppingCart} />
          <Route path="/my-order" component={MyOrder} />
          <Redirect from='/' to='/goods-list'/>
      </div>
    );
  }
}

export default Content;
