import React, { Component } from 'react';
import CartTable from './cartTable';
import PlaceAnOrder from './placeAnOrder';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <CartTable />
        <PlaceAnOrder />
      </div>
    );
  }
}

export default ShoppingCart;
