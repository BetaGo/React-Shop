import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import GoodsList from './goodsList';
import MyBill from './myBill';
import ShoppingCart from './shoppingCart';

class Content extends Component {
  render() {
    return (
      <div>
        <Route path="/goods-list" component={GoodsList} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="/my-bill" component={MyBill} />
      </div>
    );
  }
}

export default Content;