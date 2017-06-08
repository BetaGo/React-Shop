import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import GoodsList from './goodsList';
import MyOrder from './myOrder';
import ShoppingCart from './shoppingCart';

class Content extends Component {
  render() {
    return (
      <div>
        <Route path="/goods-list" component={GoodsList} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="/my-order" component={MyOrder} />
      </div>
    );
  }
}

export default Content;